import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import { readLocalizedText } from '../../utils/locale';
import styles from './HomePage.module.css';

const featuredProjects = [...projects]
  .filter((project) => project.featured)
  .sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }

    const quarterA = Number(a.period.en.match(/Q([1-4])/)?.[1] ?? 0);
    const quarterB = Number(b.period.en.match(/Q([1-4])/)?.[1] ?? 0);

    return quarterB - quarterA;
  });

const yearsOfExperience = (() => {
  const currentYear = new Date().getFullYear();
  const firstProjectYear = Math.min(...projects.map((project) => project.year));
  return currentYear - firstProjectYear;
})();

const showPrincipalStack = () => {
  const stackCount = new Map<string, number>();

  projects.forEach((project) => {
    project.stack.forEach((tech) => {
      stackCount.set(tech, (stackCount.get(tech) ?? 0) + 1);
    });
  });

  return [...stackCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([tech]) => tech)
    .join(' + ');
};

function Home() {
  const { t } = useTranslation();

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.kicker}>{t('home.kicker')}</p>
        <h2>{t('home.title')}</h2>
        <p>{t('home.description')}</p>

        <div className={styles.actions}>
          <Link to="/portfolio" className={styles.primaryBtn}>
            {t('home.ctaProjects')}
          </Link>
          <Link to="/contact" className={styles.secondaryBtn}>
            {t('home.ctaContact')}
          </Link>
        </div>
      </div>

      <div className={styles.metrics}>
        <article>
          <strong>{projects.length}+</strong>
          <span>{t('home.metrics.projectsLabel')}</span>
        </article>
        <article>
          <strong>+ {yearsOfExperience}</strong>
          <span>{t('home.metrics.yearsLabel')}</span>
        </article>
        <article>
          <strong>{showPrincipalStack()}</strong>
          <span>{t('home.metrics.stackLabel')}</span>
        </article>
      </div>

      <div className={styles.featured}>
        <h3>{t('home.featuredTitle')}</h3>
        <div className={styles.cards}>
          {featuredProjects.map((project) => (
            <article key={project.id} className={styles.card}>
              <img
                src={project.image}
                alt={t('home.previewAlt', {
                  title: readLocalizedText(project.title),
                })}
              />
              <div>
                <span>{readLocalizedText(project.period)}</span>
                <h4>{readLocalizedText(project.title)}</h4>
                <p>{readLocalizedText(project.description)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
