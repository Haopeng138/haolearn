import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
export function Header(): JSX.Element {
  const navlinks = [
    { to: '/', label: 'Home' },
    { to: '/patterns', label: 'Patterns' },
    { to: '/components', label: 'Components' },
    { to: '/themes', label: 'Themes' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <ul>
        {navlinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : ''
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
