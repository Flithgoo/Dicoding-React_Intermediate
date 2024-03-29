import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DetailNote from '../components/DetailNote';
import ErrorPage from '../pages/ErrorPage';
import { getNote, deleteNote, unarchiveNote, archiveNote } from '../utils/network-data';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      const { data } = await getNote(id);
      setNote(data);
    }

    fetchNote();
  }, [id]);

  function addNoteToArchive(id) {
    archiveNote(id)
      .then(() => navigate('/'));
  }

  function removeNoteFromArchive(id) {
    unarchiveNote(id)
      .then(() => navigate('/archieve'));
  }

  function onDeleteHandler(id) {
    deleteNote(id)
      .then(() => navigate('/'));
  }

  if (!note) return <ErrorPage />
  return (
    <DetailNote {...note} archivedNote={addNoteToArchive} unarchivedNote={removeNoteFromArchive} onDelete={onDeleteHandler} />
  );
}

export default DetailPage;