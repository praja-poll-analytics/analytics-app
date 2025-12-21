'use client';

import { useCallback } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#06b6d4', '#84cc16'];

interface PartyWiseResult {
  party: string;
  predictedVotes: string;
  actualVotes: string;
  percentageChange: string;
}

interface PartyVoteDistributionChartProps {
  partyWiseData: PartyWiseResult[];
  formatVotes: (votes: string) => string;
}

export default function PartyVoteDistributionChart({ partyWiseData, formatVotes }: PartyVoteDistributionChartProps) {
  const getPieChartData = useCallback(
    (type: 'predicted' | 'actual') => {
      return partyWiseData.map((item, index) => ({
        name: item.party,
        value: parseInt(item[type === 'predicted' ? 'predictedVotes' : 'actualVotes']),
        color: COLORS[index % COLORS.length],
      }));
    },
    [partyWiseData]
  );

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">Party-wise Vote Distribution</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Predicted Votes Pie Chart */}
        <div className="bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100 backdrop-blur-sm rounded-xl border p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Predicted Votes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={getPieChartData('predicted')}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(1) : '0'}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {getPieChartData('predicted').map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number | undefined) => (value ? formatVotes(value.toString()) : '0')}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '14px',
                  color: '#f3f4f6',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Actual Votes Pie Chart */}
        <div className="bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100 backdrop-blur-sm rounded-xl border p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Actual Votes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={getPieChartData('actual')}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(1) : '0'}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {getPieChartData('actual').map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number | undefined) => (value ? formatVotes(value.toString()) : '0')}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  fontSize: '14px',
                  color: '#f3f4f6',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
