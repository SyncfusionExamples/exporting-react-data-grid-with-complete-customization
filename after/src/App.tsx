import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Toolbar,
  Grid,
  PdfExport,
  ExcelExport,
  Inject
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './App.css';

const App: React.FC = () => {
  let grid: Grid | null = null;

  const toolbarClick = (args: any) => {
    if (grid) {
      if (args.item.id.includes('pdfexport')) {
        grid.pdfExport({
          fileName: 'Data_Grid_Export.pdf',
          exportType: 'CurrentPage',
          header: {
            contents: [
              {
                position: { x: 0, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 13 },
                type: 'Text',
                value: "Northwind Traders"
              }
            ],
            fromTop: 0,
            height: 130
          },
          footer: {
            contents: [
              {
                position: { x: 0, y: 50 },
                style: { textBrushColor: '#000000', fontSize: 13 },
                type: 'Text',
                value: "Thank you for your business!"
              }
            ],
            fromBottom: 130,
            height: 130
          },
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
          }
        });
      } else if (args.item.id.includes('excelexport')) {
        grid.excelExport({
          fileName: "Data_Grid_Export.xlsx",
          header: {
            headerRows: 1,
            rows: [
                { cells: [{ colSpan: 5, value: "Northwind Traders", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, } }] },
            ]
        },
        footer: {
          footerRows: 1,
          rows: [
              { cells: [{ colSpan: 5, value: "Thank you for your business!", style: { hAlign: 'Center', bold: true } }] },
          ]
        },
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
        }
        });
      }
    }
  }

  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent dataSource={data}
        allowPaging={true}
        allowPdfExport={true}
        allowExcelExport={true}
        toolbar={['PdfExport', 'ExcelExport']}
        toolbarClick={toolbarClick}
        ref={g => grid = g}
      >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='100' />
        </ColumnsDirective>
        <Inject services={[Page, PdfExport, Toolbar, ExcelExport]} />
      </GridComponent>
    </div>
  );
}

export default App;