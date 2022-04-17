export function withTheme(Komponent) {
  const theme = {
    palette: {
      accent: "#5833E8",
      background: "#f2f2f2",
      white: "#ffffff"
    },

    typography: {
      families: {
        monospace: "'Space Mono', monospace;",
        sansSerif: "'Space Grotesk', sans-serif;"
      }
    }
  };

  return props => <Komponent theme={theme} {...props}></Komponent>;
}
