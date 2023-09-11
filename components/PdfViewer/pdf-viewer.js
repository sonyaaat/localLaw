"use client"
import { useState,useEffect } from "react";
import css from "./pdf-viewer.module.css"
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function PDFViewer({docFile}) {
  useEffect(()=>{
    console.log("doc file in pdf",docFile)
      },[docFile])
  const [file, setFile] = useState(docFile);
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }


  return (
    <div>
      {/* <div>
        <label htmlFor="file">Load from file:</label>{" "}
        <input onChange={onFileChange} type="file" />
      </div> */}
      <div>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} className={css.centered}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={css.zero}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
