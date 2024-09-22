import React, { useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NotesContext";

function App() {
  const [sortBy, setSortBy] = useState("latest");
  // const handleAddNotes = (newNote) => {
    // setNotes((prevNotes) => [...prevNotes, newNote]);
    // dispatch({ type: "addNote", payload: newNote });
  // };
  // const handleDeleteNote = (id) => {
    // setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
    // dispatch({ type: "deleteNote", payload: id });
  // };

  // const handleComleteNote = (e) => {
    // const noteId = Number(e.target.value);
    // setNotes((prevNotes) =>
    //   prevNotes.map((note) => {
    //     return note.id === noteId
    //       ? { ...note, completed: !note.completed }
    //       : note;
    //   })
    // );
    // dispatch({ type: "completedNote", payload: Number(e.target.value) });
  // };

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />

          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
