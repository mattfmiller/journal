import {Entry} from './word-count.js';
import './styles.css';


$(function(){
  $('#journal-form').submit(function(event){
    var userBodyInput = $('#body-input').val();
    var userTitleInput = $('#title-input').val();
    var journalEntry = new Entry(userTitleInput, userBodyInput);

    var userWordCount = journalEntry.countWords();
    var userVowelCount = journalEntry.countVowels();

    $('#show-word-count').text(userWordCount);
    $('#show-word-count').append("<p>" + userVowelCount + "</p>");
    event.preventDefault();
  });
});
