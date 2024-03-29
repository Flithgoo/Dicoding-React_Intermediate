import { useNavigate } from "react-router-dom";
import { addNote } from '../utils/local-data';
import NotesForm from "../components/NotesForm";

function AddPage() {
  const navigate = useNavigate();

  function onAddNotesHandler(note) {
    addNote(note)
    if (note.archived) {
      navigate('/archieve');
    } else {
      navigate('/');
    }
  }

  return (
    <div className='wrapper'>
      <NotesForm addNote={onAddNotesHandler} />
    </div>
  )
}

export default AddPage;