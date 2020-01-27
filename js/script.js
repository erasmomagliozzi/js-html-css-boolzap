$(document).ready(
  function(){

   $('.icon-send').click(
     function() {
       time();
       inviaMessaggio();
       setTimeout(pcMessage,1000);
     });

     searchContact();
     clickOnContact();




     function inviaMessaggio(){
     // FUNZIONE INVIA MESSAGGIO

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
// FUNZIONE RISPOSTA DA COMPUTER
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

// FUNZIONE ORARIO ESATTO
function time(){
  var data = new Date();
  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var time = hours +':'+ minutes;

  $('.mex-contatto').find('.contact_message-bottom small').html(time);

}
// FUNZIONE CERCA CONTATTO
function searchContact(){
  $('.input input').keyup(
    function(){
      var testoCerca = $('.input input').val().toLowerCase();

      $('.contatti .mex-contatto').each(
        function(){
          var nomeContatto = $(this).find('.nome_contatto').text().toLowerCase();
          if(nomeContatto.includes(testoCerca) == true){
            $(this).show()
          }else{
            $(this).hide()
          }
        });
    });
}
// QUANDO CLICCO SU UN MEX-CONTATTO, SI DEVE APRIRE SPAZIO-MESSAGGI CHE GLI APPARTIENE
function clickOnContact(){
  $('.mex-contatto').click(
    function(){
      var valAttr = $(this).attr('data-contact');
      var dataContact = '[data-contact = "'+valAttr+'"]';
      $('.spazio-messaggi').removeClass('active')
      $('.spazio-messaggi'+ dataContact ).addClass('active');
    });

}

  //     // se data contact del contatto è uguale al data contatto dello spazio-messaggio, mi apri il suo spazio-messaggi,senno vai avanti fino a quando non lo incontri e me lo apri
// function tendaOpzioni(){
//    $('.spazio-messaggio').find('.messaggio').addClass('.options')
//
// }
});
