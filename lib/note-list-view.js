class NoteListView {
  constructor(notelist) {
    this.notelist = notelist;
  }

  returnView() {
    if (this.notelist.returnNotes()[0]) {
      var note = this.notelist.returnNotes()[0].getText();
      var text = `<li><div>${note}</div></li>`;
    } else {
      text = '';
    }
    return `<ul>${text}</ul>`;
  }
}
