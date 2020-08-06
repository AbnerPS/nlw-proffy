import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/icons/whatsapp.svg';

const TeacherItem = () => {
    return (
    <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/42770293?s=460&u=e965f3bcac1326e5a2797bb4d131ad5953d88bba&v=4" alt="Abner"/>
            <div>
                <strong>Abner Silva</strong>
                <span>Quimica</span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/> <br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das
            pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das
            minhas explosões.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 20,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;