import React from 'react';

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="caontainer">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataformar de estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt="plataforma de estudo"
          className="hero-img"
        />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="estudar"/>
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="estudar"/>
            Estudar
          </a>
        </div>
        <span className="total-conections">
          total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="coração roxo"/>
        </span>
      </div>
    </div>
  )
}

export default Landing;