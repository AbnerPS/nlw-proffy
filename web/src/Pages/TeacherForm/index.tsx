import React from 'react';
import Header from '../../components/PageHeader'
import Input from '../../components/Input'
import warningIcon from '../../assets/icons/warning.svg'
import './styles.css'

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <Header title="Que bom que você quer das aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"/>

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="Whatsapp"/>
                </fieldset>

                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="subject" label="Matéria"/>
                    <Input name="cost" label="Custo da aula por hora"/>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante! <br/>
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;