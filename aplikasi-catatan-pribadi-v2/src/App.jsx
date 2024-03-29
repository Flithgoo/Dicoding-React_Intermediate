/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { LocaleProvider } from './contexts/LocaleContext';
import NotesHeader from './components/NotesHeader';
import NotesFooter from './components/NotesFooter';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import ArchievePage from './pages/ArchievePage';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { getUserLogged, putAccessToken } from './utils/network-data';
import useToggleContext from './hooks/useToggleContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [authedUser, setAuthedUser] = useState('');
  const [loading, setLoading] = useState(true);

  const [locale, toggleLocale] = useToggleContext('locale', 'id', 'en')
  const [theme, toggleTheme] = useToggleContext('theme', 'light', 'dark');

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setTimeout(() => setLoading(false), 1500);
    }

    fetchData();
    return () => {
      setAuthedUser(null);
      setLoading(true);
    };
  }, []);

  const onLogout = () => {
    setAuthedUser(null);

    putAccessToken('');
  }

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  if (loading) {
    const loaderStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    };

    return (
      <div style={loaderStyle}>
        <HashLoader color={theme === 'light' ? '#333' : '#fefefe'} size={75} margin={2} />
      </div>
    );
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={themeContextValue}>
        <LocaleProvider value={localeContextValue}>
          <NotesHeader isAuth={false} />
          <main>
            <Routes>
              <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
              <Route path="/register" element={<RegisterPage />} />/
            </Routes>
          </main>
          <NotesFooter />
        </LocaleProvider>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider value={themeContextValue}>
      <LocaleProvider value={localeContextValue}>
        <NotesHeader logout={onLogout} name={authedUser.name} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archieve" element={<ArchievePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <NotesFooter />
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;