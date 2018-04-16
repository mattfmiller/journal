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
    var userFirstSentence = journalEntry.getFirstSentence();

    $('#show-word-count').text('');
    $('#show-word-count').append("<p>" + userWordCount + "</p>");
    $('#show-word-count').append("<p>" + userVowelCount + "</p>");
    $('#show-word-count').append("<p>" + userConsCount + "</p>");
    $('#show-word-count').append("<p>" + userFirstSentence + ".</p>");
    event.preventDefault();
  });
});
