import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
	const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textArea, setTextArea] = useState("");

  function sendMail(e) {
    e.preventDefault();
    if (
      name.length == 0 ||
      email.length == 0 ||
      subject.length == 0 ||
      textArea.length == 0
    ) {
      return alert("Preencha todos os campos necessários");
    }

		const templateParams = {
			from_name: name,
			email: email,
			subject: subject,
			message: textArea,
		};

		emailjs.send('service_4dn3lg8', 'template_0ffmw9q', templateParams, 'kkw6mBNYI30YWH5xu')
		.then((response) => {
			alert('Envio Realizado com sucesso!')
			setName('')
			setEmail('')
			setSubject('')
			setTextArea('')
		}, (err) => {
			console.log	('Erro ao enviar', err)
		})
  }

  return (
		<div className={styles.contact}>
			<div className={styles.title__content}>
				<h1 className={styles.title}>Contate-me</h1>
				<p className={styles.paragraph}>É um prazer recebê-lo em minha página profissional. Estou animado com sua visita e ficaria muito grato em receber seus comentários para ajudar a aprimorar meu trabalho.</p>
			</div>
      <form
				className={styles.form__list}
        method="POST"
        target="_blank"
        onSubmit={sendMail}
			>
        <div className={styles.float__field}>
          <input
            type="text"
            id="name"
            name="nome"
            placeholder=""
            autoComplete="on"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="name">Nome</label>
        </div>

        <div className={styles.float__field}>
          <input
            type="email"
            placeholder=""
            id="email"
            name="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="email">
            E-mail <span>(name@email.com)</span>
          </label>
        </div>

        <div className={styles.float__field}>
          <input
            type="text"
            name="subject"
            placeholder=""
            id="subject"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <label htmlFor="subject">Assunto</label>
        </div>

        <div className={styles.float__textArea}>
          <textarea
            name="textArea"
            id="textArea"
            placeholder=""
            minLength="7"
            maxLength="550"
            onChange={(e) => setTextArea(e.target.value)}
            value={textArea}
            autoComplete="on"
          ></textarea>
          <label htmlFor="textArea" value="">
            Envie seu comentario ou duvida...
          </label>
        </div>
        <input className={styles.submit} type="submit" value="Send" />
      </form>
    </div>
  );
}
