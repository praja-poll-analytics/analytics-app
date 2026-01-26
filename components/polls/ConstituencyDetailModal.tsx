'use client';

import { Modal } from '@/components/ui/modal';
import { formatVotes } from '@/lib/utils/string';
import { Bar, BarChart, Cell, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { partyColorMapping } from './data';
import { ConstituencyModalConfig } from './types';

interface ConstituencyDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Record<string, string> | null;
  modalConfig: ConstituencyModalConfig;
}

export default function ConstituencyDetailModal({ isOpen, onClose, data, modalConfig }: ConstituencyDetailModalProps) {
  if (!data || !modalConfig) return null;

  const constituencyName = data[modalConfig.constituencyColumn] || 'Details';
  const districtName = modalConfig.districtColumn ? data[modalConfig.districtColumn] : undefined;

  // Extract party names from config
  const predictedWinner = data[modalConfig.predictedWinnerColumn] || '-';
  const actualWinner = data[modalConfig.actualWinnerColumn] || '-';
  const predictedRunnerUp = modalConfig.predictedRunnerUpColumn
    ? data[modalConfig.predictedRunnerUpColumn] || '-'
    : '-';
  const actualRunnerUp = modalConfig.actualRunnerUpColumn ? data[modalConfig.actualRunnerUpColumn] || '-' : '-';

  // Parse values helper
  const parseValue = (val: string | undefined) => {
    if (!val || val === '-' || val === '') return null;
    const num = parseInt(val.replace(/,/g, ''), 10);
    return isNaN(num) ? null : num;
  };

  // Get vote values from config
  const expectedVotes = modalConfig.predictedVotesColumn ? parseValue(data[modalConfig.predictedVotesColumn]) : null;
  const actualVotes = modalConfig.actualVotesColumn ? parseValue(data[modalConfig.actualVotesColumn]) : null;
  const expectedRunnerUpVotes = modalConfig.predictedRunnerUpVotesColumn
    ? parseValue(data[modalConfig.predictedRunnerUpVotesColumn])
    : null;
  const actualRunnerUpVotes = modalConfig.actualRunnerUpVotesColumn
    ? parseValue(data[modalConfig.actualRunnerUpVotesColumn])
    : null;
  const expectedMargin = modalConfig.predictedMarginColumn ? parseValue(data[modalConfig.predictedMarginColumn]) : null;
  const actualMargin = modalConfig.actualMarginColumn ? parseValue(data[modalConfig.actualMarginColumn]) : null;

  const hasVoteData = expectedVotes !== null || actualVotes !== null;
  const hasRunnerUpData = predictedRunnerUp !== '-' || actualRunnerUp !== '-';
  const hasMarginData = expectedMargin !== null || actualMargin !== null;

  const getPartyColor = (partyName: string) => {
    const cleaned = partyName.split(' (')[0].trim();
    return partyColorMapping[cleaned]?.bg || partyColorMapping['Others']?.bg || '#6B7280';
  };

  // Vote comparison data
  const voteComparisonData = [
    {
      name: 'Winner',
      Predicted: expectedVotes,
      Actual: actualVotes,
    },
    ...(expectedRunnerUpVotes !== null || actualRunnerUpVotes !== null
      ? [
          {
            name: 'Runner-Up',
            Predicted: expectedRunnerUpVotes,
            Actual: actualRunnerUpVotes,
          },
        ]
      : []),
  ].filter((d) => d.Predicted !== null || d.Actual !== null);

  // Margin comparison data
  const marginComparisonData = [
    { name: 'Predicted Margin', value: expectedMargin, fill: '#3B82F6' },
    { name: 'Actual Margin', value: actualMargin, fill: '#10B981' },
  ].filter((d) => d.value !== null);

  const title = districtName ? `${constituencyName} - ${districtName}` : constituencyName;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="xl">
      <div className="space-y-6">
        {/* Party Comparison Cards */}
        <div className={`grid grid-cols-1 ${hasRunnerUpData ? 'md:grid-cols-2' : ''} gap-4`}>
          {/* Winner Card */}
          <div className="bg-neutral-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-neutral-500 mb-3">Winner</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Predicted</span>
                <span
                  className="px-3 py-1 rounded text-xs font-semibold"
                  style={{
                    backgroundColor: getPartyColor(predictedWinner),
                    color: '#fff',
                  }}
                >
                  {predictedWinner.split(' (')[0]}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neutral-400">Actual</span>
                <span
                  className="px-3 py-1 rounded text-xs font-semibold"
                  style={{
                    backgroundColor: getPartyColor(actualWinner),
                    color: '#fff',
                  }}
                >
                  {actualWinner.split(' (')[0]}
                </span>
              </div>
              {predictedWinner !== '-' && actualWinner !== '-' && (
                <div className="mt-2 pt-2 border-t">
                  {predictedWinner.split(' (')[0] === actualWinner.split(' (')[0] ? (
                    <span className="text-green-600 text-xs font-medium flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Prediction Correct
                    </span>
                  ) : (
                    <span className="text-red-600 text-xs font-medium flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Prediction Incorrect
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Runner-Up Card - only show if we have runner-up data */}
          {hasRunnerUpData && (
            <div className="bg-neutral-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-neutral-500 mb-3">Runner-Up</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Predicted</span>
                  <span
                    className="px-3 py-1 rounded text-xs font-semibold"
                    style={{
                      backgroundColor: getPartyColor(predictedRunnerUp),
                      color: '#fff',
                    }}
                  >
                    {predictedRunnerUp.split(' (')[0]}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Actual</span>
                  <span
                    className="px-3 py-1 rounded text-xs font-semibold"
                    style={{
                      backgroundColor: getPartyColor(actualRunnerUp),
                      color: '#fff',
                    }}
                  >
                    {actualRunnerUp.split(' (')[0]}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Vote Comparison Chart */}
        {hasVoteData && voteComparisonData.length > 0 && (
          <div className="bg-neutral-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-neutral-700 mb-4">Vote Comparison</h4>
            <ResponsiveContainer width="100%" height={voteComparisonData.length > 1 ? 200 : 100}>
              <BarChart data={voteComparisonData} layout="vertical">
                <XAxis type="number" tickFormatter={(v) => formatVotes(v)} />
                <YAxis type="category" dataKey="name" width={80} />
                <Tooltip
                  formatter={(value) => formatVotes(value as number)}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
                <Bar dataKey="Predicted" fill="#3B82F6" name="Predicted" radius={[0, 4, 4, 0]} />
                <Bar dataKey="Actual" fill="#10B981" name="Actual" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Margin Comparison Chart */}
        {hasMarginData && marginComparisonData.length > 0 && (
          <div className="bg-neutral-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-neutral-700 mb-4">Winning Margin Comparison</h4>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={marginComparisonData} layout="vertical">
                <XAxis type="number" tickFormatter={(v) => formatVotes(v)} style={{ fontSize: '12px' }} />
                <YAxis type="category" dataKey="name" width={120} style={{ fontSize: '12px' }} />
                <Tooltip
                  formatter={(value) => formatVotes(value as number)}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {marginComparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* No Data Message */}
        {!hasVoteData && !hasMarginData && (
          <div className="text-center py-8 text-neutral-500">
            <p>Detailed vote data is not available for this constituency.</p>
          </div>
        )}
      </div>
    </Modal>
  );
}
