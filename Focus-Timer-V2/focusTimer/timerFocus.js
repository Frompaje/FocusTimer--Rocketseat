import stateFocus from "./stateFocus.js";
import * as el from "./elementsFocus.js"
import { reset } from "./actionsFocus.js";
import { kitchenTimer } from "./sounsFocus.js";
export function countDown() {
    clearTimeout(stateFocus.countDownId)

    if (!stateFocus.isRunning) {
        return
    }
    let minutos = Number(el.minutos.textContent)
    let segundos = Number(el.segundos.textContent)
    segundos--



    if (segundos < 0) {
        segundos = 59
        minutos--
    }

    if (minutos < 0) {
        reset()
        kitchenTimer.play()
        return

    }


    updateDisplay(minutos, segundos)
    stateFocus.countDownId = setTimeout(() => countDown(), 1000)

}
export function updateDisplay(minutos, segundos) {
    minutos = minutos ?? stateFocus.minutos
    segundos = segundos ?? stateFocus.segundos
    el.minutos.textContent = String(minutos).padStart(2, "0")
    el.segundos.textContent = String(segundos).padStart(2, "0")


}