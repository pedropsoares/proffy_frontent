import React from 'react';

import PageHearder from '../../components/PagaHeader';
import CardTeacher from '../../components/CardTeacher';
import Input from '../../components/Input';
import Select from '../../components/Select/index';

import './style.css';

const TeacherForm: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHearder title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Matematica', label: 'Matematica' },
              { value: 'Fisica', label: 'Fisica' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Educação Fisica', label: 'Educação Fisica' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sabado' },
            ]}
          />
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
