'use client';

import { partyColorMapping } from './data';
import { CSVData } from './types';

interface PartyPredictionGridProps {
  csvData: CSVData;
  estimatedColumn: string;
  actualColumn: string;
  title: string;
}

interface PartyData {
  partyName: string;
  predicted: number;
  actual: number | null;
  difference: number | null;
}

export default function PartyPredictionGrid({
  csvData,
  estimatedColumn,
  actualColumn,
  title,
}: PartyPredictionGridProps) {
  const { data } = csvData;

  // Extract party data from CSV
  const partyData: PartyData[] = data
    .filter((row) => row['Party Name'])
    .map((row) => {
      const predicted = parseInt(row[estimatedColumn] || '0', 10) || 0;
      const actualStr = row[actualColumn];
      const actual = actualStr ? parseInt(actualStr, 10) : null;
      const difference = actual !== null ? actual - predicted : null;

      return {
        partyName: row['Party Name'],
        predicted,
        actual,
        difference,
      };
    })
    .filter((party) => party.predicted > 0 || (party.actual !== null && party.actual > 0));

  const getPartyColors = (partyName: string) => {
    return partyColorMapping[partyName] || partyColorMapping['Others'];
  };

  const getDifferenceColor = (diff: number | null) => {
    if (diff === null) return 'text-neutral-400';
    if (diff > 0) return 'text-green-600';
    if (diff < 0) return 'text-red-600';
    return 'text-neutral-600';
  };

  const getDifferenceText = (diff: number | null) => {
    if (diff === null) return '-';
    if (diff > 0) return `+${diff}`;
    return diff.toString();
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
        {partyData.map((party) => {
          const colors = getPartyColors(party.partyName);
          return (
            <div
              key={party.partyName}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              style={{ borderColor: colors.border, borderWidth: '2px' }}
            >
              {/* Party Header */}
              <div className="px-3 py-2 text-center" style={{ backgroundColor: colors.bg, color: colors.fg }}>
                <span className="font-semibold text-sm md:text-base truncate block">{party.partyName}</span>
              </div>

              {/* Stats */}
              <div className="bg-white p-3 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-500">Predicted</span>
                  <span className="font-semibold text-neutral-800">{party.predicted}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-500">Actual</span>
                  <span className="font-semibold text-neutral-800">{party.actual !== null ? party.actual : '-'}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t pt-2">
                  <span className="text-neutral-500">Difference</span>
                  <span className={`font-bold ${getDifferenceColor(party.difference)}`}>
                    {getDifferenceText(party.difference)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
