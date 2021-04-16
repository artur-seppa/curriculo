import React from 'react'
import { Link } from 'react-router-dom';
import '../../pages/Main/main.css'

function Main() {
    return ( 
        <div className='estrutura'>
            <h2>Seja Bem-Vindo!</h2>
            <p>Para acessar o meu curriculo clique no botão abaixo</p>

            <p className='container'>
            <Link to={'/Curriculo'} className='botao'>visualizar</Link>
            </p>
        
        </div>
    )
}

export default Main;
