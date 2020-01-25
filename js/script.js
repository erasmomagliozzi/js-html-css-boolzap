$(document).ready(
  function(){

   $('.icon-send').click(
     function() {
       inviaMessaggio();
       pcMessage();
     });
   // $('.search').click(
   //   function(){
   //     searchContact(contatti);
   //   }
   // )
     time();


     // FUNZIONE INVIA MESSAGGIO
 function inviaMessaggio(){
   var textMessage = $('input.send-message').val();

   if(textMessage.length != 0) {
    var newMessage = $('.template .messaggio').clone();
    console.log(newMessage);

    newMessage.find('.message-text').text(textMessage);
    var data = new Date();
    var hours = addZero(data.getHours());
    var minutes = addZero(data.getMinutes());
    var time = hours +':'+ minutes;

    newMessage.find('.message-time').text(time);
    newMessage.addClass('utente');
    $('.spazio-messaggi').append(newMessage);

    $('input.send-message').val('');
 }
}
// FUNZIONE AGGIUNGI ZERO AD ORARIO
function addZero(number) {
  if(number < 10) {
    number = '0' + number;
  }
  return number;
}

function pcMessage(){
  var messaggioComputer = $('.template .messaggio').clone();
  console.log(messaggioComputer);

  messaggioComputer.find('.message-text').text('Ok');
  messaggioComputer.addClass('computer');
  $('.spazio-messaggi').append(messaggioComputer);

  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;

  messaggioComputer.find('.message-time').text(time);
}

// function searchContact(arrayName){
//
//   var cerca = $('input.cerca').val();
//   console.log(cerca);
//
//   for(var i = 0; i < arrayName.length; i++ ){
//     if(arrayName.includes(cerca) == false){
//       $('mex-contatto').addClass('none');
//     }
//   }
// }

function time(){
  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;

  $('.mex-contatto').find('.contact_message-bottom small').html(time);
}

  });
// var contatti = [];
//  for (var j = 0; j < 7; j++){
//  var cont = $('.anteprima-mex h3').text();
// contatti.push(cont);
// }
// console.log(contatti);
