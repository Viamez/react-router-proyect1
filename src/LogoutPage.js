import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
    const auth =useAuth();
    const logout=(event)=>{
        event.preventDefault();
        auth.logout();
        console.log('Cerraste sesion')
    }
  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label>¿Segura de cerrar sesion?</label>
        <button type="submit">salir</button>
      </form>
    </>
  );
}

export { LogoutPage };
