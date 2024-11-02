function imprimerSection() {
  var element = document.getElementById("textetheo");
  var opt = {
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    margin: 0.5,
    filename: "théorie.pdf",
    image: { type: "jpeg", quality: 0.98 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    
  };

  // New Promise-based usage:
  html2pdf().set(opt).from(element).save();

 
}
