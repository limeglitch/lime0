document.addEventListener("DOMContentLoaded", function () {
    loadCases(); // تحميل القضايا المحفوظة عند فتح الصفحة
});

function openCaseForm() {
    document.getElementById("caseForm").style.display = "block";
}

function closeCaseForm() {
    document.getElementById("caseForm").style.display = "none";
}

function addCase() {
    let caseNumber = document.getElementById("caseNumber").value;
    let clientName = document.getElementById("clientName").value;
    let courtName = document.getElementById("courtName").value;
    let lawyerName = document.getElementById("lawyerName").value;
    let caseStatus = document.getElementById("caseStatus").value;

    if (caseNumber === "" || clientName === "" || courtName === "" || lawyerName === "") {
        alert("❌ يرجى ملء جميع الحقول!");
        return;
    }

    let caseTable = document.getElementById("casesBody");
    let newRow = caseTable.insertRow();

    newRow.innerHTML = `
        <td>${caseNumber}</td>
        <td>${clientName}</td>
        <td>${courtName}</td>
        <td>${lawyerName}</td>
        <td class="status ${getStatusClass(caseStatus)}">${caseStatus}</td>
    `;

    saveCase(caseNumber, clientName, courtName, lawyerName, caseStatus);
    closeCaseForm();
}

function getStatusClass(status) {
    switch (status) {
        case "متداولة": return "open";
        case "مغلقة": return "closed";
        case "جلسة قادمة": return "upcoming";
        default: return "";
    }
}

function saveCase(caseNumber, clientName, courtName, lawyerName, caseStatus) {
    let cases = JSON.parse(localStorage.getItem("cases")) || [];
    cases.push({ caseNumber, clientName, courtName, lawyerName, caseStatus });
    localStorage.setItem("cases", JSON.stringify(cases));
}

function loadCases() {
    let cases = JSON.parse(localStorage.getItem("cases")) || [];
    let caseTable = document.getElementById("casesBody");

    cases.forEach(({ caseNumber, clientName, courtName, lawyerName, caseStatus }) => {
        let newRow = caseTable.insertRow();
        newRow.innerHTML = `
            <td>${caseNumber}</td>
            <td>${clientName}</td>
            <td>${courtName}</td>
            <td>${lawyerName}</td>
            <td class="status ${getStatusClass(caseStatus)}">${caseStatus}</td>
        `;
    });
}
