import React from 'react'
import { Link } from 'react-router-dom';
import '../../pages/Main/main.css'

function Main() {
    return ( 
        <div className='estrutura'>
            <h2 className='titulo'>Seja Bem-Vindo!</h2>
            <p className='titulo'>Para acessar o meu curriculo clique no botão abaixo</p>

            <p className='container'>
            <Link to={'/Curriculo'} className='botao'>visualizar</Link>
            </p>
        
        </div>
    )
}

export default Main;
