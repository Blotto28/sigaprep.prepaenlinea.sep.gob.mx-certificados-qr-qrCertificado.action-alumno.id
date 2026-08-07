const pdfPath = "/documento.pdf";

document.getElementById("download-button").addEventListener("click", (event) => {
  event.currentTarget.href = pdfPath;
});
