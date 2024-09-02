
import AppRouter from './router';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/index.css';
import { Header } from './components/Page/Header';
function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <AppRouter />
      </Router>
    </>
  );
}
export default App;
