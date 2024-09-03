document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    const decrementBtns = document.getElementById('decrementBtn')
    const incremsentBtn = document.getElementById('incrementBtn')
    const counterValue = document.getElementById('counterValue')
    const resetBtns = document.getElementById('resetBtn')
    const deyerim = document.getElementById('setValueInput')
    const setValueBtn = document.getElementById('setValueBtn')

    function UpdateCoter() {
        counterValue.textContent = counter
    }
    decrementBtns.addEventListener('click', () => {
        counter += 1
        UpdateCoter()
    })

    incremsentBtn.addEventListener('click', () => {
        counter -= 1
        UpdateCoter()
    })
    resetBtns.addEventListener('click', () => {
        counter = 0
        UpdateCoter()
    })

    setValueBtn.addEventListener('click', () => {
        const newchange = parseInt(deyerim.value, 10)
        if (!isNaN(newchange)) {
            counter = newchange
            UpdateCoter()
            document.getElementById('setValueInput').value = ''
        }
    })


});


















// setValueBtn.addEventListener('click', () => {
//     const newValue = parseInt(setValueInput.value, 10);
//     if (!isNaN(newValue)) {
//         counter = newValue;
//         updateCounter();
//         document.getElementById('setValueInput').value = ''
//     }

// });