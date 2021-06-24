import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import IndividualMainPage from './pages/individualMainPage/IndividualMainPage'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import store from './store/store'
import { Provider } from 'react-redux'

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    fontFamily: [
      'Open Sans',
    ].join(','),
  },});

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
            <Route path='/individual' component={ IndividualMainPage } exact={false}></Route>
            <Route render={() => <Redirect to='/individual' /> }></Route>
        </Router>
      </div>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
