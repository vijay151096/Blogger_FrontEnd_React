import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const Form = props => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password"/>
        <FormButton title="Log in"/>
    </div>
);

export default Form