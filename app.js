// Click

$('.burger').addClass('unToggled');
$('.burger').click(function () {
  $(this).toggleClass('toggled');
  $(this).toggleClass('unToggled');
});

// Resizing Slider

const inputs = document.querySelectorAll('input');
const div = document.querySelector('.burger');
function handleInputChange() {
  const units = this.dataset.units || '';
}
