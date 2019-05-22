import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class PDFViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }
 
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }
 
  render() {
    const { pageNumber } = this.state;

    return (
      <div>
        <Document
        file={require("../../assets/Bangkok-Photo-Tour.pdf")}
          onLoadSuccess={this.onDocumentLoadSuccess}
        className="pdf-view"
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
  }
}

export default PDFViewer;