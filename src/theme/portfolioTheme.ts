export const portfolioTheme = {
   colors: {
      background: '#0b1326',
      surface: '#171f33',
      surfaceHigh: '#2d3449',
      primary: '#4edea3',
      secondary: '#ffb95f',
      text: '#dae2fd',
      textMuted: '#bbcabf',
   },
   breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
   },
   radii: {
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
      full: '9999px',
   },
};

export type PortfolioTheme = typeof portfolioTheme;
