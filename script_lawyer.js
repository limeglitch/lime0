document.addEventListener("DOMContentLoaded", function() {
    loadExpenses();
});

function saveExpense() {
    let amount = document.getElementById("amount").value;
    let note = document.getElementById("note").value;
    let date = new Date().toLocaleString(); // التاريخ والوقت

    if (amount === "" || note === "") {
        alert("يرجى إدخال جميع البيانات!");
        return;
    }

    let expense = {
        amount: amount,
        note: note,
        date: date,
        lawyer: "أحمد محمد" // غير الاسم لو فيه حسابات متعددة
    };

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    loadExpenses();
}

function loadExpenses() {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";

    expenses.forEach(exp => {
        let li = document.createElement("li");
        li.textContent = `${exp.date} - ${exp.amount} جنيه - ${exp.note}`;
        expenseList.appendChild(li);
    });
}
