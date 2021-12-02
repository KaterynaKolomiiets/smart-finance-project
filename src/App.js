import { checkCurrentUser } from './redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import IncomesPage from './pages/IncomesPage';
import ReportsPage from './pages/ReportsPage';
import NavBar from './components/NavBar/NavBar';
import SwitchTheme from './shared/SwitchTheme/SwitchTheme';
import s from './App.module.css';
import { useLocation } from 'react-router';

function App() {
  const dispatch = useDispatch();
  const sid = useSelector(state => state.auth.sid);

  useEffect(() => {
    dispatch(checkCurrentUser());
  }, [dispatch]);
  const { pathname } = useLocation();
  let isSpend = '';
  pathname === '/spend' ? (isSpend = true) : (isSpend = false);
  return (
    <div className="App">
      <SwitchTheme />
      <header className="App-header"></header>
      <HomePage />
      {isSpend && <ExpensesPage />}
      {!isSpend && <IncomesPage />}
      <ReportsPage />
    </div>
  );
}

export default App;
