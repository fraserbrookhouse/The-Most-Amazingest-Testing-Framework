class NoteController {
  constructor(noteList, note) {
    this.noteList = noteList;
    noteList.createNote(note);
    this.noteView = new NoteListView(this.noteList);
  }

  getHtml() {
    let app = document.getElementById("app");
    app.innerHTML = this.noteView.returnView();
  }
}
// makeUrlChangeShowAnimalForCurrentPage();

//       function makeUrlChangeShowAnimalForCurrentPage() {
//         window.addEventListener("hashchange", showAnimalForCurrentPage);
//       };

//       function showAnimalForCurrentPage() {
//         showAnimal(getAnimalFromUrl(window.location));
//       };

//       function getAnimalFromUrl(location) {
//         return location.hash.split("#")[1];
//       };

//       function showAnimal(animal) {
//         document
//           .getElementById("app")
//           .innerHTML = animal;
//       };

document.addEventListener("DOMContentLoaded", () => {
  let app = document.getElementById("app");

  let noteList = new NoteList();
  noteList.createNote("Favourite drink: seltzer");
  noteList.createNote("Favourite drink: yes");
  let noteView = new NoteListView(noteList);
  app.innerHTML = noteView.returnView();
});

// document.addEventListener('hashchange', function() {
   
//   let app = document.getElementById("app");
//   // window.location.hash.split("#")[1];
//   app.innerHTML = "gege"

// })