import stateFocus from "./stateFocus.js"
import * as events from "./eventsFocus.js"
import * as timer from "./timerFocus.js"
export function start(minutos, segundos) {
    stateFocus.minutos = minutos
    stateFocus.segundos = segundos
    timer.updateDisplay()
    events.registerControls()
    events.setMinutos()
}

