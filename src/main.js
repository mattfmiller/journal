import {Entry} from './word-count.js';
import './styles.css';


$(function(){
  $('#journal-form').submit(function(event){
    var userBodyInput = $('#body-input').val();
    var userTitleInput = $('#title-input').val();
    var journalEntry = new Entry(userTitleInput, userBodyInput);

    var userWordCount = journalEntry.countWords();
    var userVowelCount = journalEntry.countVowels();
    var userConsCount = journalEntry.countCons();

    $('#show-word-count').text(userWordCount);
    $('#show-word-count').append("<p>" + userVowelCount + "</p>");
    $('#show-word-count').append("<p>" + userConsCount + "</p>");
    event.preventDefault();
  });
});
