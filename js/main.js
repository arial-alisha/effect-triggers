
var $body = $ ('body');

$body.on('click', '.btn-show-hide', function () {
  $('.box').toggleClass('box-show');
});

$body.on('click', '.btn-move', function () {
  $('.diamond').toggleClass('diamond-move');
});

$body.on('click', '.btn-collapse-expand', function () {
  $('.panel').toggleClass('panel-collapse');
});

$body.on('click', '.btn-bounce', function () {
  $('.circle').addClass('circle-bounce');
});

$body.on('click', '.btn-bounce' function () {
  $('.circle').removeClass('circle-bounce');
});

$body.on('click', 'btn-append' function () {
  $('.list').append('list');
});
