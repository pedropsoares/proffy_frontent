import React from 'react';

import PageHearder from '../../components/PagaHeader'

import './style.css';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHearder title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject"/>
          </div>
          
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>

        </form>
      </PageHearder>
    </div>
  )
}

export default TeacherForm;