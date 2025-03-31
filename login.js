document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع تحديث الصفحة

    const usernameOrPhone = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // جلب المستخدمين من localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // البحث عن المستخدم سواءً باليوزرنيم أو رقم الهاتف
    const user = users.find(u => (u.username === usernameOrPhone || u.phone === usernameOrPhone) && u.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user)); // حفظ بيانات المستخدم
        alert(`مرحبًا ${user.fullName} 👋`);

        // توجيه المستخدم حسب دوره
        if (user.role === "admin") {
            window.location.href = "admin_dashboard.html";
        } else {
            window.location.href = "lawyer_dashboard.html";
        }
    } else {
        alert("❌ اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
});
