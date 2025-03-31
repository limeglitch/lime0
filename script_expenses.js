document.addEventListener("DOMContentLoaded", function () {
    const usersList = document.getElementById("users-list");
    const expensesList = document.getElementById("expenses-list");

    // بيانات تجريبية للحسابات والمصاريف (المفروض تجيبها من قاعدة بيانات)
    const users = [
        { id: 1, name: "المحامي أحمد محمد", expenses: ["إيجار مكتب - 5000ج", "اشتراك نقابة - 1500ج"] },
        { id: 2, name: "المحامي منى علي", expenses: ["أدوات مكتبية - 200ج", "مصاريف سفر - 800ج"] },
        { id: 3, name: "المحامي إبراهيم حسن", expenses: ["رواتب الموظفين - 7000ج", "إصلاحات - 1000ج"] }
    ];

    // تحميل قائمة المستخدمين
    users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = user.name;
        li.style.cursor = "pointer";
        li.onclick = () => showExpenses(user.expenses);
        usersList.appendChild(li);
    });

    // وظيفة عرض المصاريف
    function showExpenses(expenses) {
        expensesList.innerHTML = ""; // مسح القائمة السابقة
        expenses.forEach(expense => {
            let li = document.createElement("li");
            li.textContent = expense;
            expensesList.appendChild(li);
        });
    }
});
