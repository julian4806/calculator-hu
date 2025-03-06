const input = document.querySelector('.input')

document.addEventListener('click', (e) => {
    const dataset = e.target.dataset.value
    if (!dataset) return

    writeToInput(dataset)
})


const writeToInput = (dataset) => {
    switch (dataset) {
        case "=":
            if (!input.value.trim() || isNaN(input.value.trim().slice(-1))) return
            calculate(input.value.trim())
            break
        case "clear":
            input.value = ''
            break
        default:
            input.value +=
                isNaN(dataset) && dataset != '.'
                    ? ` ${dataset} `
                    : dataset
    }
}

const calculate = (value) => {
    validateInput()
    try {
        input.value = new Function(`return ${value}`)()
    } catch {
        input.value = ''
        alert('Error')
    }
}

// validate input

const validateInput = () => {
    input.value = input.value.replace(/[^1234567890/*\-.+]/g, '')
}
input.addEventListener('input', validateInput)
