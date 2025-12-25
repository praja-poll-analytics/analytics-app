import { CSVData } from '../../types';

export const mapCSV = (csv: string): CSVData => {
  const lines = csv.split('\n').filter((line) => line.trim());
  const headers = lines[0].split(',');
  const data = lines.slice(1).map((line) => {
    const values = line.split(',');
    return headers.reduce((acc, header, index) => {
      acc[header] = values[index];
      return acc;
    }, {} as Record<string, string>);
  });
  return { data, headers };
};
