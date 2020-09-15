describe(NoteList, function () {
  it('should be able to store note objects in an array', function () {
    var testNoteList = new NoteList()
    testNoteList.createNote('This is a test note')
    expect(testNoteList.returnNotes()[0].getText()).toBe('This is a test note')
  })
})