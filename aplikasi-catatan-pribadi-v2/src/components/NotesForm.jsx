import React from "react";
import { func, string } from 'prop-types';
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

function NotesFormWrapper({ addNote }) {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  return (
    <NotesForm addNote={addNote} locale={locale} theme={theme} />
  );
}

class NotesForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      maxCharacters: 50,
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
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

  onSubmitEventHandler(event) {
    event.preventDefault()
    this.props.addNote(this.state);
  }

  render() {
    const remainingCharacters = this.state.maxCharacters - this.state.title.length;
    const { locale, theme } = this.props;

    return (
      <div className="container shadow mt-5">
        <h2 className={`text-center ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>{locale === 'id' ? "Tambah Catatan" : "Add Note"}</h2>
        <form onSubmit={this.onSubmitEventHandler} className="form" id="form">
          <p className="text-secondary text-end">{locale === 'id' ? "Sisa karakter" : "Character remaining"} : {remainingCharacters}</p>
          <div className="form-floating mb-3">
            <input required value={this.state.title} onChange={this.onTitleChangeEventHandler} type="text" className="form-control fs-5" id="floatingInput" placeholder="judul" />
            <label className="" htmlFor="floatingInput">{locale === 'id' ? "Judul" : "Title"}</label>
          </div>
          <div className="form-floating h-50 mb-3">
            <textarea required value={this.state.body} onChange={this.onBodyChangeEventHandler} className="form-control fs-5" style={{ height: '10em' }} placeholder="Catatan" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea">{locale === 'id' ? "Catatan" : "Note"}</label>
          </div>

          <div className="d-flex justify-content-end mt-3">
            <button type="submit" className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} fs-6 px-4 rounded-pill`}>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
NotesFormWrapper.propTypes = {
  addNote: func.isRequired
}
NotesForm.propTypes = {
  addNote: func.isRequired,
  locale: string.isRequired,
  theme: string.isRequired,
}

export default NotesFormWrapper;