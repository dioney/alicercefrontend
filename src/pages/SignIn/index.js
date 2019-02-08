import React from 'react'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

import './styles.scss'

export default class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email: null,
            password: null
        }
    }

    handleClick = () => {
        this.props.history.push('/dashboard');
    }

    render(){
        
        return(
            <div className="p-grid login">

                <img alt="Card" src='https://www.primefaces.org/serenity-react/assets/layout/images/logo-slim.png' className="login__logo" />

                <Card className="p-col-12 p-md-5 login__container">
                    

                    <h3>Login</h3>
                    <span className="p-float-label mb-1">
                        <InputText id="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                        <label htmlFor="email">E-mail</label>
                    </span>

                    <span className="p-float-label mb-1">
                        <InputText id="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                        <label htmlFor="password">Senha</label>
                    </span>

                    <div className="p-grid p-justify-between">
                        <Button label="Acessar" onClick={this.handleClick} className="w-100" />
                        <Button label="Lembrar Senha" onClick={this.handleClick} className="p-button-secondary w-100" />
                    </div>
                    

                    

                </Card>
            </div>
        )
    }
}