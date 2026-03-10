import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import styles from './ContactPage.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormData>(initialState);
  const [sending, setSending] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const canSend = Boolean(serviceId && templateId && publicKey);

  async function sendMail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSend) {
      window.alert(t('contact.alerts.envMissing'));
      return;
    }

    if (Object.values(form).some((value) => value.trim().length === 0)) {
      window.alert(t('contact.alerts.fillAll'));
      return;
    }

    try {
      setSending(true);
      await emailjs.send(
        serviceId as string,
        templateId as string,
        {
          from_name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey as string,
      );

      window.alert(t('contact.alerts.success'));
      setForm(initialState);
    } catch {
      window.alert(t('contact.alerts.error'));
    } finally {
      setSending(false);
    }
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section className={styles.page}>
      <article className={styles.copy}>
        <p>{t('contact.kicker')}</p>
        <h2>{t('contact.title')}</h2>
        <p>{t('contact.description')}</p>
      </article>

      <form className={styles.form} onSubmit={sendMail}>
        <label htmlFor="name">{t('contact.labels.name')}</label>
        <input id="name" name="name" value={form.name} onChange={handleChange} />

        <label htmlFor="email">{t('contact.labels.email')}</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="subject">{t('contact.labels.subject')}</label>
        <input id="subject" name="subject" value={form.subject} onChange={handleChange} />

        <label htmlFor="message">{t('contact.labels.message')}</label>
        <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} />

        <button type="submit" disabled={sending}>
          {sending ? t('contact.actions.sending') : t('contact.actions.send')}
        </button>
      </form>
    </section>
  );
}

export default Contact;