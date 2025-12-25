import { CSVData, PartyChartData } from '../../types';

export const mapCSV = (csv: string): CSVData => {
  const lines = csv.split('\n').filter((line) => line.trim());
  const headers = lines[0].split(',').map((header) => header.trim());
  const data = lines.slice(1).map((line) => {
    const values = line.split(',');
    return headers.reduce((acc, header, index) => {
      acc[header] = values[index];
      return acc;
    }, {} as Record<string, string>);
  });
  return { data, headers };
};

export const getChartData = (csvData: CSVData, estimatedColumn: string, actualColumn: string): PartyChartData[] => {
  console.log(csvData);
  return csvData.data.map((item) => ({
    partyName: item['Party Name'],
    estimated: Number(item[estimatedColumn]),
    actual: Number(item[actualColumn]),
  }));
};
