'use client';

import { formatVotes } from '@/lib/utils/string';
import { useCallback } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { PartyChartData } from '../types';

const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#06b6d4', '#84cc16'];

interface PartyVoteDistributionChartProps {
  data: PartyChartData[];
}

export default function PartyVoteDistributionChart({ data }: PartyVoteDistributionChartProps) {
  const getPieChartData = useCallback(
    (type: 'predicted' | 'actual') => {
      const raw = data
        .map((item) => {
          const valueRaw = type === 'predicted' ? item.estimated : item.actual;
          const value = Number(valueRaw);
          return {
            name: item.partyName,
            value: Number.isFinite(value) ? value : 0,
          };
        })
        .sort((a, b) => b.value - a.value);

      const top = raw.slice(0, 5);
      const otherTotal = raw.slice(5).reduce((sum, item) => sum + item.value, 0);

      const combined = otherTotal > 0 ? [...top, { name: 'Other', value: otherTotal }] : top;

      return combined.map((item, index) => ({
        ...item,
        color: item.name === 'Other' ? '#94a3b8' : COLORS[index % COLORS.length],
      }));
    },
    [data]
  );

  const predictedPieData = getPieChartData('predicted');
  const actualPieData = getPieChartData('actual');

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Party seat wise percentage distribution</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100 backdrop-blur-sm rounded-xl border p-6">
          <h3 className="text-lg font-semibold mb-4">Predicted Seat Percentage</h3>
          <DistributionChart data={predictedPieData} />
        </div>
        <div className="bg-gradient-to-br from-neutral-50 via-primary/5 to-neutral-100 backdrop-blur-sm rounded-xl border p-6">
          <h3 className="text-lg font-semibold mb-4">Actual Seat Percentage</h3>
          <DistributionChart data={actualPieData} />
        </div>
      </div>
    </div>
  );
}

const DistributionChart = ({ data }: { data: { color: string; name: string; value: unknown }[] }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(1) : '0'}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number | undefined) => (value ? formatVotes(value) : '0')}
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
  );
};
