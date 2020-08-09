import React from 'react';

import PageHearder from '../../components/PagaHeader';

import './style.css';
import CardTeacher from '../../components/CardTeacher';
import Input from '../../components/Input';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHearder title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria" />
          <Input name="week_day" label="Dia da semana" />
          <Input type="time" name="time" label="Hora" />

        </form>
      </PageHearder>

      <main>
        <CardTeacher />
      </main>
    </div>
  );
};

export default TeacherForm;
