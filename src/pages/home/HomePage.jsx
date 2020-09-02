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
          <button>Para mais detalhes...</button>
        </div>
        <div className="about-model">
          <img
            src="https://lh3.googleusercontent.com/117NaDJdCzq4mLTcW-Lmpc3YsvUO_ljgIq2ygezTHE7qaZ8We1JFfz4qeAPFcEFptUN8Mn80-e_KKAY0bwNMs1giB3ug_lowQ3jxjCFIQ9mJcq82TXXuTHIGQhxrDeFQdK6RHO1LTaCOwLOtCzFIYcYkIw5NhNh5Ys4HVOIV9u8u-xhA0LtVRljjnWI8V-sFnWzIw0qpO1llGY8tNMYxSSJM3ZZw9dWfG2ggJYoYpn60Cc00jZxgqZnrr6368VAzjA0o9UpwpBWYZs9ntcRvz1Hne7HwNy0zFAGIrJUuZrr6DfaV9lNW0lqWKBt7SCP16TrVQ2oo8453z5uyyWk7I968BOKEHF12v4a68o8GvrIi6CrdBi5K99YAhMT8KPJiczOkXYujq0Y9N6HgAVIvO_annOPpwk12kX7AKvwgx-x80UfGvJFB072sOH9lNn0OKX0hElqMTl4XMYda2WHWU11bohAeiVzzxD3y2-WsU3TzrPwVP6FfsZamv86gsEdtA1z-j98H0_kGK8dxZJQgU0WIr87sNf6TikDk5MlCxvqs4uGNfBWPWB41sNL-rrZMy-GH_af_8rbyXJ1GRWLljgTq1M1DpIoCgy_Esiqo2xSu5aS3eBLgjX5x7ka-XBubYu6M_X_246aAJx_BJxnSEn9rX-rWH8VK_Xx64rWI03FwnylNaxtEukJfQrzxog=w424-h500-no?authuser=1"
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
        <h1 className="p-headind">Portfolio</h1>
        <PortfolioContainer portfolios={portfolio} />
      </section>

      <section id="contact-btn">
        <h1 className="c-b-heading">Se você tem algum projeto em mente?</h1>
        <button>Contate-me</button>
      </section>

      <section id="contact-form">
        <FormContact />
      </section>
    </>
  );
};

export default HomePage;
