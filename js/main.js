
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

const navButton = document.getElementById('nav-button');
const nav = document.getElementById('nav');
const content = document.getElementById('hide-content');
const body = document.getElementById('body');

navButton.addEventListener('click', function (){
    navButton.classList.toggle('open');
    nav.classList.toggle('open');
    content.classList.toggle('open');
    body.classList.toggle('open');
})

new Cleave('#phone', {
    delimiters: [' ', ' ', ' ', ' '],
    blocks: [4, 2, 3, 2, 2],
    numericOnly: true,
    prefix: '+380',
    noImmediatePrefix: true
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    var phoneInput = document.getElementById('phone');
    var phonePattern = /^\+380 \d{2} \d{3} \d{2} \d{2}$/;

    if (!phonePattern.test(phoneInput.value)) {
        phoneInput.classList.add('is-invalid');
    } else {
        phoneInput.classList.remove('is-invalid');
        window.location.href = 'http://localhost:63342/test-project/thx-page.html';
    }
});