var script1 = document.createElement('script');
script1.src = ' https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js';
document.head.appendChild(script1);

const element = document.querySelectorAll('body');
document.getElementById("reactRoot")
html2pdf(element);
