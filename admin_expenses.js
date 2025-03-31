document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("lawyers-expenses");
    const expenses = JSON.parse(localStorage.getItem("lawyersExpenses")) || {};

    if (Object.keys(expenses).length === 0) {
        container.innerHTML = "<p>🚫 لا توجد بيانات مصاريف حالياً.</p>";
        return;
    }

    Object.keys(expenses).forEach(username => {
        const logs = expenses[username];
        let total = 0;

        const section = document.createElement("div");
        section.style.border = "1px solid #00ff99";
        section.style.padding = "15px";
        section.style.marginBottom = "20px";
        section.style.borderRadius = "8px";
        section.style.backgroundColor = "#1e1e1e";

        const title = document.createElement("h3");
        title.textContent = `📄 المحامي: ${username}`;
        section.appendChild(title);

        const ul = document.createElement("ul");
        logs.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `📝 ${item.note} - 💸 ${item.amount} جنيه - 🕒 ${item.date}`;
            ul.appendChild(li);
            total += parseFloat(item.amount);
        });

        const totalEl = document.createElement("p");
        totalEl.style.color = "#00ff99";
        totalEl.textContent = `الإجمالي: ${total} جنيه`;

        section.appendChild(ul);
        section.appendChild(totalEl);
        container.appendChild(section);
    });
});
