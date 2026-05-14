import { useTranslation } from 'react-i18next';
import { projects } from '../../data/projects';
import type { ProjectItem } from '../../types/portfolio';
import { readLocalizedText } from '../../utils/locale';
import styles from './PortfolioPage.module.css';

function groupByYear(items: ProjectItem[]): [number, ProjectItem[]][] {
  const group = items.reduce<Record<number, ProjectItem[]>>((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {});

  return Object.entries(group)
    .map(([year, list]) => {
      const sortedList = list.sort((a, b) => {
        const periodA = a.period.pt.split(" ")[0];
        const periodB = b.period.pt.split(" ")[0];

        return periodA.localeCompare(periodB);
      });
      return [Number(year), sortedList] as [number, ProjectItem[]];
    })
    .sort((a, b) => b[0] - a[0]);

}

function Portfolio() {
  const { t } = useTranslation();
  const timeline = groupByYear(projects);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p>{t('portfolio.kicker')}</p>
        <h2>{t('portfolio.title')}</h2>
      </header>

      <div className={styles.timeline}>
        {timeline.map(([year, items]) => (
          <section key={year} className={styles.yearBlock}>
            <div className={styles.yearTag}>{year}</div>

            <div className={styles.projectList}>
              {items.map((project) => (
                <article key={project.id} className={styles.card}>
                  <img
                    src={project.image}
                    alt={t('portfolio.previewAlt', { title: readLocalizedText(project.title) })}
                  />
                  <div className={styles.content}>
                    <span>{readLocalizedText(project.period)}</span>
                    <h3>{readLocalizedText(project.title)}</h3>
                    <p>{readLocalizedText(project.description)}</p>
                    <p className={styles.role}>
                      {t('portfolio.rolePrefix')} {readLocalizedText(project.role)}
                    </p>

                    <ul className={styles.highlightList}>
                      {project.highlights.map((highlight) => (
                        <li key={highlight.pt}>{readLocalizedText(highlight)}</li>
                      ))}
                    </ul>

                    <div className={styles.stack}>
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className={styles.links}>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          {t('portfolio.liveProject')}
                        </a>
                      )}
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noreferrer">
                          {t('portfolio.repository')}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;