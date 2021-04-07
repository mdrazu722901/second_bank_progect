// login btn event handlar work here

const loginBtn = document.getElementById("submit-btn");
loginBtn.addEventListener("click", function() {
    const firstArea = document.getElementById("login-area");
    firstArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// deposit and withdraw section work here

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function() {

        const depositNumber = getInputValue("depositAmount");

        document.getElementById("depositAmount").value = "";

        SpanInnerText("Balance", depositNumber)
        SpanInnerText("currentDeposit", depositNumber)


    })
    //============================================= withdrawAmount section=============================================================
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function() {

        const withdrawAmountNumber = getInputValue("withdrawAmount");
        SpanInnerText("withdrawTotal", withdrawAmountNumber);
        SpanInnerText("Balance", -1 * withdrawAmountNumber);
        document.getElementById("withdrawAmount").value = "";


    })
    //  ======================================================================
function getInputValue(id) {

    const withdrawAmount = document.getElementById(id).value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);
    return withdrawAmountNumber;
}

function SpanInnerText(id, depositNumber) {

    const Balance = document.getElementById(id).innerText;
    const BalanceNumber = parseFloat(Balance);
    const totalBalance = BalanceNumber + depositNumber;
    document.getElementById(id).innerText = totalBalance;
}