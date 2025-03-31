document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add-user-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("new-username").value;
        let password = document.getElementById("new-password").value;
        let role = document.getElementById("new-role").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // تحقق إذا كان المستخدم موجود مسبقًا
        if (users.find(user => user.username === username)) {
            alert("❌ اسم المستخدم موجود بالفعل!");
            return;
        }

        // إضافة المستخدم الجديد
        users.push({ username, password, role });
        localStorage.setItem("users", JSON.stringify(users));

        alert("✅ تم إنشاء الحساب بنجاح!");
        window.location.href = "admin_dashboard.html";
    });
});
