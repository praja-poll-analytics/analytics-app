import { CSVData, ElectionConfig, MergeCellInfo, PartyChartData } from '../../types';

// Helper function to calculate merge cells for given data
const calculateMergeCells = (data: Record<string, string>[], mergeColumns?: string[]): MergeCellInfo[] => {
  const mergeCells: MergeCellInfo[] = [];

  if (mergeColumns && mergeColumns.length > 0) {
    mergeColumns.forEach((columnKey) => {
      let currentValue: string | null = null;
      let startRow = 0;
      let rowSpan = 0;

      data.forEach((row, index) => {
        const value = row[columnKey] ?? '';
        if (value === currentValue || (value?.trim() === '' && currentValue !== null)) {
          rowSpan++;
        } else {
          if (rowSpan > 1 && currentValue !== null) {
            mergeCells.push({
              columnKey,
              startRow,
              rowSpan,
              value: currentValue,
            });
          }
          currentValue = value;
          startRow = index;
          rowSpan = 1;
        }
      });

      if (rowSpan > 1 && currentValue !== null) {
        mergeCells.push({
          columnKey,
          startRow,
          rowSpan,
          value: currentValue,
        });
      }
    });
  }

  return mergeCells;
};

export const mapCSV = (csv: string, electionConfig?: ElectionConfig): CSVData => {
  const lines = csv.split('\n').filter((line) => line.trim());
  const headers = lines[0].split(',').map((header) => header.trim());
  const data = lines.slice(1).map((line) => {
    const values = line.split(',');
    return headers.reduce((acc, header, index) => {
      acc[header] = values[index];
      return acc;
    }, {} as Record<string, string>);
  });

  // Add total row if requested and totalConfig is provided
  // if (addTotalRow && data.length > 0 && electionConfig?.totalConfig) {
  //   const { title, columns } = electionConfig.totalConfig;
  //   const totalRow: Record<string, string> = {};

  //   // Find the index of the title header and columns start header
  //   const titleHeaderIndex = headers.indexOf(title.header);
  //   const columnsStartIndex = headers.indexOf(columns.startHeader);

  //   headers.forEach((header, index) => {
  //     if (index === titleHeaderIndex) {
  //       totalRow[header] = 'Total';
  //     } else if (index > titleHeaderIndex && index < columnsStartIndex) {
  //       totalRow[header] = '';
  //     } else if (index >= columnsStartIndex && index < columnsStartIndex + columns.colSpan) {
  //       const sum = data.reduce((acc, row) => {
  //         const value = parseFloat(row[header]?.replace(/[^\d.-]/g, '') || '0');
  //         return acc + (isNaN(value) ? 0 : value);
  //       }, 0);
  //       totalRow[header] = sum > 0 ? sum.toString() : '';
  //     } else {
  //       totalRow[header] = '';
  //     }
  //   });

  //   data.push(totalRow);
  // }

  const mergeCells = calculateMergeCells(data, electionConfig?.mergeColumns);
  return {
    data,
    headers,
    mergeCells,
    partyNameColumns: electionConfig?.partyNameColumns,
    totalConfig: electionConfig?.totalConfig,
  };
};

// Recalculate merge cells for filtered data
export const recalculateMergeCells = (
  filteredData: Record<string, string>[],
  mergeColumns?: string[]
): MergeCellInfo[] => {
  return calculateMergeCells(filteredData, mergeColumns);
};

export const getChartData = (csvData: CSVData, estimatedColumn: string, actualColumn: string): PartyChartData[] => {
  return csvData.data.map((item) => ({
    partyName: item['Party Name'],
    estimated: Number(item[estimatedColumn]),
    actual: Number(item[actualColumn]),
  }));
};
