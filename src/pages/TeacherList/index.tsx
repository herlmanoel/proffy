import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import './style.css';


function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        name="subject"
                        label="Matéria"
                        // passando via props
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Matemática', label: 'Matemática' },
                        ]}
                    />
                    <Select name="week_day" label="Dia da semana" 
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda' },
                            { value: '2', label: 'Terça' },
                            { value: '3', label: 'Quarta' },
                            { value: '4', label: 'Quinta' },
                            { value: '5', label: 'Sexta' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;