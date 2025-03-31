document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    document.getElementById("login-btn")?.addEventListener("click", function (event) {
        event.preventDefault(); // منع تحديث الصفحة
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let errorMessage = document.getElementById("error-message");

        let user = users.find(u => u.username === username && u.password === password);

        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            window.location.href = (user.role === "admin") ? "admin_dashboard.html" : "lawyer_dashboard.html";
        } else {
            errorMessage.textContent = "خطأ في اسم المستخدم أو كلمة المرور!";
        }
    });

    document.getElementById("logout-btn")?.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        window.location.href = "index.html";
    });
});
function requestAdminAccess() {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) return;

    let requests = JSON.parse(localStorage.getItem("accessRequests")) || [];
    requests.push({ username: loggedInUser.username, request: "طلب الوصول إلى إدارة العملاء" });
    localStorage.setItem("accessRequests", JSON.stringify(requests));

    alert("✅ تم إرسال الطلب إلى الأدمن!");
}
function viewRequests() {
    let requests = JSON.parse(localStorage.getItem("accessRequests")) || [];
    let requestsList = document.getElementById("requests-list");
    if (!requestsList) return;

    requestsList.innerHTML = "";
    requests.forEach((req, index) => {
        let li = document.createElement("li");
        li.textContent = `${req.username}: ${req.request}`;
        let approveBtn = document.createElement("button");
        approveBtn.textContent = "✔️ موافقة";
        approveBtn.onclick = () => {
            alert(`✅ تم منح ${req.username} صلاحية الوصول`);
            requests.splice(index, 1);
            localStorage.setItem("accessRequests", JSON.stringify(requests));
            viewRequests();
        };
        li.appendChild(approveBtn);
        requestsList.appendChild(li);
    });
}
function addNewButton() {
    let buttonName = prompt("🆕 أدخل اسم الزر الجديد:");
    let buttonLink = prompt("🔗 أدخل الرابط أو الصفحة التي يفتحها الزر:");

    if (buttonName && buttonLink) {
        let newButton = document.createElement("button");
        newButton.textContent = buttonName;
        newButton.onclick = function() {
            window.location.href = buttonLink;
        };

        document.getElementById("custom-buttons").appendChild(newButton);
        alert("✅ تم إضافة الزر بنجاح!");
    } else {
        alert("⚠️ يجب إدخال بيانات صحيحة!");
    }
}
