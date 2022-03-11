const downloadBtn = document.querySelector(".download-btn");
const doc = new jspdf.jsPDF({
  unit: "pt",
  format: "a4",
  orientation: "portrait",
});

console.log(doc);

downloadBtn.addEventListener("click", () => {
  doc.html(document.body, {
    callback: function (doc) {
      doc.save("nitin-bhatt-resume");
    },
    width: window.innerWidth,
    windowWidth: window.innerWidth,
  });
});
