describe(Note, function () {
  it('should have a text property after being created', function () {
    var testNote = new Note('This is a test note');
    expect(testNote.getText()).toBe('This is a test note');
  });
  it('has a unique id number that increments by one when a note is created', function () {
    var testNote = Note.create('testing 0')
    var testNote1 = Note.create('testing 1');
    var testNote2 = Note.create('testing 2');
    expect(testNote.getId()).toBe(0)
    expect(testNote1.getId()).toBe(1);
    expect(testNote2.getId()).toBe(2);
  })
});
