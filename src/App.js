import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from 'src/theme';
import routes from 'src/routes';

import './styles/style.css';

const App = () => {
  const routing = useRoutes(routes);

  return <ThemeProvider theme={theme}>{routing}</ThemeProvider>;
};
// git remote add origin https://github.com/MaximSeveryn/react-lab.git
// "homepage": "https://maximseveryn.github.io/react-lab",
export default App;
