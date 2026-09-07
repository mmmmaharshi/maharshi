import * as stylex from '@stylexjs/stylex';

export const fonts = stylex.defineVars({
  sans: "'Geist Pixel', system-ui",
});

export const colors = stylex.defineVars({
  canvas: '#0a0a0a',
  inkPrimary: '#ffffff',
  inkSecondary: 'rgb(255 255 255 / 56%)',
  inkTertiary: 'rgb(255 255 255 / 50%)',
  border: 'rgb(255 255 255 / 10%)',
  hover: 'rgb(255 255 255 / 9%)',
});

export const radii = stylex.defineVars({
  base: '8px',
});

export const space = stylex.defineVars({
  unit: '8px',
});
