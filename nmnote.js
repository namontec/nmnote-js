


var NoteType = {Text: 0, Checkbox: 1};

//NoteContent clas
function NoteContent(noteType, content, checkStatus = false) {
  this.noteContent = content;
  this.noteType = noteType;
  this.isChecked = checkStatus;
}
NoteContent.prototype.show = function() {
  var returnString = "Empty";
  if (this.noteType == NoteType.Text) {
    returnString = this.noteContent;
  }
  if (this.noteType == NoteType.Checkbox) {
    returnString = "[" + ((this.isChecked == true) ? "*" : " ") + "] " + this.noteContent;
  }
  return returnString;
}


// Note class
function Note(title, content) {
  this.noteTitle = title;
  this.noteContent = content;
}
Note.prototype.show = function() {
  var returnString = "[" + this.noteTitle + "]\n";
  for (var i in this.noteContent) {
    returnString += this.noteContent[i].show() + "\n";
  }
  return returnString;
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
    return this.noteContent;
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
NoteList.prototype.removeNote = function(index) {
  this.noteList.splice(index,1);
}


function drawBox(text) {
  
}


//===================

var newNoteList = new NoteList;
newNoteList.add(new Note("1 New Header", [new NoteContent (NoteType.Text, "Ololo")] ));
newNoteList.add(new Note("2 Header", [new NoteContent(NoteType.Text, "First note")] ));
newNoteList.add(new Note("3 Header2", [new NoteContent(NoteType.Checkbox, "Second note", true),
                                       new NoteContent(NoteType.Text, "Little Description"),
                                       new NoteContent(NoteType.Checkbox,"Other line of text", false)] ));
newNoteList.add(new Note("4 Header3", [new NoteContent(NoteType.Checkbox, "Third note")]));

//newNoteList.removeNote(0);

console.log(newNoteList.show());


