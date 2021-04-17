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

                <a href="linkedin.com/in/artur-seppa-reiman-4994ab1b4">linkedin</a>
                <a href="https://www.instagram.com/_seppa/">Istagram</a>
                <a href="https://twitter.com/_seppa?lang=pt">Twitter</a>
                <br></br>
                <Link to={'/'}>voltar</Link>

                
            </nav>
        </div>
    )
}

export default Profile
