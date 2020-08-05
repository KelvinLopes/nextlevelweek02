import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
                   <article className="teacher-item">
                   <header>
                   <img src="https://avatars2.githubusercontent.com/u/38872754?s=460&u=5a703d160eb906c979e8c5620cd642db3747e075&v=4" alt="Kelvin Lopes" />
                   <div>
                       <strong>Kelvin Lopes</strong>
                       <span>ReactJS</span>
                    </div>
                   </header>
                       <p>
                           Entusiasta das melhores formas de desenvolver com o ReactJS.
                           <br/> <br/>
                           Apaixonado por aprender novas coisas.
                       </p>
                       <footer>
                           <p>
                                Preço/hora
                                <strong>R$ 100,00</strong>
                            </p>
                                <button>
                                    <img src={whatsappIcon} alt="Watsapp" />
                                    Entrar em contato
                                </button>
                        </footer> 
               </article>
    );
}

export default TeacherItem;