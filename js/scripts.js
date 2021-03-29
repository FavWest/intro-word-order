// return a list of all the unique words and how many times they appeared


$(document).ready(function(){
  //get the paragraph
  $("#form1").submit(function(event){
    event.preventDefault();
    const paragraph = $("#paragraph").val();
    //get all the words into an array
    const roughAllWords = paragraph.split(" ");
    let allWords=[];
    roughAllWords.forEach(function(word){
      if(word.length>0){
        allWords.push(word);
      }
    });
    //create a second array and add each word to it. If the word is already on the list, update it instead
    let onceWords=[];
    allWords.forEach(function(word){
      if(!onceWords.includes(word)){
        onceWords.push(word);
      }
    });
    onceWords.forEach(function(once_word){
      count = 0;
      allWords.forEach(function(word){
        if(once_word===word){
          count ++ ;
        }
      });
      onceWords.splice(onceWords.indexOf(once_word), 1, once_word + " " + count);
    });
    console.log(onceWords);
  });
});


