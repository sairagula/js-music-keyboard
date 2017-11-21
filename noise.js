

$(document).ready( function() {
  $('.instrument').on('click', 'button', function() {
    let letter = $(this).html();
    let audioId = ('#' + letter +'Audio');

    $(audioId).get(0).currentTime = 0;
    $(audioId).get(0).play();
  });
});


// $(document).ready( function() {
//   $('.instrument').on('click', 'button', function() {
//     let x = $('#cAudio');
//     x.get(0).currentTime = 0;
//     x.get(0).play();
//   });
// });
