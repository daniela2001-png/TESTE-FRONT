import React, { useState } from 'react'
import Header from '../Header';
import Footer from '../Footer/index';

import { ContainerHeader, ComponentFooter } from './LoginStyled'

import "../../assets/styles/components/NavbarLogin.css";
import { Navbar } from "./Navbar";


const API = process.env.REACT_APP_API


export const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetch(`${API}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'email': email,
                'pwd': password,
            })
        }).then(response => response.json())
            .then(data => {
                if (data.status !== 'Email not found' && data.status !== 'Invalid password') {
                    // console.log(data);
                    props.history.push('/profile');
                }
                else
                    setError(data.status);
                console.log('Success:', data.status);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="row p-4">
            <ContainerHeader><Header></Header></ContainerHeader>
            <div className="container-fluid">
                <Navbar />
            </div>
            <div className="col-md-5">
                <form onSubmit={handleSubmit} className="card card-body">
                    <div className="form-group">
                        <input
                            type="email"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            className="form-control"
                            placeholder="email"
                            autoFocus
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                            className="form-control"
                            placeholder="Contraseña"
                        />
                    </div>
                    <button className="btn btn-primary btn-block">
                        Iniciar Sesion
                    </button>
                </form>
                <div className="card card-body">
                    <h1>{error}</h1>
                </div>
            </div>
            <ComponentFooter><Footer></Footer></ComponentFooter>
        </div>
    );
}
