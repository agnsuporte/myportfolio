import React, { useState } from "react";
import api from "../../services/api";

import PreLoader from "../PreLoader/PreLoader";

import "./form-contact.css";

const FormContact = () => {
  const initialState = () => {
    return {
      name: "",
      email: "",
      message: "",
    };
  };

  const [erro, setErro] = useState(false);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoader(true);
    
    const data = { ...values };

    api
      .post("/home/contact", data)
      .then((resp) => {
        if (!resp.data.erro && !resp.data.error) {
          setMessage("Mensagem enviada com sucesso.");
          setValues(initialState);
        } else {
          if (resp.data.error) {
            if (resp.data.statusCode === 400) {
              const text =
                "Não foi possível registrar sua mensagem, pois há informação obrigatória em branco. Resolva antes de continuar. Obrigado!";
              setMessage(text);
            } else {
              setMessage(resp.data.message);
            }
          } else {
            setMessage(resp.data.erro);
          }
          setErro(true);
        }

        setLoader(false);

      })
      .catch((err) => {
        setMessage(err);
        setErro(true);
        setLoader(false);
      });

    

    return;
  };

  return (
    <div className="form-contact">
      {loader && <PreLoader />}
      {erro || (message && <p>{message}</p>)}
      <form onSubmit={handleSubmit}>
        <div className="contact-left">
          <h1 className="c-l-heading">
            Nos{" "}
            <font style={{ borderBottom: "3px solid #1ED98B" }}>escrev</font>a
          </h1>
          <div className="f-name">
            <font>Nome</font>
            <input
              required
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Nome completo"
            />
          </div>
          <div className="f-email">
            <font>Email</font>
            <input
              required
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Exemplo@gmail.com"
            />
          </div>
        </div>
        <div className="contact-right">
          <div className="message">
            <font>Mensagem</font>
            <textarea
              required
              name="message"
              value={values.message}
              onChange={handleChange}
              rows="5"
              cols="20"
              placeholder="Escreva aqui sua mensagem..."
            ></textarea>
          </div>
          <button>enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
