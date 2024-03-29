import { string, func, bool } from "prop-types";
import DetailNoteButton from './DetailNoteButton';

function DetailNote({ id, title, body, createdAt, archived, archivedNote, unarchivedNote, onDelete }) {
  return (
    <div className="container py-5 rounded-4">
      <div className="row mt-3 text-bg-dark justify-content-center p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-12 p-3 p-lg-5 pt-lg-1">
          <h1 className="display-4 fw-bold lh-1">{title}</h1>
          <p className="text-secondary">{new Date(createdAt).toLocaleDateString('id-ID', {
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
  archivedNote: func.isRequired,
  unarchivedNote: func.isRequired,
  onDelete: func.isRequired,
};

export default DetailNote;