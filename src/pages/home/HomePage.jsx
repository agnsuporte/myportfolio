import React from "react";
import { FaDownload } from "react-icons/fa";

import {
  Bar,
  RedeSocial,
  BoxContainer,
  PortfolioContainer,
  FormContact,
} from "../../components";

import menu from "../../util/data-json/menu.json";
import portfolio from "../../util/data-json/portfolio.json";
import services from "../../util/data-json/services.json";

import logo from "../../assets/AgnSuporteLogo.svg";
import curriculum from "../../assets/curriculum.alexandre.pdf";

import "./home-page.css";

const HomePage = () => {
  return (
    <>
      <section id="main">
        <Bar listMenu={menu} appLogo={logo} />

        <div className="name">
          <p>Olá! Seja Bem Vindo.</p>
          <h1>
            Sou <font color="#26A269">Alexandre</font> Gomes
          </h1>
          <p className="details">
            AGNSuporte tem o prazer de ajudar você a alcançar os seus objetivos
            com o desenvolvimento de um website e suporte pós-venda para que a
            sua presença na internet seja a melhor possível.
          </p>
          <a href={curriculum} className="cv-btn" download>
          <FaDownload /> &nbsp;&nbsp;   Download Cv
          </a>
        </div>

        <div className="black-line"></div>

        <RedeSocial />
      </section>

      <section id="about">
        <div className="about-text">
          <h1>Sobre</h1>
          <h2>Desenvolvedor FreeLancing FrontEnd / BackEnd</h2>
          <p>
            A nossa solução integra-se facilmente com uma vasta gama de
            provedores de alojamento (hospedagem) disponíveis no mercado e pode
            permitir beneficiar plenamente uma produtividade melhorada em sua
            atuação.
          </p>
          <a href="#contact-form">Para mais detalhes...</a>
        </div>
        <div className="about-model">
          <img
            src="https://showmyfiles.s3.eu-west-2.amazonaws.com/euSobre.png"
            alt="Sobre"
          />
        </div>
      </section>

      <section id="services">
        <BoxContainer
          title="Serviços"
          subtitle="Aqui estão alguns serviços que fornecemos a você"
          listBox={services}
        />
      </section>

      <section id="portfolio">
        <h1 className="p-headind">Estamos em crescimento!</h1>
        <PortfolioContainer portfolios={portfolio} />
      </section>

      <section id="contact-btn">
        <h1 className="c-b-heading">Se você tem algum projeto em mente?</h1>
        <a href="#contact-form">Contate-me</a>
      </section>

      <section id="contact-form">
        <FormContact />
      </section>

      <section id="footer">
        <hr/>
      </section>
    </>
  );
};

export default HomePage;
