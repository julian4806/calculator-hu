const input = document.querySelector('.input')

document.addEventListener('click', (e) => {
    const dataset = e.target.dataset.value
    if (!dataset) return

    writeToInput(dataset)
})


const writeToInput = (dataset) => {
    switch (dataset) {
        case "=":
            if (
                !isNaN(input.value.trim().slice(-1))
            ) {
                return
            }

            calculate(input.value.trim())   
            break;
        case "clear":
            input.value = ''
            break;
        default:
            input.value += isNaN(dataset)
                ? ` ${dataset} `
                : dataset;
    }
}

const calculate = (value) => {
    input.value = eval(value)
}