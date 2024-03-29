import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import NotesList from "../components/NotesList";
import { getActiveNotes } from "../utils/network-data"

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultKeyword = searchParams.get('keyword');

  const [keyword, setKeyword] = useState(defaultKeyword || '');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data } = await getActiveNotes();
      setNotes(data);
    }

    fetchNotes();
  }, []);

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  function onSearchChangeHandler(searchTerm) {
    setKeyword(searchTerm)
    changeSearchParams(searchTerm);
  }


  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <>
      <div className="wrapper">
        <SearchBar onSearchChange={onSearchChangeHandler} searchTerm={keyword} />
        <NotesList isArchived={false} notes={filteredNotes} />
      </div>
    </>
  );
}

export default HomePage;