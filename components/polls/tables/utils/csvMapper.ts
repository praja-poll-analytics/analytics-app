import { CSVData, MergeCellInfo, PartyChartData } from '../../types';

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

export const mapCSV = (csv: string, mergeColumns?: string[]): CSVData => {
  const lines = csv.split('\n').filter((line) => line.trim());
  const headers = lines[0].split(',').map((header) => header.trim());
  const data = lines.slice(1).map((line) => {
    const values = line.split(',');
    return headers.reduce((acc, header, index) => {
      acc[header] = values[index];
      return acc;
    }, {} as Record<string, string>);
  });

  const mergeCells = calculateMergeCells(data, mergeColumns);
  return { data, headers, mergeCells };
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
