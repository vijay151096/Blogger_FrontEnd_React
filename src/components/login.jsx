import React from 'react';
import '../styles/login.css'
import FormHeader from "./form/FormHeader";
import Form from "./form/Form";

function Login() {
        return(
            <div id="loginform">
                <FormHeader title="Login" />
                <Form />
            </div>
        )
}

export default Login


