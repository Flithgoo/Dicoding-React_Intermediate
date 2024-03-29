import { bool, array } from 'prop-types';
import NotesItemCard from "./NotesItemCard";
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import ThemeContext from '../contexts/ThemeContext';

function NotesList({ isArchived, notes }) {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const filteredNotes = notes.filter((note) => note.archived == isArchived)

  if (filteredNotes.length !== 0) {
    return (
      <div className="container shadow">
        <h2 className={`container-header mb-4 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>{isArchived ? (locale === 'en' ? "Archieve note" : "Catatan arsip") : (locale === 'en' ? "Active note" : "Catatan aktif")}</h2>
        <div className="list-item">
          <div className="row">
            {
              filteredNotes.map((note) => (
                <NotesItemCard
                  key={note.id}
                  id={note.id}
                  {...note} />
              ))
            }
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container shadow">
        <h2 className="container-header mb-4 text-white">{isArchived ? (locale === 'en' ? "Archieve note" : "Catatan arsip") : (locale === 'en' ? "Active note" : "Catatan aktif")}</h2>
        <h4 className="text-center my-5 py-3 text-white">Tidak ada catatan</h4>
      </div>
    )
  }
}

NotesList.propTypes = {
  isArchived: bool.isRequired,
  notes: array.isRequired,
}

export default NotesList;