document.getElementById("exportPdf").addEventListener("click", function() {
    document.getElementById("status").innerText = "📄 Report exported as PDF (mockup)";
});

document.getElementById("exportCsv").addEventListener("click", function() {
    document.getElementById("status").innerText = "📊 Report exported as CSV (mockup)";
});

document.getElementById("exportEmail").addEventListener("click", function() {
    document.getElementById("status").innerText = "✉️ Report sent via Email (mockup)";
});