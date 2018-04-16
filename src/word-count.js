export function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function () {
  var arrOfWords = this.body.split(' ');
  return arrOfWords.length;
};
