// Click

$('.burger').addClass('unToggled');
$('.burger').click(function () {
  $(this).toggleClass('toggled');
  $(this).toggleClass('unToggled');
});
