document.addEventListener("DOMContentLoaded", function () {
    let clients = JSON.parse(localStorage.getItem("clients")) || [];
    let clientsList = document.getElementById("clients-list");

    function displayClients() {
        clientsList.innerHTML = "";
        clients.forEach(client => {
            let li = document.createElement("li");
            li.innerHTML = `📁 ${client.name} - <a href="${client.doc}" target="_blank">📂 فتح الملف</a>`;
            clientsList.appendChild(li);
        });
    }

    document.getElementById("add-client-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let clientName = document.getElementById("client-name").value;
        let clientDoc = document.getElementById("client-doc").files[0];

        if (!clientDoc) {
            alert("❌ الرجاء رفع مستند!");
            return;
        }

        let reader = new FileReader();
        reader.onload = function () {
            clients.push({ name: clientName, doc: reader.result });
            localStorage.setItem("clients", JSON.stringify(clients));
            displayClients();
        };
        reader.readAsDataURL(clientDoc);
    });

    displayClients();
});
