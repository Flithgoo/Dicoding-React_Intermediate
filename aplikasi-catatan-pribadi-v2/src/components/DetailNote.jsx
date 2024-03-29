import { string, func, bool } from "prop-types";
import DetailNoteButton from './DetailNoteButton';
import LocaleContext from "../contexts/LocaleContext";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function DetailNote({ id, title, body, createdAt, archived, archivedNote, unarchivedNote, onDelete }) {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container py-5 rounded-4">
      <div className={`row mt-3 text-bg-${theme === 'dark' ? 'dark' : 'light'} justify-content-center p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg`}>
        <div className="col-lg-12 p-3 p-lg-5 pt-lg-1">
          <h1 className="display-4 fw-bold lh-1">{title}</h1>
          <p className="text-secondary">{new Date(createdAt).toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-EN', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}</p>
          <p className="lead">{body}</p>
          <div className="d-flex justify-content-end">
            <DetailNoteButton id={id} archived={archived} onDelete={onDelete} addNoteToArchive={archivedNote} removeNoteFromArchive={unarchivedNote} />
          </div>
        </div>
      </div>
    </div>
  );
}

DetailNote.propTypes = {
  id: string,
  title: string.isRequired,
  body: string.isRequired,
  archived: bool.isRequired,
  createdAt: string.isRequired,
  archivedNote: func,
  unarchivedNote: func,
  onDelete: func.isRequired,
};

export default DetailNote;