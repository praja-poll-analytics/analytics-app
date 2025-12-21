'use client';

import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import PartyVoteDistributionChart from './charts/PartyVoteDistributionChart';
import StateMapChart from './maps/StateMapChart';

interface PartyWiseResult {
  party: string;
  predictedVotes: string;
  actualVotes: string;
  percentageChange: string;
}

interface ConstituencyWiseResult {
  constituencyName: string;
  party: string;
  predictedVotes: string;
  actualVotes: string;
  winnerMargin: string;
  totalVotes: string;
  turnoutPercentage: string;
}

interface StateData {
  id: string;
  name: string;
  electionName: string;
}

export default function StateDetailPage({ state }: { state: StateData }) {
  const [partyWiseData, setPartyWiseData] = useState<PartyWiseResult[]>([]);
  const [constituencyWiseData, setConstituencyWiseData] = useState<ConstituencyWiseResult[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPartyWiseData = useCallback(async () => {
    try {
      const response = await fetch(`/data/${state.id}-party-wise.csv`);
      const text = await response.text();
      const lines = text.split('\n').filter((line) => line.trim());
      const data = lines.slice(1).map((line) => {
        const values = line.split(',');
        return {
          party: values[0],
          predictedVotes: values[1],
          actualVotes: values[2],
          percentageChange: values[3],
        };
      });
      setPartyWiseData(data);
    } catch (error) {
      console.error('Error fetching party-wise data:', error);
    }
  }, [state.id]);

  const fetchConstituencyWiseData = useCallback(async () => {
    try {
      const response = await fetch(`/data/${state.id}-constituency-wise.csv`);
      const text = await response.text();
      const lines = text.split('\n').filter((line) => line.trim());
      const data = lines.slice(1).map((line) => {
        const values = line.split(',');
        return {
          constituencyName: values[0],
          party: values[1],
          predictedVotes: values[2],
          actualVotes: values[3],
          winnerMargin: values[4],
          totalVotes: values[5],
          turnoutPercentage: values[6],
        };
      });
      setConstituencyWiseData(data);
    } catch (error) {
      console.error('Error fetching constituency-wise data:', error);
    }
  }, [state.id]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      await Promise.all([fetchPartyWiseData(), fetchConstituencyWiseData()]);
    } finally {
      setLoading(false);
    }
  }, [fetchPartyWiseData, fetchConstituencyWiseData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formatVotes = useCallback((votes: string) => {
    const num = parseInt(votes);
    if (num >= 10000000) {
      return `${(num / 10000000).toFixed(1)} Cr`;
    } else if (num >= 100000) {
      return `${(num / 100000).toFixed(1)} L`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)} K`;
    }
    return votes;
  }, []);

  if (loading) {
    return (
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-neutral-600">Loading election data...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/polls"
            className="inline-flex items-center text-primary hover:text-primary-light mb-4 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Polls
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">{state.name}</h1>
          <p className="text-neutral-600 text-lg">{state.electionName}</p>
        </div>

        <StateMapChart name={state.id} height={300} scale={2000} onEntrySelected={console.log} />
        <Tooltip id="district-tooltip" />

        {/* Party-wise Results Table */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Party-wise Results</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Party</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-700">Predicted Votes</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-700">Actual Votes</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-700">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {partyWiseData.map((row, index) => (
                    <tr key={index} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-neutral-900">{row.party}</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 text-right">
                        {formatVotes(row.predictedVotes)}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-700 text-right">{formatVotes(row.actualVotes)}</td>
                      <td className="px-6 py-4 text-sm text-right">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            row.percentageChange.startsWith('+')
                              ? 'bg-success/20 text-success'
                              : 'bg-error/20 text-error'
                          }`}
                        >
                          {row.percentageChange}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <PartyVoteDistributionChart partyWiseData={partyWiseData} formatVotes={formatVotes} />

        {/* Constituency-wise Results Table */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Constituency-wise Results</h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Constituency</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-700">Winning Party</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-700">Predicted Votes</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-700">Actual Votes</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-700">Winner Margin</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-700">Total Votes</th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-neutral-700">Turnout</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {constituencyWiseData.map((row, index) => (
                    <tr key={index} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-neutral-900">{row.constituencyName}</td>
                      <td className="px-6 py-4 text-sm text-neutral-600">{row.party}</td>
                      <td className="px-6 py-4 text-sm text-neutral-700 text-right">
                        {formatVotes(row.predictedVotes)}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-700 text-right">{formatVotes(row.actualVotes)}</td>
                      <td className="px-6 py-4 text-sm text-neutral-600 text-right">{formatVotes(row.winnerMargin)}</td>
                      <td className="px-6 py-4 text-sm text-neutral-600 text-right">{formatVotes(row.totalVotes)}</td>
                      <td className="px-6 py-4 text-sm text-neutral-600 text-right">{row.turnoutPercentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
