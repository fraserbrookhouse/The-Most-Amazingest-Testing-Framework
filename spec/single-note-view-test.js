describe(SingleNoteView, function () {
  it('takes a note when created and returns it in an HTML string when called', function () {
    note = new Note('Favourite drink: seltzer');
    var singleNoteView = new SingleNoteView(note);
    expect(singleNoteView.returnView()).toBe(
      '<div>Favourite drink: seltzer</div>'
    );
  });
});
