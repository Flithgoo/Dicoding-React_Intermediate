import { bool, array } from 'prop-types';
import NotesItemCard from "./NotesItemCard";

function NotesList({ isArchived, notes }) {
  const filteredNotes = notes.filter((note) => note.archived == isArchived)

  if (filteredNotes.length !== 0) {
    return (
      <div className="container shadow">
        <h2 className="container-header mb-4 text-white">{isArchived ? "Arsip" : "Catatan Aktif"}</h2>
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
        <h2 className="container-header mb-4 text-white">{isArchived ? "Arsip" : "Catatan Aktif"}</h2>
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