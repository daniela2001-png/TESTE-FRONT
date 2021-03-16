import React, { useState } from 'react'
import Header from '../Header';
import Footer from '../Footer/index';

import { Navbar } from "./Navbar";
import { ContainerHeader, ComponentFooter } from './LoginStyled'

const API = process.env.REACT_APP_API



export const Register = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${API}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                'names_organizer': name,
                'email': email,
                'pwd': password,
                'confirmPwd': confirmPassword
            })
        }).then(
            function (response) {
                if (response.status === 200)
                    props.history.push('/login')
                console.log(response);
            }
        ).catch(
            (error) => console.log(error)
        )
    }

    return (
        <div className="row p-4">
            <ContainerHeader><Header></Header></ContainerHeader>
            <div className="container-fluid">
                <Navbar />
            </div>
            <div className="col-md-4">
                <form onSubmit={handleSubmit} className="card card-body">
                    <div className="form-group">
                        <input
                            type="text"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            className="form-control"
                            placeholder="Nombre"
                            autoFocus
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            className="form-control"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            className="form-control"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            onChange={e => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                            className="form-control"
                            placeholder="Confirmar Contraseña"
                        />
                    </div>
                    <button className="btn btn-primary btn-block">
                        Registrarse
                    </button>
                </form>
            </div>
            <ComponentFooter><Footer></Footer></ComponentFooter>
        </div>
    );
}