const loginInput: HTMLInputElement = document.querySelector('form input[name="login"]')
const passInput: HTMLInputElement = document.querySelector('form input[name="pass"]')

const alertElement = document.createElement('p')
alertElement.classList.add('alert')
let lastAlert: string

const alerts = {
    noLogin: "noLogin",
    noPass: "noPass"
}


document.addEventListener('click', (e) => {
    const target = e.target

    if ((target instanceof Element) && target.closest('.item')) {

        const radioButtons = target.closest('.radio-buttons')
        if (!radioButtons) {
            return false
        }

        radioButtons.querySelectorAll('.item').forEach(value => {
            value.classList.remove('active')
        })

        radioButtons.querySelectorAll('.item input').forEach((value: HTMLInputElement) => {
            value.checked = false
        })

        target.closest('.item').classList.add('active')
        target.closest('.item').querySelector('input').checked = true

        return
    }

    if ((target instanceof Element) && target.closest('.show-pass-btn')) {
        const btn = target.closest('.show-pass-btn')
        const input = btn.parentElement.querySelector('input')

        if (input.type === "password") {
            input.type = "text"
        } else {
            input.type = "password"
        }
        btn.classList.toggle('hide-pass')
    }
})


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    if (!loginInput.value) return insertAlert(loginInput.parentElement, "Enter login!", alerts.noLogin)
    if (!passInput.value) return insertAlert(passInput.parentElement, "Enter password!", alerts.noPass)

    const genderInput: HTMLInputElement = document.querySelector('form input[name="gender"]:checked')

    const userSect = document.querySelector('section.user')

    userSect.querySelector('.login .value').textContent = loginInput.value
    userSect.querySelector('.pass .value').textContent = passInput.value
    userSect.querySelector('.gender .value').textContent = genderInput.value

    document.querySelector('section.user').scrollIntoView({block: "center", behavior: "smooth"})
})


function insertAlert(elem: HTMLElement, text: string, type: string) {
    alertElement.textContent = text
    elem.insertAdjacentElement('beforebegin', alertElement)
    lastAlert = type
}

loginInput.addEventListener('input', (e) => {
    if (lastAlert !== alerts.noLogin) return false
    alertElement.remove()
})

passInput.addEventListener('input', (e) => {
    if (lastAlert !== alerts.noPass) return false
    alertElement.remove()
})

