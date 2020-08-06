import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


import './style.css';

export default function TeacherItem() {

    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/35230448?s=460&u=3e498adea269a8b70eae50fbaa11ca9808ffccc1&v=4" alt="Herlmanoel Fernandes" />
                <div>
                    <strong>Herlmanoel Fernandes</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> <br />
                         Laboriosam obcaecati tempora, molestiae nesciunt voluptate, <br />
                         ad dolorum tenetur provident illum repellendus cupiditate <br />
                         deserunt dolor, excepturi quam quisquam architecto fugit <br />
                         corporis beatae.
                     </p>
            <footer>
                <p>
                    Preço/hora
                             <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                             Entrar em contato
                         </button>
            </footer>
        </article>
    );
}