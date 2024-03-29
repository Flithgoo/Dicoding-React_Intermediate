import { useNavigate } from "react-router-dom";
import { addNote } from '../utils/network-data';
import NotesForm from "../components/NotesForm";

function AddPage() {
  const navigate = useNavigate();

  async function onAddNotesHandler(note) {
    await addNote(note);
    navigate('/');
  }

  return (
    <div className='wrapper'>
      <NotesForm addNote={onAddNotesHandler} />
    </div>
  )
}

export default AddPage;