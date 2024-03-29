import { string, func, bool } from 'prop-types';
import { MdDelete } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";
import { IoMdArchive } from "react-icons/io";

function DetailNoteButton({ id, archived, onDelete, addNoteToArchive, removeNoteFromArchive }) {
  const ArchiveBtn = () => <a className="btn btn-outline-light rounded-circle fs-3 mx-3 mt-2" onClick={() => addNoteToArchive(id)}><IoMdArchive /></a>;
  const UnarchiveBtn = () => <a className="btn btn-outline-light rounded-circle fs-3 mx-3 mt-2" onClick={() => removeNoteFromArchive(id)}><AiFillFolderAdd /></a>;
  const DeleteBtn = () => <a className="btn btn-outline-light rounded-pill fs-3 mx-1 mt-2" onClick={() => onDelete(id)}><MdDelete /></a>;

  if (archived) {
    return (
      <>
        <UnarchiveBtn />
        <DeleteBtn />
      </>
    )
  } else if (!archived) {
    return (
      <>
        <ArchiveBtn />
        <DeleteBtn />
      </>
    )
  }
}

DetailNoteButton.propTypes = {
  id: string.isRequired,
  archived: bool.isRequired,
  addNoteToArchive: func,
  removeNoteFromArchive: func,
  onDelete: func.isRequired,
}

export default DetailNoteButton;