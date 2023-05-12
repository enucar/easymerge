import {PDFDocument} from 'pdf-lib';

async function merge(arrayBuffer1: ArrayBuffer, arrayBuffer2: ArrayBuffer) {
  // Load the first PDF document
  const pdfDoc1 = await PDFDocument.load(arrayBuffer1);

  // Load the second PDF document
  const pdfDoc2 = await PDFDocument.load(arrayBuffer2);

  // Create a new PDF document
  const pdfDoc = await PDFDocument.create();

  // Get the number of pages of the first and second PDFs
  const [numPages1, numPages2] = [
    pdfDoc1.getPageCount(),
    pdfDoc2.getPageCount(),
  ];

  // Make sure both PDFs have the same number of pages
  if (numPages1 !== numPages2) {
    throw new Error('The two PDFs must have the same number of pages');
  }

  // For each page, copy the page from the first PDF and then from the second PDF
  for (let i = 0; i < numPages1; i++) {
    const copiedPages1 = await pdfDoc.copyPages(pdfDoc1, [i]);
    const copiedPages2 = await pdfDoc.copyPages(pdfDoc2, [numPages2 - 1 - i]);

    // Add the copied pages to the new PDF document
    pdfDoc.addPage(copiedPages1[0]);
    pdfDoc.addPage(copiedPages2[0]);
  }

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  // This could be written to a file with Node.js or downloaded in the browser
  return pdfBytes;
}

export default merge;
