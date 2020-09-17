class NoteList {
  constructor() {
    this.notes = []
  }
  createNote(text) {
    var newNote = Note.create(text)
    this.notes.push(newNote)
  }
  returnNotes() {
    return this.notes
  }
  
}