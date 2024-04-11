function main() {

    (function () {
        'use strict';
      /* ==============================================
         Page Scrolling
         =============================================== */

        $('a.scroll-nav').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
         Show Menu on Book
         ======================================*/
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 100;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });
        /* ==============================================
         Scroll Spy
         =============================================== */
        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })
     
       }());
      }
main();

// ======================services==============================

const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.services-item');
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length-1]);
}

document.addEventListener('click',activate,false);

// ========================time=====================================

(function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "10/18/",
      birthday = dayMonth + yyyy;
  
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
  
    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
  
        (document.getElementById("days").innerText = Math.floor(distance / day)),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));
  
        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();
// ===========================send message ============================================

function sendEmail() {
    var name = document.getElementsByName("name")[0].value;   
    var email = document.getElementsByName("email")[0].value;
    var message = document.getElementsByName("message")[0].value;
    var subject = "Новое сообщение от " + name;
    var body = "Имя: " + name + " ";
    body += "Email: " + email + " ";
    body += "Сообщение: " + message;
    window.open("mailto:maria-gennadievna@mail.ru?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body));
    }