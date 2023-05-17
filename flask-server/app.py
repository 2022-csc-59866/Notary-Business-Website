import flask
from flask import Flask, request, jsonify, session
from flask_login import LoginManager, UserMixin, login_user, login_required
import flask_login
from passlib.hash import pbkdf2_sha256
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.hybrid import hybrid_property
import json
from models import User, Message, db
from flask_login import logout_user
from sqlalchemy.orm.exc import NoResultFound

app = Flask(__name__)
app.config.from_pyfile('config.py')
app.config['SECRET_KEY'] = 'secretkey'
app.app_context().push()
db.init_app(app)
login_manager = LoginManager(app)
@login_manager.user_loader


def load_user(user_id):
    return User.query.get(int(user_id))
@app.route("/signup", methods=["POST"])


def signup():
    user_data = flask.request.get_json()
    required_fields = ["full_name", "email", "password"]
    for field in required_fields:
        if field not in user_data:
            flask.abort(400, description=f"{field} cannot be blank.")
    email = user_data["email"]
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        flask.abort(409, description="An account with this email already exists.")
    user = User()
    user.full_name = user_data["full_name"]
    user.email = user_data["email"]
    user.password = user_data["password"]
    db.session.add(user)
    db.session.commit()
    return flask.jsonify(
        {
            "full_name": user.full_name,
            "email": user.email,
        }
    )

@app.route("/login", methods=["POST"])
def login():
    login_data = flask.request.get_json()
    required_fields = ["email", "password"]
    for field in required_fields:
        if field not in login_data:
            flask.abort(400, description=f"{field} cannot be blank.")
    user = User.query.filter_by(email=login_data["email"]).one()
    if not user:
        flask.abort(401, description=f"Incorrect email or password.")
    is_correct_password = pbkdf2_sha256.verify(login_data["password"], user.password)
    if not is_correct_password:
        flask.abort(401, description=f"Incorrect email or password.")
    login_user(user)
    return flask.jsonify(
        {
            "full_name": user.full_name,
            "email": user.email,
        }
    )

@app.route("/logout", methods=["POST"])
@flask_login.login_required
def logout():
    login_data = flask.request.get_json()
    try:
        user = User.query.filter_by(email=login_data["email"]).one()
    except NoResultFound:
        return {"error": "User not found"}, 404
    logout_user()
    return {}

@app.route('/contact', methods=['POST'])
def message():
    data = request.form
    full_name = data.get('full_name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')
    message = Message(full_name=full_name, email=email, subject=subject, message=message)
    db.session.add(message)
    db.session.commit()
    return jsonify({'message': 'Message saved successfully'})


import stripe
stripe.api_key = 'sk_test_51N6Q8tAaJk6jpItY0aIs34Zg3gANNVQUZNidxm05Vsc04QsBvDHxwABRx14vjWLH1rYKTcnWmIzLD5SRVdqCWrky00rlsbNxYJ'
     
@app.route('/pay', methods=['POST'])
def pay():
    try:
        data = json.loads(request.data)
        # Create a PaymentIntent with the order amount and currency
        intent = stripe.PaymentIntent.create(
            amount=2500,
            currency='usd',
            automatic_payment_methods={
                'enabled': True,
            },
        )
        return jsonify({
            'clientSecret': intent['client_secret']
        })
    except Exception as e:
        return jsonify(error=str(e)), 403

if __name__ == "__main__":
    app.run(port=8080, debug=True)

    