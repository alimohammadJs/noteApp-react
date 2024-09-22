import React from "react";
import { useNotes, useNotesDispatch } from "../context/NotesContext";

function NoteList({ sortBy }) {
  const notes = useNotes();
  let sortedNotes = notes;
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="noe-list">
      {sortedNotes.map((note) => {
        return <NoteItem key={note.id} note={note} />;
      })}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "deleteNote", payload: note.id })}
          >
            ❌
          </button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "completedNote", payload: noteId });
            }}
          />
        </div>
      </div>
      <div className="note=item__footer">
        {new Date(note.createdAt).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
}
