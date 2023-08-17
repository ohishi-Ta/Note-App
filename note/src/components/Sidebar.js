import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Sidebar = ({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note App</h1>
        <button onClick={onAddNote}></button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          //キーをランダムなIdにする
          //npm i -D react-uuid

          //activeをつける
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="app-sidebar-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
            <ReactMarkdown className="app-sidebar-content">{note.content}</ReactMarkdown>
            <small>
              {new Date(note.modDate).toLocaleDateString("ja-Jp", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
