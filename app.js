var num;
var num2;
var oper;
var vib   = 50;
var size  = 64;
var sound = new Audio;
sound.src = "click.mp3";

function func(index) {
  num = $('.num p')
  if (num.text() == '0') {
    num.text('')
  }

  num.text(num.text() + index);
  window.navigator.vibrate(vib);
  sound.currentTime = 0
  sound.play();

  if ($('.numGreen p').width() >= 250) {
    size -= 4
    $('.numGreen p').css('font-size', size)
  }
}

function clr() {
  $('.num p').text('0');
  window.navigator.vibrate(vib);
  sound.currentTime = 0
  sound.play();
  size = 64
  $('.num p').css('font-size', size)
}

function op(index) {
  num1 = $('.num p').text();
  oper = index;
  size = 64
  $('.num p').css('font-size', size)
  $('.num p').text('0');
  window.navigator.vibrate(vib);
  sound.currentTime = 0
  sound.play();
}

function e() {
  num2 = $('.num p').text();

  if (oper == '+') {
    eee = Number(num1) + Number(num2);
    $('.num p').text(eee);
  }
  if (oper == '-') {
    eee = Number(num1) - Number(num2);
    $('.num p').text(eee);
  }
  if (oper == '*') {
    eee = Number(num1) * Number(num2);
    $('.num p').text(eee);
  }
  if (oper == '/') {
    eee = Number(num1) / Number(num2);
    $('.num p').text(eee);
  }

  window.navigator.vibrate(vib);
  sound.currentTime = 0
  sound.play();

  if ($('.numGreen p').width() >= 250) {
    size -= 4
    $('.numGreen p').css('font-size', size)
  }
}

if (localStorage.getItem('vib') === null && localStorage.getItem('vol') === null) {
  localStorage.setItem('vib', 50)
  localStorage.setItem('vol', 1)
}

vib = localStorage.getItem('vib')
vol = localStorage.getItem('vol')

if (vib == 50) { $('.vibro div').addClass('on'); }
else { $('.vibro div').addClass('off'); }

if (vol == 1) { $('.zvuk div').addClass('on'); sound.volume = 1 }
else { $('.zvuk div').addClass('off'); sound.volume = 0 }


$('.vibro').click(function () {
  if (vib == 0) {
    $('.vibro div').removeClass('off')
    $('.vibro div').addClass('on')
    vib = 50
    localStorage.setItem('vib', vib)
  }
  else {
    $('.vibro div').removeClass('on')
    $('.vibro div').addClass('off')
    vib = 0
    localStorage.setItem('vib', vib)
  }
})

$('.zvuk').click(function () {
  if (vol == 0) {
    $('.zvuk div').removeClass('off')
    $('.zvuk div').addClass('on')
    sound.volume = 1
    vol = 1
    localStorage.setItem('vol', vol)
  }
  else {
    $('.zvuk div').removeClass('on')
    $('.zvuk div').addClass('off')
    sound.volume = 0
    vol = 0
    localStorage.setItem('vol', vol)
  }
})