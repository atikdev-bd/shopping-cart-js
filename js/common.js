function phoneAndCaseSubtotalValue(element) {
    const allElementValue = document.getElementById(element);
    const allElementValueString = allElementValue.innerText;
    const allElementTotalValue = parseInt(allElementValueString)
    return allElementTotalValue;
}
function setElementById(elementId, value){
    const subTotal = document.getElementById(elementId)
    subTotal.innerText = value;
}

function setSubTotalAll() {
    const phoneTotal = phoneAndCaseSubtotalValue('phone-price');
    const caseTotal = phoneAndCaseSubtotalValue('case-price')

    const subTotalElement = phoneTotal + caseTotal;
    setElementById('sub-total', subTotalElement)

    const taxTotalString= (subTotalElement * 0.1).toFixed(2);
    const taxTotal = parseFloat(taxTotalString);
    setElementById('tax-amount', taxTotal)

    const finalResult = subTotalElement + taxTotal;
    setElementById('final-total', finalResult);
    
}
