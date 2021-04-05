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
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    document.getElementById("depositAmount").value = "";

    SpanInnerText("Balance", depositNumber)
    SpanInnerText("currentDeposit", depositNumber)


})

function SpanInnerText(id, depositNumber) {

    const Balance = document.getElementById(id).innerText;
    const BalanceNumber = parseFloat(Balance);
    const totalBalance = BalanceNumber + depositNumber;
    document.getElementById(id).innerText = totalBalance;
}
//============================================= withdrawAmount section=============================================================
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function() {
    const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawAmountNumber = parseFloat(withdrawAmount);

    const withdrawTotal = document.getElementById("withdrawTotal").innerText;
    const withdrawTotalNumber = parseFloat(withdrawTotal);
    const all = withdrawAmountNumber + withdrawTotalNumber;

    document.getElementById("withdrawTotal").innerText = all;
    document.getElementById("withdrawAmount").value = "";


    const Balance = document.getElementById("Balance").innerText;
    const BalanceNumber = parseFloat(Balance);
    LastTotal = BalanceNumber - withdrawAmountNumber;
    document.getElementById("Balance").innerText = LastTotal;

})

function WithdrawBalanceCheck() {

}