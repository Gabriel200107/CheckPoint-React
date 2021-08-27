import React from 'react'
import './Body.css'
import img1 from "../img/author.png"
import img2 from "../img/logo.svg"

export default function Body() {

    return (
        <div className="corpo">
            <header>
                <h1>Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos </h1>
                <hr className="linha" />
                <p className="texto1">
                    A infecção causada pela variante Delta pode provocar sistomas diferentes da doença causada pela linhagem original do novo coronavirus
                </p>
                <section className="img1"><img src={img1} /></section>
                <hr className="linha" />
                <span className="data">24/08/2021 às 16:44 | Atualizado às 16:56</span>
                <div>
                    <img className="img2" src={img2} width="130px" height="87px" />
                </div>
            </header>
            <div>
                <p className="texto2">
                    Por ser uma doença nova, a <a href="#">Covid-19</a> ainda não foi compreendida totalmente pela comunidade médica global.
                    Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.
                </p>
                <p className="texto3">
                    A <a href="#">variante Delta da Covid-19</a>, originalmente conhecida como B.1.617.2, existe desde o final do ano passado,
                    mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível.
                    Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.
                </p>
            </div>
        </div>

    )
}