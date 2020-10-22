import React from 'react'

import whstasappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

const TeacherItem = () => {
    return (
        <article className="teacher-item">
                <header>
                    <img src="https://avatars3.githubusercontent.com/u/16759885?s=460&u=4de0e0c083a81b82a93235d7ebbcdf63c8c9bad6&v=4" alt="Bdo"/>
                    <div>
                        <strong>Bdo</strong>
                        <span>Quimica</span>
                        <p>
                            Entusiasta das melhroes tecnologias de química avançada.
                            <br/><br/>
                            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                        </p>
                        <footer>
                            <p>Preço/hora
                                <strong>R$ 80,00</strong>
                            </p>
                            <button type="button">
                                <img src={whstasappIcon} alt="Entrar em contato"/>
                                Entrar em contato
                            </button>
                        </footer>
                    </div>
                </header>
            </article>

    )

}

export default TeacherItem;