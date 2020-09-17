class Note {
  constructor(notetext, idno) {
    this.text = notetext;
    this.id = idno;
  }
  

  getText() {
    return this.text;
  }

  getId() {
    return this.id
  }

  static create(text) {
    console.log(this.count)
    var note = new Note(text, this.count);
    this.count += 1;
    return note;
  }
}

Note.count = 0;
