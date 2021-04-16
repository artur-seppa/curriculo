import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
    return (
        <div className='estrutura-profile'>
            <picture className='profile-foto'>
                <img src="imagens/foto_ampliada.jpeg" alt=""></img>
            </picture>

            <nav className='links'>
                <a onClick={foo}>Resumo</a>
                <a onClick={foo}>Formação Academica</a>
                <a onClick={foo}>qualificações</a>
                <br></br>
                <Link to={'/'}>voltar</Link>

                
            </nav>
        </div>
    )
}

export default Profile
