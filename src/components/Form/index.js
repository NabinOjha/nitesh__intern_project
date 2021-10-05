import React, { useState } from 'react'

import { Formik, Field, Form } from 'formik';
import * as Yup from "yup"
import { useHistory } from 'react-router';



const InputField = ({ label, type, form: { touched, errors }, field, ...props }) => {
    return <div style={{ display: "flex", flexDirection: "column", marginTop: 15, }}>
        <label >{label}</label>
        <input  {...props} {...field} type={type} style={{ padding: 8, fontSize: 15, border: "none", background: "#ddd", borderRadius: 3 }} />
        {touched[field.name] &&
            errors[field.name] && <div className="error" style={{ color: "red" }}>{errors[field.name]}</div>}
    </div>
}

const Signup = () => {
    const history = useHistory()
    const signUp = history.location.pathname === "/sign_up"
    const [error, setError] = useState()

    return <Formik initialValues={{
        email: "", password: "", confirm_password: ""
    }}
        validationSchema={Yup.object().shape({
            email: Yup.string().required("Email is required.").email("Must be a valid email."),
            password: Yup.string().required("Password is required").min(6, "Pasword must be larger than six digits."),
            confirm_password: signUp && Yup.string().required("Confirm password is required.").test('passwords-match', 'Passwords must match', function (value) {
                return this.parent.password === value
            })
        })}
        onSubmit={(values) => {
            const users = JSON.parse(localStorage.getItem("users")) || []
            const current_user = users.find(u => u.email === values.email)

            console.log(current_user)

            if (signUp) {
                if (values.email && !current_user) {
                    localStorage.setItem("users", JSON.stringify([...users, values]))
                }
                localStorage.setItem("currentUser", JSON.stringify(values || current_user))
                history.go(0)

            } else if (current_user) {
                localStorage.setItem("currentUser", JSON.stringify(values || current_user))
                history.go(0)
            } else {
                setError("Invalid email or password")
            }


        }}>
        {() => {
            return <Form style={{ width: 650, background: "#fff", color: "#000", padding: 30, borderRadius: 10, margin: "0 auto" }}>
                <h4 style={{ width: "100%", textAlign: "center", fontSize: 35, color: "blue" }}>{signUp ? "Sign up" : "Login"}</h4>
                {error ? <span style={{ color: "red" }}>{error}</span> : null}
                <Field component={InputField} placeholder="Email" name="email" label="Email" type="email" />
                <Field component={InputField} name="password" placeholder="Password" label="Password" type="password" />
                {signUp && <Field component={InputField} name="confirm_password" placeholder="Confirm Password" label="Confirm Password" type="password" />}
                <button type="submit" style={{ width: "100%", background: "blue", border: "none", color: "#fff", fontSize: 22, padding: 5, marginTop: 20 }}> {signUp ? "Sign up" : "Log in"}</button>
                {<button type="button" style={{ width: "100%", background: "yellow", border: "none", color: "#000", fontSize: 22, padding: 5, marginTop: 20 }} onClick={() => {
                    if (signUp) {
                        history.push("/login")
                    } else {
                        history.push("/sign_up")
                    }
                }}>{signUp ? "Login" : "Sign up"}</button>}

            </Form>
        }}
    </Formik >

}


export default Signup;