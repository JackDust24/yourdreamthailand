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
    const { pageNumber, numPages } = this.state;
    console.log("TEST 999");

    const pdf = this.props.link;

    return (
      <div>
        <Document
        //   file={require("/assets/Bangkok-Photo-Tour.pdf")}
        file={require("../../assets/Bangkok-Photo-Tour.pdf")}
          onLoadSuccess={this.onDocumentLoadSuccess}
        //   style={{ display: 'inline-block', width:200 }}
        className="pdf-view"
        >
          <Page pageNumber={pageNumber} />
        </Document>
        {/* <p>Page {pageNumber} of {numPages}</p> */}
      </div>
    );
  }
}

export default PDFViewer;