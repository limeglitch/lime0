document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let usersList = document.getElementById("users-list");

    if (users.length === 0) {
        usersList.innerHTML = "<p>❌ لا يوجد مستخدمين!</p>";
    } else {
        users.forEach(user => {
            let li = document.createElement("li");
            li.textContent = `👤 ${user.username} - ${user.role}`;
            usersList.appendChild(li);
        });
    }
});
