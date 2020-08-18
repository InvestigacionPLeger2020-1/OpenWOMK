import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { DatePipe } from '@angular/common';
import * as fileSaver from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  constructor() {
  }

  generateExcel(data: any[]) {
    const header = ['IdSimulation', 'Period', 'IdAgent', 'Values'];
    const dataExcel = data;
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Simulation');
    const headerRow = worksheet.addRow(header);

    headerRow.eachCell((cell, num) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: 'FFFFFF00'},
        bgColor: {argb: 'FF0000FF'}
      },
        cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
    });
    // worksheet.addRows(dataExcel);
    data.forEach(d => {
      const row = worksheet.addRow(d);
    });
    worksheet.getColumn(1).width = 11;
    worksheet.getColumn(2).width = 7;
    // tslint:disable-next-line:no-shadowed-variable
    workbook.xlsx.writeBuffer().then((dataExcel) => {
      const blob = new Blob([dataExcel], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }); //   xlsx MIME
      fs.saveAs(blob, 'Simulation.xlsx');
    });
  }
}
