let darkMode = true
const buttonToggle = document.querySelector(`#toggle-mode`)


buttonToggle.addEventListener("click", (event) => {
    const mode = darkMode ? `light` : `dark`

    document.documentElement.classList.toggle("light")

    event.currentTarget.querySelector(`span`).textContent = `${mode} mode ativado!`

    darkMode = !darkMode
})

