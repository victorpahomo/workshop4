import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const CompLogin = () => {
    const {loginWithRedirect} = useAuth0();
   // document.addEventListener('DOMContentLoaded', loginWithRedirect() )
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

export default CompLogin