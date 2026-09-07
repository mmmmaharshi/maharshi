import * as stylex from '@stylexjs/stylex';
import { fonts, colors, radii, space } from './tokens.stylex';

const styles = stylex.create({
  main: {
    width: '100%',
    maxWidth: 680,
    margin: '0 auto',
    padding: {
      default: `calc(${space.unit} * 8)`,
      '@media (max-width: 768px)': `calc(${space.unit} * 3)`,
    },
    display: 'flex',
    flexDirection: 'column',
    gap: {
      default: `calc(${space.unit} * 3)`,
      '@media (max-width: 768px)': `calc(${space.unit} * 4)`,
    },
  },
  hgroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: `calc(${space.unit} * 2)`,
  },
  heading: {
    margin: 0,
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.15,
    letterSpacing: '-0.01em',
    color: colors.inkPrimary,
  },
  paragraph: {
    margin: 0,
    fontSize: '1rem',
    lineHeight: 1.5,
    color: colors.inkSecondary,
  },
  nav: {
    display: 'flex',
    gap: `calc(${space.unit} * 6)`,
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navLink: {
    display: 'inline-block',
    fontSize: '0.9375rem',
    fontWeight: 500,
    lineHeight: 1,
    color: colors.inkPrimary,
    textDecoration: 'none',
    borderRadius: radii.base,
    backgroundColor: {
      default: 'transparent',
      ':hover': colors.hover,
    },
    outline: {
      default: 'none',
      ':focus-visible': `2px solid ${colors.inkPrimary}`,
    },
    outlineOffset: {
      default: null,
      ':focus-visible': 2,
    },
    transition: {
      default: 'background-color 150ms ease-out',
      '@media (prefers-reduced-motion: reduce)': 'none',
    },
  },
});

export default function App() {
  return (
    <main {...stylex.props(styles.main)}>
      <hgroup {...stylex.props(styles.hgroup)}>
        <h2 {...stylex.props(styles.heading)}>I'm Manohar Maharshi</h2>
        <p {...stylex.props(styles.paragraph)}>
          By day: Assistant Professor. By habit: digging into whatever's new on
          the web.
        </p>
      </hgroup>
      <nav {...stylex.props(styles.nav)}>
        <a
          {...stylex.props(styles.navLink)}
          href="https://github.com/mmmmaharshi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </nav>
    </main>
  );
}
