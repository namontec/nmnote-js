function Note(content){
  this.content = content;
}
Note.prototype.show = function () {
  return this.content;
}


//===================
var newNote = new Note("First note");
console.log(newNote.show());