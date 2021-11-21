import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
    });
    let history = useHistory();

    const { name, email, password, error, loading } = data;

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        setData({ ...data, error: null, loading: true });
        if (!name || !email || !password) {
            setData({ ...data, error: "All fields are required" });
        }

        setData({
            name: "",
            email: "",
            password: "",
            error: null,
            loading: false,
        });

        history.push("/home");
    };

    return (
        <>
            <LoginForm />
            {/* <section>
                <h3>login</h3>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="input_container">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input_container">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    {error ? <p className="error">{error}</p> : null}
                    <div className="btn_container">
                        <button className="btn" disabled={loading}>
                            {loading ? "Creating ..." : "click me to login"}
                        </button>
                    </div>
                </form>
            </section> */}
        </>
    );
};

export default LoginPage;
