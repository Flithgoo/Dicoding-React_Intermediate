import { Routes, Route } from 'react-router-dom';
import NotesHeader from './components/NotesHeader';
import NotesFooter from './components/NotesFooter';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import ArchievePage from './pages/ArchievePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <NotesHeader />
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
    </>
  );
}

export default App;