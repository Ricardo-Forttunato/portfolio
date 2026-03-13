import { NavLink, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Layout.module.css';
import 'primeicons/primeicons.css';

function Layout() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith('en') ? 'en' : 'pt';
  const navItems = [
    { path: '/', label: t('layout.nav.home') },
    { path: '/about', label: t('layout.nav.about') },
    { path: '/skills', label: t('layout.nav.skills') },
    { path: '/portfolio', label: t('layout.nav.portfolio') },
    { path: '/contact', label: t('layout.nav.contact') },
  ];

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <div className={styles.brandBlock}>
          <p className={styles.eyebrow}>{t('layout.role')}</p>
          <h1 className={styles.brand}>Ricardo Fortunato</h1>
        </div>

        <div className={styles.headerActions}>
          <nav className={styles.nav} aria-label="Navegacao principal">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.languageBox} aria-label={t('layout.language.label')}>
            <button
              type="button"
              className={currentLanguage === 'pt' ? styles.langActive : styles.langBtn}
              onClick={() => i18n.changeLanguage('pt')}
            >
              {t('layout.language.pt')}
            </button>
            <button
              type="button"
              className={currentLanguage === 'en' ? styles.langActive : styles.langBtn}
              onClick={() => i18n.changeLanguage('en')}
            >
              {t('layout.language.en')}
            </button>
          </div>
        </div>

      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <span>
          © {new Date().getFullYear()} Ricardo Fortunato. {t('layout.footer.rights')}
        </span>
        <a href="https://github.com/Ricardo-Forttunato" target="_blank" rel="noreferrer">
          <i className="pi pi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/ricardo-fortunato" target="_blank" rel="noreferrer">
          <i className="pi pi-linkedin"></i>
        </a>
      </footer>
    </div>
  );
}

export default Layout;