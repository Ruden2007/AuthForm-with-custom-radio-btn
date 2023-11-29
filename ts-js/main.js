var loginInput = document.querySelector('form input[name="login"]');
var passInput = document.querySelector('form input[name="pass"]');
var alertElement = document.createElement('p');
alertElement.classList.add('alert');
var lastAlert;
var alerts = {
    noLogin: "noLogin",
    noPass: "noPass"
};
document.addEventListener('click', function (e) {
    var target = e.target;
    if ((target instanceof Element) && target.closest('.item')) {
        var radioButtons = target.closest('.radio-buttons');
        if (!radioButtons) {
            return false;
        }
        radioButtons.querySelectorAll('.item').forEach(function (value) {
            value.classList.remove('active');
        });
        radioButtons.querySelectorAll('.item input').forEach(function (value) {
            value.checked = false;
        });
        target.closest('.item').classList.add('active');
        target.closest('.item').querySelector('input').checked = true;
        return;
    }
    if ((target instanceof Element) && target.closest('.show-pass-btn')) {
        var btn = target.closest('.show-pass-btn');
        var input = btn.parentElement.querySelector('input');
        if (input.type === "password") {
            input.type = "text";
        }
        else {
            input.type = "password";
        }
        btn.classList.toggle('hide-pass');
    }
});
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!loginInput.value)
        return insertAlert(loginInput.parentElement, "Enter login!", alerts.noLogin);
    if (!passInput.value)
        return insertAlert(passInput.parentElement, "Enter password!", alerts.noPass);
    var genderInput = document.querySelector('form input[name="gender"]:checked');
    var userSect = document.querySelector('section.user');
    userSect.querySelector('.login .value').textContent = loginInput.value;
    userSect.querySelector('.pass .value').textContent = passInput.value;
    userSect.querySelector('.gender .value').textContent = genderInput.value;
    document.querySelector('section.user').scrollIntoView({ block: "center", behavior: "smooth" });
});
function insertAlert(elem, text, type) {
    alertElement.textContent = text;
    elem.insertAdjacentElement('beforebegin', alertElement);
    lastAlert = type;
}
loginInput.addEventListener('input', function (e) {
    if (lastAlert !== alerts.noLogin)
        return false;
    alertElement.remove();
});
passInput.addEventListener('input', function (e) {
    if (lastAlert !== alerts.noPass)
        return false;
    alertElement.remove();
});
