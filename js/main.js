document.addEventListener('DOMContentLoaded', () => {
    function timer() {
        var minutes = document.getElementById('minutes');
        var sec = document.getElementById('sec');
        let timerBlock = document.querySelector('.discont')

        minutes.innerHTML = '10';
        sec.innerHTML = '00';

        var intervalId = setInterval(() => {
            if (parseInt(sec.innerHTML) <= 0) {
                if (parseInt(minutes.innerHTML) <= 0) {
                    clearInterval(intervalId);
                    timerBlock.remove();
                    return;
                }

                sec.innerHTML = '59';
                minutes.innerHTML--;
                if (minutes.innerHTML < 10) {
                    minutes.innerHTML = '0' + minutes.innerHTML;
                }
            } else {
                sec.innerHTML = parseInt(sec.innerHTML) - 1;
                if (parseInt(sec.innerHTML) < 10) {
                    sec.innerHTML = '0' + sec.innerHTML;
                }
            }
        }, 1000);
    }

    timer();



    // Аккордеон

    let questions = document.querySelectorAll('.questions');
    questions.forEach(item => {
        item.addEventListener('click', (e) => {
            item.querySelector('.q-desc').classList.toggle('active')
        })
    })



    // Plan
    let cards = document.querySelectorAll('.card.white'),
        blackCards = document.querySelectorAll('.card.black')

    function removeActive (arr) {
        arr.forEach(item => {
            item.classList.remove('active-card')
        })
    }


    cards.forEach(item => {
        item.addEventListener('click', (e) => {
            removeActive(cards);
            item.classList.add('active-card');
            item.querySelector('input').checked = true;
        })
    })

    blackCards.forEach(item => {
        item.addEventListener('click', (e) => {
            removeActive(blackCards);
            item.classList.add('active-card');
            item.querySelector('input').checked = true;
        })
    })



    // Change color for label

    var cardInputs = document.querySelectorAll('.card-input');

cardInputs.forEach(function(input) {
  input.addEventListener('focus', function() {
    var label = this.previousElementSibling;
    label.style.color = '#18c95f'; // Измените цвет на желаемый
  });

  input.addEventListener('blur', function() {
    var label = this.previousElementSibling;
    label.style.color = ''; // Вернуть цвет по умолчанию
  });
});


// Show popup

let btn = document.querySelectorAll('.blue-btn'),
    popup = document.querySelector('.popup'),
    close = document.querySelector('.close-pop');


btn.forEach(item => {
    item.addEventListener('click', () => {
        popup.classList.add('showpop')
    })
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup') || e.target.classList.contains('close-pop')) {
        popup.classList.remove('showpop')
    }
})


let choosePayment = document.querySelectorAll('.paypal'),
    cardPaymentInfo = document.querySelector('.card-req'),
    paypalPaymentInfo = document.querySelector('.paypal-req'),
    ppinfo = document.querySelectorAll('.ppinfo');

    function removeActivepp (arr) {
        arr.forEach(item => {
            item.classList.remove('showPayment')
        })
    }


    function removeActivePayment (arr) {
        arr.forEach(item => {
            item.classList.remove('active-payment')
        })
    }

    choosePayment.forEach(payment => {
        payment.addEventListener('click', (e) => {
            removeActivePayment(choosePayment)
            payment.classList.add('active-payment')
            if(payment.classList.contains('first')) {
                removeActivepp(ppinfo)
                paypalPaymentInfo.classList.add('showPayment')
            } else {
                removeActivepp(ppinfo)
                cardPaymentInfo.classList.add('showPayment')
            }
        })
    })
})