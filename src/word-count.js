export function Entry(title, body){
  this.title = title;
  this.body = body;
}

Entry.prototype.countWords = function () {
  var arrOfWords = this.body.split(' ');
  return arrOfWords.length;
};

Entry.prototype.countVowels = function () {
  var arrayOfRawVowels = this.body.match(/[aeiou]+/gi);
  var vowelCount = 0;
  for (var i = 0; i < arrayOfRawVowels.length; i++) {
    var arrayOfCutVowels = arrayOfRawVowels[i].split("");
    for (var j = 0; j < arrayOfCutVowels.length; j++) {
      vowelCount++;
    }
  }
  console.log(vowelCount);
  return vowelCount;
};
