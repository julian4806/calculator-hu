const input = document.querySelector('.input')

document.addEventListener('click', (e) => {
    const dataset = e.target.dataset.value
    if (!dataset) return

    writeToInput(dataset)
})


const writeToInput = (dataset) => {
    switch (dataset) {
        case "=":
            calculate(input.value)
            break;
        case "clear":
            input.value = ''
            break;
        default:
            input.value += input.value ? ' ' + dataset : dataset;
    }
}

const calculate = (value) => {
    input.value = eval(value)
}