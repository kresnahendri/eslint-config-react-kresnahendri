import React from "react";

const white = "#fff";

type styles = {
  container: React.CSSProperties;
};

const styles: styles = {
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
};

const App = () => (
  <div style={styles.container}>
    <h1>Hola, I'm formatted by ESLint</h1>
  </div>
);

export default App;
