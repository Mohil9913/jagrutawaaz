const netAmountInput = document.getElementById("net-amount");
const platformFeesInput = document.getElementById("platform-fees");
const personalCutInput = document.getElementById("personal-cut");
const result = document.getElementById("result");
const resultText = document.getElementById("result-text");
const arrayText = document.getElementById("array");

resultText.style.display = "none";
arrayText.style.display = "none";

let array = [];
let total = 0;

const calculateAukat = () => {
    const netAmount = parseFloat(netAmountInput.value);
    const platformFees = parseFloat(platformFeesInput.value);
    const personalCut = parseFloat(personalCutInput.value);

    
    if (isNaN(netAmount) || isNaN(platformFees) || isNaN(personalCut)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }
    
    if (personalCut > 100 || personalCut < 0 || platformFees > 100 || platformFees < 0) {
        alert("% range should be between 0 to 100.");
        return;
    }

    const platformPercentage = platformFees / 100;
    const personalPercentage = personalCut / 100;
    
    total = netAmount - (netAmount * platformPercentage); 
    total = total * personalPercentage; 

    total = parseFloat(total.toFixed(2));

    resultText.style.display = "flex";
    result.textContent = `₹${total}`;
}

const notFinishedYet = () => {
    const netAmountInput = document.getElementById("net-amount");
    const personalCutInput = document.getElementById("personal-cut");

    netAmountInput.value = "";
    personalCutInput.value = "";

    arrayText.style.display = "block";
    resultText.style.display = "none";
    array.push(total);
    total = 0;

    const arrayContainer = document.getElementById("array");
    const list = document.createElement("ul");
    array.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `₹${item}`;
        list.appendChild(listItem);
        total += item;
    });
    arrayContainer.innerHTML = "";
    arrayContainer.appendChild(list);

    const totalElement = document.createElement("span");
    totalElement.textContent = `Total Aukat: ₹${total.toFixed(2)}`;
    arrayContainer.appendChild(totalElement);
}
