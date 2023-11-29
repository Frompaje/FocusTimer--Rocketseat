import stateFocus from "./stateFocus.js";
import * as timer from "./timerFocus.js"
import * as  el from "./elementsFocus.js"
import * as audios from "./sounsFocus.js"

export function toggleRunning() {
    stateFocus.isRunning = document.documentElement.classList.toggle("running")
    timer.countDown()
    audios.buttonPressAudio.play()

}
export function reset() {
    stateFocus.isRunning = false
    document.documentElement.classList.remove("running")
    timer.updateDisplay()
    audios.buttonPressAudio.play()
}

export function set() {
    el.minutos.setAttribute("contenteditable", true)
    el.minutos.focus()

}


export function toggleMusic() {
    stateFocus.isMute = document.documentElement.classList.toggle("music-on")
    if (stateFocus.isMute) {
        audios.bgAudio.play()
        return
    }
    audios.bgAudio.pause()

}