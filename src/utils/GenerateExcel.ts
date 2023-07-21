import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const downloadExcelFile = (
  jsonObject: object[],
  fileName: string = 'new-file'
) => {
  const worksheet = XLSX.utils.json_to_sheet(jsonObject);
  const workbook = {
    Sheets: { 'Sheet 1': worksheet },
    SheetNames: ['Sheet 1'],
  };
  const excelBuffer = XLSX.write(workbook, {
    bookType: 'xlsx',
    type: 'array',
  });
  const data = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  saveAs(data, fileName + '.xlsx');
};
