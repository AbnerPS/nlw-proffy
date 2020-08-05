import React from 'react';
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import backImg from '../../assets/icons/back.svg'
import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backImg} alt="Voltar para Landing"/>
                    </Link>
                    <img src={logoImg} alt="Logo Proffy"/>
                </div>
                <div className="header-content">
                    <strong>Estes são os professores disponíveis</strong>
                </div>
            </header>
        </div>
    );
}

export default TeacherList;