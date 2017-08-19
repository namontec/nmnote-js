// Note class
function Note(title, content) {
  this.noteTitle = title;
  this.noteContent = content;
}
Note.prototype.show = function() {
  return ("[" + this.noteTitle + "]" + "\n" + this.noteContent);
}
Object.defineProperty(Note.prototype, "title", {
  get: function() {
    return this.noteTitle;
  },
  set: function (value) {
    this.noteTitle = value;
  }
})
Object.defineProperty(Note.prototype, "content", {
  get: function() {
    return this.noteTitle;
  },
  set: function(value) {
    this.noteContent = value;
  }
})


//NoteList class
function NoteList() {
  this.noteList = [];
}
NoteList.prototype.add = function(note) {
  this.noteList.push(note);
}
NoteList.prototype.show = function() {
  var notes = "";
  for (var i in this.noteList) {
    notes += this.noteList[i].show() + "\n";
  }
  return notes;
}
NoteList.prototype.getNote = function(index) {
  return this.noteList[index];
}

//===================
var newNote = new Note("Header", "First note");
console.log(newNote.show());

var newNoteList = new NoteList;
newNoteList.add(new Note("New Header", "Ololo"));
newNoteList.add(new Note("Header", "First note"));
newNoteList.add(new Note("Header2", "Second note"));
newNoteList.add(new Note("Header3", "Third note"));
console.log(newNoteList.show());
console.log(newNoteList.getNote(1).show());