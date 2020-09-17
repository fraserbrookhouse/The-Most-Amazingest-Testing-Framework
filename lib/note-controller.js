class NoteController {
  constructor(noteList, note) {
    this.noteList = noteList;
    noteList.createNote(note);
    this.noteView = new NoteListView(this.noteList);
  }

  getHtml() {
    let app = document.getElementById("app");
    app.innerHTML = this.noteView.returnView();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let app = document.getElementById("app");

  let noteList = new NoteList();
  noteList.createNote("Favourite drink: seltzer");
  let noteView = new NoteListView(noteList);
  app.innerHTML = noteView.returnView();
});
