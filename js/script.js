$(document).ready(
  function(){

   $('.icon-send').click(
     function() {
       inviaMessaggio();
     });

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

  });
