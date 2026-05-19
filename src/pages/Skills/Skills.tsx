import { useTranslation } from 'react-i18next';
import { skillCategories } from '../../data/skills';
import { certificates } from '../../data/certificates';
import { readLocalizedText } from '../../utils/locale';
import styles from './SkillsPage.module.css';
import { Certificates } from '../../types/portfolio';

function sortedByYear(items: Certificates[]): Certificates[] {
  return [...items].sort((a, b) => {
    return Number(b.date) - Number(a.date);
  });
}

function Skills() {
  const { t } = useTranslation();
  const timeLine = sortedByYear(certificates);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p>{t('skills.kicker')}</p>
        <h2>{t('skills.title')}</h2>
      </header>

      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <article key={category.id} className={styles.card}>
            <h3>{readLocalizedText(category.title)}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item.pt}>{readLocalizedText(item)}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className={styles.certificates}>
        {timeLine.map((certificate) => (
          <article key={certificate.id} className={styles.certificateCard}>
            <div className={styles.certificateHead}>
              <h4>{readLocalizedText(certificate.title)}</h4>
              <p>{certificate.date}</p>
            </div>
            <img src={certificate.image} alt={readLocalizedText(certificate.title)} />
            <div className={styles.certificateFooter}>
              <p>{certificate.issuer}</p>
              <a href={certificate.url} target="_blank" rel="noopener noreferrer">
                {t('Certificate view')}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;