import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Toolbar,
  PdfExport,
  Grid,
  ExcelExport
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './App.css';

const App: React.FC = () => {

  let grid: Grid | null;
  const toolbarClick = (args: any) => {
    if (grid) {
      if (args.item.id.includes('pdfexport')) {
        grid.pdfExport({
          fileName: 'invoice.pdf',
          exportType: 'CurrentPage',
          theme: {
            header: {
              bold: true,
              fontColor: '#00ff00',
              fontName: 'Calibri',
              fontSize: 10
            },
            record: {
              fontColor: '#0000ff',
              fontName: 'Calibri',
              fontSize: 8
            }
          },
          header: {
            fromTop: 0,
            height: 130,
            contents: [{
              type: 'Text',
              value: 'Northwind Traders',
              position: { x: 0, y: 50 },
              style: { textBrushColor: '#000000', fontSize: 13 }
            }]
          },
          footer: {
            contents: [{
              type: 'Text',
              value: 'Thank you for your Business',
              position: { x: 0, y: 50 },
              style: { textBrushColor: '#000000', fontSize: 13 }
            }],
            fromBottom: 130,
            height: 130
          }
        });
      } else if (args.item.id.includes('excelexport')) {
        grid.excelExport({
          fileName: 'invoice.xlsx',
          exportType: 'CurrentPage',
          theme: {
            header: {
              bold: true,
              fontColor: '#00ff00',
              fontName: 'Calibri',
              fontSize: 10
            },
            record: {
              fontColor: '#0000ff',
              fontName: 'Calibri',
              fontSize: 8
            }
          },
          header: {
            headerRows: 1,
            rows: [
              {
                cells: [{
                  colSpan: 4,
                  value: "Northwind Traders",
                  style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, }
                }]
              }
            ]
          },
          footer: {
            footerRows: 1,
            rows: [
              { cells: [{ colSpan: 5, value: "Thank you for your business!", style: { hAlign: 'Center', bold: true } }] },
            ]

          }
        });
      }
    }
  }
  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent dataSource={data}
        ref={g => grid = g}
        allowPaging={true}
        toolbar={['PdfExport', 'ExcelExport']}
        allowPdfExport={true}
        allowExcelExport
        toolbarClick={toolbarClick}
      >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='100' />
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, PdfExport, ExcelExport]} />
      </GridComponent>
    </div>
  );
}

export default App;