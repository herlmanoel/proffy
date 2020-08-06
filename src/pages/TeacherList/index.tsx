import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './style.css';

function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os Proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Matéria</label>
                        <input type="text" id="week-day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Matéria</label>
                        <input type="text" id="time"/>
                    </div> 
                </form>
            </PageHeader>
            <main>
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;