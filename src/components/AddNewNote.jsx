import React, { useState } from "react";
import { useNotesDispatch } from "../context/NotesContext";

function AddNewNote() {
  const  dispatch  = useNotesDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlDsecription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    const newNote = {
      title,
      description,
      id: new Date().getTime(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "addNote", payload: newNote });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={handlTitle}
          type="text"
          className="text-field"
        />
        <input
          value={description}
          type="text"
          onChange={handlDsecription}
          className="text-field"
        />
        <button type="submit" className="btn btn--primary">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
