import { createContext, useContext, useReducer } from "react";

const NotesContetxt = createContext();
const NotesDispatchContext = createContext();
function noteReducer(state, action) {
  if (action.type === "addNote") return [...state, action.payload];
  if (action.type === "deleteNote")
    return state.filter((n) => n.id !== action.payload);
  if (action.type === "completedNote")
    return state.map((s) => {
      return s.id === action.payload ? { ...s, completed: !s.completed } : s;
    });
}

export function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(noteReducer, []);

  return (
    <NotesContetxt.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContetxt.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContetxt);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
