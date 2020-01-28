$(document).ready(
  function(){

   $('.icon-send').click(
     function() {
       inviaMessaggio();
       setTimeout(pcMessage,1000);
     });

     time();
     searchContact();

     $(document).on('click', '.mex-contatto', function (){

           var valAttr = $(this).attr('data-contact');
           console.log(valAttr);
           var dataContact = '.spazio-messaggi[data-contact = "'+ valAttr +'"]';

           $('.spazio-messaggi').removeClass('active');
           $(dataContact).addClass('active');
           $('.mex-contatto').removeClass('active');
           $(this).addClass('active');

           var name = $(this).find('.nome_contatto').text();
           var img = $(this).find('img').attr('src');
           $('.side-message .navbar-contatto-selezionato .contatto-side-message .contact-name p').text(name);
           $('.side-message .navbar-contatto-selezionato .contatto-side-message img').attr('src', img);


     });

    $(document).on('click', '.message-options', function() {

        $(this).parent().siblings('.message-link').toggleClass('active');

        $(this).parents('.template').siblings('.messaggio').find('.message-link').removeClass('active');
      });
   $(document).on('click', '.message-delete', function(){
       $(this).parent().parent().parent().addClass('none');

   });




// -------FUNZIONI
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

  // $('.mex-contatto').find('.contact_message-bottom small').html(time);
  $('.template').find('.message-bottom small').html(time);
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

});
