import React, { useEffect } from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router";

function Thirdpartylogin() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("SignInDiv").hidden = true;
    navigate("/home")
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("SignInDiv").hidden = false;
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: "1052543905785-tpuu9bh5gb8ipqbjlvmndbg8e39u9na1.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    window.google.accounts.id.renderButton(document.getElementById("SignInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div>
      <div id="SignInDiv"></div>
      {Object.keys(user).length != 0 && <button onClick = {(e) => handleSignOut(e)}>Sign Out</button>}
    </div>
  );
}

export default Thirdpartylogin;
