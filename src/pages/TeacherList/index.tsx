import React from 'react';

import PageHearder from '../../components/PagaHeader'

import './style.css';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHearder 
        title="Estes são os
        proffys disponíveis."
      />
    </div>
  )
}

export default TeacherForm;