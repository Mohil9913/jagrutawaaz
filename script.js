const netAmountInput = document.getElementById("net-amount");
const platformFeesInput = document.getElementById("platform-fees");
const personalCutInput = document.getElementById("personal-cut");
const result = document.getElementById("result");
const resultText = document.getElementById("result-text");

resultText.style.display = "none";

const calculateAukat = () => {
    const netAmount = parseFloat(netAmountInput.value);
    const platformFees = parseFloat(platformFeesInput.value);
    const personalCut = parseFloat(personalCutInput.value);

    if (isNaN(netAmount) || isNaN(platformFees) || isNaN(personalCut)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    const platformPercentage = platformFees / 100;
    const personalPercentage = personalCut / 100;
    
    let total = netAmount - (netAmount * platformPercentage); 
    total = total * personalPercentage; 

    // Round to two decimal places
    total = total.toFixed(2);

    resultText.style.display = "block";
    result.textContent = `₹${total}`;
}
