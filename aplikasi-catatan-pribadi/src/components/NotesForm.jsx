import React from "react";
import { func } from 'prop-types';

class NotesForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      archived: false,
      maxCharacters: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onArchiveChangeEventHandler = this.onArchiveChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputText = event.target.value;
    if (inputText.length <= this.state.maxCharacters) {
      this.setState({
        title: inputText,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onArchiveChangeEventHandler(event) {
    this.setState(() => {
      return {
        archived: event.target.checked
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state);
  }

  render() {
    const remainingCharacters = this.state.maxCharacters - this.state.title.length;

    return (
      <div className="container shadow mt-5">
        <h2 className="text-center text-white">Tambah Catatan</h2>
        <form onSubmit={this.onSubmitEventHandler} className="form" id="form">
          <p className="text-secondary text-end">Sisa karakter : {remainingCharacters}</p>
          <div className="form-floating mb-3">
            <input required value={this.state.title} onChange={this.onTitleChangeEventHandler} type="text" className="form-control fs-5" id="floatingInput" placeholder="judul" />
            <label className="" htmlFor="floatingInput">Judul</label>
          </div>
          <div className="form-floating h-50 mb-3">
            <textarea required value={this.state.body} onChange={this.onBodyChangeEventHandler} className="form-control fs-5" style={{ height: '10em' }} placeholder="Catatan" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">Catatan</label>
          </div>
          <div className="mb-3 form-check">
            <input value={this.state.archived} onChange={this.onArchiveChangeEventHandler} type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label text-white" htmlFor="exampleCheck1">Arsipkan Catatan</label>
          </div>

          <div className="d-flex justify-content-end mt-3">
            <button type="submit" className="btn btn-outline-light fs-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

NotesForm.propTypes = {
  addNote: func.isRequired
}

export default NotesForm;