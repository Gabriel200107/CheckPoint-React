import React from 'react'
import './Header.css'
export default function Components() {

   return(
    <>
        <header> 
            <div>
                <nav>
                    <ul className="menu">
                        <li className="botoes"> Nacional <span className="bola"></span></li>
                        <li className="botoes">Internacional</li>
                        <li className="botoes">Saúde</li>
                        <li className="botoes">Tecnologia</li>
                        <li className="botoes">Esporte</li>
                        <li className="botoes">Entretenimento</li>
                        <li className="botoes">Estilo</li>
                        <li className="botoes">Viagem & Gastronomia</li>
                        <li className="botoes">Newsletters</li>
                        <li className="botoes">Podcasts</li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
)}