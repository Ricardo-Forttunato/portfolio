import { useTranslation } from 'react-i18next';
import { skillCategories } from '../../data/skills';
import { readLocalizedText } from '../../utils/locale';
import styles from './SkillsPage.module.css';

function Skills() {
  const { t } = useTranslation();

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
    </section>
  );
}

export default Skills;