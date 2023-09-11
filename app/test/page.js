'use client'
import dynamic from "next/dynamic";


const PDFViewer = dynamic(() => import("../../components/PdfViewer/pdf-viewer"), {
  ssr: false
});

export default function PDF() {
  return <PDFViewer />;
}
