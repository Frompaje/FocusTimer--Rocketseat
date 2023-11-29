import * as actions from "./actionsFocus.js"
import { controls } from "./elementsFocus.js"
import * as el from "./elementsFocus.js"
import stateFocus from "./stateFocus.js"
import { updateDisplay } from "./timerFocus.js"

export function registerControls() {
    controls.addEventListener("click", (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action] != "function") {
            return
        }
        actions[action]()

    })
}

export function setMinutos() {
    el.minutos.addEventListener("focus", () => {
        el.minutos.textContent = ""
    })

    el.minutos.onkeypress = (event) => /\d/.test(event.key)
    el.minutos.addEventListener("blur", (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time
        stateFocus.minutos = time
        stateFocus.segundos = 0
        updateDisplay()
        el.minutos.removeAttribute("contenteditable")

    })
}