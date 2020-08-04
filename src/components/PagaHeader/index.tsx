import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

interface PagaHeaderProps {
  title: String;
}

const PagaHeader: React.FC<PagaHeaderProps> = ({ title }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="voltar" />
        </Link>
        <img src={logoImg} alt="proffy" />
      </div>

      <div className="header-content">
        <strong>
          {title}
        </strong>
      </div>
    </header>
  )
}

export default PagaHeader;