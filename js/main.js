
var $body = $ ('body');

$body.on('click', '.btn-show-hide', function () {
  $('.box').toggleClass('box-show');
});


$body.on('click', '.btn-move', function () {
  $('.diamond').toggleClass('diamond-move');
});

$body.on('click', 'btn-collapse-expand', function () {
  $('.panel').toggleClass('panel-collapse');
});
