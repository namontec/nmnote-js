// Note class
function Note(title, content) {
  this.noteTitle = title;
  this.noteContent = content;
}
Note.prototype.show = function () {
  return (this.noteTitle + "\n" + this.noteContent);
}
Object.defineProperty(Note.prototype, "title", {
  get: function () {
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


//===================
var newNote = new Note("Header", "First note");
newNote.title = "one";
newNote.content = "other";
console.log(newNote.show());