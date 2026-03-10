import { useTranslation } from 'react-i18next';
import styles from './AboutPage.module.css';

function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.page}>
      <article className={styles.card}>
        <p className={styles.kicker}>{t('about.kicker')}</p>
        <h2>{t('about.title')}</h2>
        <p>{t('about.paragraph1')}</p>
        <p>{t('about.paragraph2')}</p>
      </article>

      <article className={styles.card}>
        <h3>{t('about.differentialsTitle')}</h3>
        <ul>
          <li>{t('about.differentials.0')}</li>
          <li>{t('about.differentials.1')}</li>
          <li>{t('about.differentials.2')}</li>
          <li>{t('about.differentials.3')}</li>
        </ul>
      </article>
    </section>
  );
}

export default About;