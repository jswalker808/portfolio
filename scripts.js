var logoDown = 30;
var logoDownSlow = 25;
var logoUp = 25;
var greetingUp = 55;
var inlineOrBlock = '';


//moves the brand logo from top of the page to bottom
function myMove() {
    var elem = document.getElementById("animate");
    var pos = -50;
    elem.style.top = '-50%';
    var id = setInterval(frame, 0.5);
    function frame() {
        if (pos === logoDown) {
            clearInterval(id);
            var moveUp = setInterval(function() {
              if (pos === logoUp) {
                clearInterval(moveUp);
              }
              else {
                pos = pos - 0.25;
                elem.style.top = pos + '%';
              }
            }, 5);
        }
        else {
          if (pos >= logoDownSlow) {
            pos = pos + 0.25;
          }
          else pos = pos + 0.5;
          elem.style.top = pos + '%';
        }
    }
}

//Moves the 'jwstudios' greeting text from the bottom to under the logo
function moveh1() {
  var elem = document.getElementById("greeting");
  var pos = 100;
  elem.style.top = '150%';
  var id = setInterval(frame, 0.5);
  function frame() {
    if (pos === greetingUp) {
      clearInterval(id);
      setTimeout(fadeLinks, 800);
      function fadeLinks() {
        $(document).ready(function(){
          $('li').hide().fadeIn(1000);
          $('ul').css('display', inlineOrBlock);
          $('li').css("display", inlineOrBlock);
        });
      }
    }
    else {
      pos = pos - 0.5;
      elem.style.top = pos + '%';
    }
  }
}

if (screen.width === 320) {
  logoDown = 30;
  logoDownSlow = 25;
  logoUp = 25;
  greetingUp = 45;
  inlineOrBlock = 'block';
}

else if (screen.width >= 480 && screen.width < 768) {
  logoDown = 18;
  logoDownSlow = 10;
  logoUp = 15;
  greetingUp = 42;
  inlineOrBlock = 'block';
}

else if (screen.width >= 768 && screen.width < 992) {
  logoDown = 15;
  logoDownSlow = 10;
  logoUp = 10;
  greetingUp = 42;
  inlineOrBlock = 'block';
}

else if (screen.width >= 992 && screen.width < 1200) {
  logoDown = 18;
  logoDownSlow = 10;
  logoUp = 15;
  greetingUp = 42;
  inlineOrBlock = 'inline';
}

else if (screen.width >= 1200) {
  logoDown = 18;
  logoDownSlow = 10;
  logoUp = 15;
  greetingUp = 45;
  inlineOrBlock = 'inline';
}

document.getElementById("animate").onload = myMove();
$('#animate').css('visibility', 'visible');
document.querySelector("h1").onload = moveh1();
$('#greeting').css('visiblity', 'visible');
