import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { login } from 'store/user'

const LoginFormView = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <Field name="username" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <Field name="password" component="input" type="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

const onSubmit = ({ username, password }, dispatch, props) => {
    dispatch(login(username, password)).then(() => {
        if (props.onLogin) props.onLogin()
    })
}

const LoginForm = reduxForm({
    form: 'login',
    onSubmit,
    initialValues: {
        username: "olmo",
        password: "test",
    },
})(LoginFormView)

export default LoginForm