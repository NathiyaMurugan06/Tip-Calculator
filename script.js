function calculateTip() {
    const bill = parseFloat(document.getElementById("bill").value);
    const tipPercent = parseFloat(document.getElementById("tip").value);
    const people = parseInt(document.getElementById("people").value);

    if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || bill <=0 || tipPercent < 0 || people <=0){
        document.getElementById("result").innerText="Please,Enter the Valid Values."
        return;
    }

    const tipAmount = (bill * tipPercent) / 100;
    const total = bill + tipAmount;
    const perPerson = total / people;

    document.getElementById("result").innerText = 
    `Total Tip: ₹${tipAmount.toFixed(2)}\n` +
    `Total Amount: ₹${total.toFixed(2)}\n` +
    `Per Person: ₹${perPerson.toFixed(2)}`;
}

