import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState("");
  const login = (event) => {
    event.preventDefault();
    auth.login({username})
  };
  if(auth.user){
    return <Navigate to="/profile" />
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export { LoginPage };
