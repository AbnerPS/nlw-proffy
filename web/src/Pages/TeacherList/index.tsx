import React from 'react';
import Header from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <Header title="Estes são os professores disponíveis">
                <form id="search-teachers">

                    <Input name="subject" label="Matéria"/>
                    <Input name="week_day" label="Dia da Semana"/>
                    <Input name="time" label="Horário" type="time"/>

                </form>
            </Header>

            <main>
                <TeacherItem/>

                <TeacherItem/>

                <TeacherItem/>

                <TeacherItem/>
            </main>
        </div>
    );
}

export default TeacherList;