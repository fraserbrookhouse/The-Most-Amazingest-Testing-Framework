describe(NoteListView, function () {
  it('it stores a NoteList object with no notes and returns view with only ul tags', function () {
    var notelist = new NoteList();
    var notelistview = new NoteListView(notelist);
    expect(notelistview.returnView()).toBe('<ul></ul>');
  });
  it('it stores a NoteList object with one note, and returns the note in structured html', function () {
    var notelist = new NoteList();
    notelist.createNote('This is a test note');
    var notelistview = new NoteListView(notelist);
    expect(notelistview.returnView()).toBe(
      '<ul><li><div>This is a test note</div></li></ul>'
    );
  });
  it('it stores a NoteList object with more than one note, and returns the notes in structured html', function () {
    var notelist = new NoteList();
    notelist.createNote('This is a test note');
    notelist.createNote('This is also a test note');
    var notelistview = new NoteListView(notelist);
    expect(notelistview.returnView()).toBe(
      '<ul><li><div>This is a test note</div></li><li><div>This is also a test note</div></li></ul>'
    );
  });
});
