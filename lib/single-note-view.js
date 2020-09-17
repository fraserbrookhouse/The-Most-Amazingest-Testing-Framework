class SingleNoteView {

  constructor(note) {
    this.singlenote = note;
  }

  returnView() {
    return `<div>${this.singlenote.getText()}</div>`;
  }
}