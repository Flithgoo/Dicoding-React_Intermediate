import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { string, func } from 'prop-types';
import { getNote } from '../utils/local-data';
import DetailNote from '../components/DetailNote'
import { deleteNote, unarchiveNote, archiveNote } from '../utils/local-data';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.addNoteToArchive = this.addNoteToArchive.bind(this);
    this.removeNoteFromArchive = this.removeNoteFromArchive.bind(this);
  }

  addNoteToArchive(id) {
    archiveNote(id);
    this.props.navigate('/');
  }

  removeNoteFromArchive(id) {
    unarchiveNote(id);
    this.props.navigate('/');
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.props.navigate('/');
  }

  render() {
    return (
      <DetailNote {...this.state.note} archivedNote={this.addNoteToArchive} unarchivedNote={this.removeNoteFromArchive} onDelete={this.onDeleteHandler} />
    );
  }
}

DetailPage.propTypes = {
  id: string.isRequired,
  navigate: func.isRequired
}

export default DetailPageWrapper;