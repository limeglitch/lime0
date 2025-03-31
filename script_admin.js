document.addEventListener("DOMContentLoaded", function() {
    loadAllExpenses();
});

function loadAllExpenses() {
    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    let expensesContainer = document.getElementById("expenses-container");
    expensesContainer.innerHTML = "";

    let lawyers = {};

    expenses.forEach(exp => {
        if (!lawyers[exp.lawyer]) {
            lawyers[exp.lawyer] = [];
        }
        lawyers[exp.lawyer].push(exp);
    });

    for (let lawyer in lawyers) {
        let total = lawyers[lawyer].reduce((sum, exp) => sum + parseFloat(exp.amount), 0);

        let div = document.createElement("div");
        div.innerHTML = `
            <h3>⚖️ ${lawyer}</h3>
            <ul>
                ${lawyers[lawyer].map(exp => `<li>${exp.date} - ${exp.amount} جنيه - ${exp.note}</li>`).join("")}
            </ul>
            <h4>💰 إجمالي المصاريف: ${total} جنيه</h4>
            <hr>
        `;
        expensesContainer.appendChild(div);
    }
}
document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("userType"); // حذف بيانات تسجيل الدخول
    window.location.href = "login.html"; // توجيه لصفحة تسجيل الدخول
});
