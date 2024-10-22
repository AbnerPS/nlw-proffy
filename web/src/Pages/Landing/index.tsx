import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/icons/study.svg'
import giveClassesIcon from '../../assets/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/icons/purple-heart.svg'

function Landing() {
  return (
      <div id="page-landing">
          <div id="page-landing-content" className="container">
              <div className="logo-container">
                  <img src={logoImg} alt="Logo Proffy"/>
                  <h2>Seu plataforma de estudos online</h2>
              </div>

              <img src={landingImg} alt="Plataforma de estudos" className="hero-image"/>

              <div className="buttons-container">
                  <Link to="/study" className="study">
                      <img src={studyIcon} alt="Estudar"/>
                      Estudar
                  </Link>

                  <Link to="/give-classes" className="give-classes">
                      <img src={giveClassesIcon} alt="Dar Aulas"/>
                      Dar Aulas
                  </Link>
              </div>

              <span className="total-connections">
                  Total de 200 conexões realizadas
                  <img src={purpleHeartIcon} alt="Coração   Conexões"/>
              </span>
          </div>
      </div>
  );
}

export default Landing;
