import React from "react";
import { useSearchParams } from "react-router-dom";
import { string, func } from 'prop-types';
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import { getActiveNotes } from "../utils/local-data"

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || '',
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
  }

  onSearchChangeHandler(searchTerm) {
    this.setState({ keyword: searchTerm });
    this.props.keywordChange(searchTerm);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title.toLowerCase().includes(
        this.state.keyword.toLowerCase()
      );
    });

    return (
      <>
        <div className="wrapper">
          <SearchBar onSearchChange={this.onSearchChangeHandler} searchTerm={this.state.keyword} />
          <NotesList isArchived={false} notes={notes} onDelete={this.onDeleteHandler} />
        </div>
      </>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: string,
  keywordChange: func.isRequired,
}

export default HomePageWrapper