import { EmailJSResponseStatus } from "@emailjs/browser";
import styles from "./Contact.module.css";
import { useState } from "react";

export default function Contact() {
	const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");
  const [textArea, setTextArea] = useState("");

  function sendMail(e) {
    e.preventDefault();
    if (
      nome.length == 0 ||
      email.length == 0 ||
      tel.length == 0 ||
      subject.length == 0 ||
      textArea.length == 0
    ) {
      return alert("Preencha todos os campos necessários");
    }

		const templateParams = {
			from_name: nome,
			email: email,
			tel: tel,
			subject: subject,
			message: textArea,
		};

		EmailJSResponseStatus.send('service_4dn3lg8', 'template_0ffmw9q', templateParams, 'kkw6mBNYI30YWH5xu')
		.then((response) => {
			alert('Envio Realizado com sucesso!')
			setNome('')
			setEmail('')
			setTel('')
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
            onChange={(e) => setNome(e.target.value)}
            value={nome}
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
            E-mail <span>(name.mail@e-mail.com)</span>
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
