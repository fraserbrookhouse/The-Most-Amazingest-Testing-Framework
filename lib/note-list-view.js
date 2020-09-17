class NoteListView {
  constructor(notelist) {
    this.notelist = notelist;
  }

  returnView() {
    if (this.notelist.returnNotes()[0]) {
      var text = this.notelist.returnNotes().map((item) => {
        var itempreview
        if (item.getText().length > 20) {
          itempreview = item.getText().substring(0, 20);
        } else {
          itempreview = item.getText();
        }
        return `<li><div>${itempreview}</div></li>`;
      });
    } else {
      text = [];
    }
    return `<ul>${text.join('')}</ul>`;
  }
}
