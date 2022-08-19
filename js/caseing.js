function caseCountUpdate(isIncarse) {
    const caseInput = document.getElementById('case-input');
    const caseInputstring = caseInput.value;
    const caseInputValue = parseInt(caseInputstring);

    let newCaseCount;

    if (isIncarse === true) {
        newCaseCount = caseInputValue + 1;
    }
    else {
        newCaseCount = caseInputValue - 1;
    }
    caseInput.value = newCaseCount;
    return newCaseCount;
}

function totatCasePriceUpdate(newCaseCount) {
    const casePrice = document.getElementById('case-price');
    const casePriceCount = newCaseCount * 59;
    casePrice.innerText = casePriceCount
}


document.getElementById('case-plus-btn').addEventListener('click', function () {
    ///***---function sara ai vabe hobe---***///

    // const caseInput = document.getElementById('case-input');
    // const caseInputstring = caseInput.value;
    // const caseInputValue = parseInt(caseInputstring);
    // const newCaseCount = caseInputValue + 1 ;
    // caseInput.value = newCaseCount;

    const newCaseCount = caseCountUpdate(true)
    totatCasePriceUpdate(newCaseCount)
    setSubTotalAll()

})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    ///***---function sara ai vabe hobe---***///

    // const caseInput = document.getElementById('case-input');
    // const caseInputstring = caseInput.value;
    // const caseInputValue = parseInt(caseInputstring);
    // const newCaseCount = caseInputValue -1 ;
    // caseInput.value = newCaseCount;

    const newCaseCount = caseCountUpdate(false)
    totatCasePriceUpdate(newCaseCount)
    setSubTotalAll()

})