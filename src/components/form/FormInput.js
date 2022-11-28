import React from "react";

const FormInput = props => (
    <div className="row">
        <label>{props.description}</label>
        <input id={props.description} type={props.type} placeholder={props.placeholder}/>
    </div>
);

export default FormInput