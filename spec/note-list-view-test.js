describe(NoteListView, function () {
  it('it stores a NoteList object', function () {
    var notelist = new NoteList()
    var notelistview = new NoteListView(notelist)
    expect(notelistview.returnView()).toBe('<ul></ul>')
  })
})