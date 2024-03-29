import { string, func, bool, any } from 'prop-types';
import { MdDelete } from "react-icons/md";
import { MdArchive, MdUnarchive } from "react-icons/md";
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

function DetailNoteButton({ id, archived, onDelete, addNoteToArchive, removeNoteFromArchive }) {
  const { theme } = useContext(ThemeContext);
  const BtnComponent = ({ onclick, children }) => <a className={`btn btn-outline-${theme === 'light' ? 'dark' : 'light'} rounded-circle fs-3 mx-3 mt-2`} onClick={() => onclick(id)}>{children}</a>

  if (archived) {
    return (
      <>
        <BtnComponent onclick={removeNoteFromArchive}><MdUnarchive /></BtnComponent>
        <BtnComponent onclick={onDelete}><MdDelete /></BtnComponent>
      </>
    )
  } else if (!archived) {
    return (
      <>
        <BtnComponent onclick={addNoteToArchive}><MdArchive /></BtnComponent>
        <BtnComponent onclick={onDelete}><MdDelete /></BtnComponent>
      </>
    )
  }

  BtnComponent.propTypes = {
    onclick: func.isRequired,
    children: any
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