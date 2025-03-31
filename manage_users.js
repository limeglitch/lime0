document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("add-user-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("new-username").value.trim();
        let password = document.getElementById("new-password").value;
        let role = document.getElementById("new-role").value;

        if (username === "" || password === "") {
            alert("❌ الرجاء ملء جميع الحقول!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // التأكد إذا كان اسم المستخدم موجود مسبقًا
        if (users.find(user => user.username === username)) {
            alert("❌ اسم المستخدم موجود بالفعل!");
            return;
        }

        // إضافة المستخدم الجديد
        users.push({ username, password, role });
        localStorage.setItem("users", JSON.stringify(users));

        alert("✅ تم إنشاء الحساب بنجاح!");
        window.location.href = "admin_dashboard.html"; // الرجوع لصفحة الأدمن
    });
});
