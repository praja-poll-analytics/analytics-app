'use client';

import { useState } from 'react';

interface ElectionResult {
  id: string;
  state: string;
  electionType: string;
  date: string;
  status: 'completed' | 'ongoing' | 'upcoming';
  leadingParty: string;
  leadingPartyVotes: number;
  leadingPartyPercentage: number;
  trailingParty: string;
  trailingPartyVotes: number;
  trailingPartyPercentage: number;
  totalSeats: number;
  resultsDeclared: number;
}

const electionResultsData: ElectionResult[] = [
  {
    id: '1',
    state: 'Maharashtra',
    electionType: 'Assembly Elections',
    date: '2024-11-20',
    status: 'completed',
    leadingParty: 'BJP+',
    leadingPartyVotes: 56400000,
    leadingPartyPercentage: 36.2,
    trailingParty: 'INC+',
    trailingPartyVotes: 42300000,
    trailingPartyPercentage: 27.1,
    totalSeats: 288,
    resultsDeclared: 288,
  },
  {
    id: '2',
    state: 'Jharkhand',
    electionType: 'Assembly Elections',
    date: '2024-11-20',
    status: 'completed',
    leadingParty: 'JMM+',
    leadingPartyVotes: 12800000,
    leadingPartyPercentage: 42.8,
    trailingParty: 'BJP+',
    trailingPartyVotes: 11200000,
    trailingPartyPercentage: 37.4,
    totalSeats: 81,
    resultsDeclared: 81,
  },
  {
    id: '3',
    state: 'Delhi',
    electionType: 'Assembly Elections',
    date: '2025-02-08',
    status: 'upcoming',
    leadingParty: 'AAP',
    leadingPartyVotes: 0,
    leadingPartyPercentage: 0,
    trailingParty: 'BJP',
    trailingPartyVotes: 0,
    trailingPartyPercentage: 0,
    totalSeats: 70,
    resultsDeclared: 0,
  },
  {
    id: '4',
    state: 'Bihar',
    electionType: 'Assembly Elections',
    date: '2025-10-15',
    status: 'upcoming',
    leadingParty: 'RJD+',
    leadingPartyVotes: 0,
    leadingPartyPercentage: 0,
    trailingParty: 'BJP+',
    trailingPartyVotes: 0,
    trailingPartyPercentage: 0,
    totalSeats: 243,
    resultsDeclared: 0,
  },
];

const getStatusColor = (status: ElectionResult['status']) => {
  switch (status) {
    case 'completed':
      return 'bg-success/20 text-success border-success/30';
    case 'ongoing':
      return 'bg-warning/20 text-warning border-warning/30';
    case 'upcoming':
      return 'bg-info/20 text-info border-info/30';
    default:
      return 'bg-neutral-500/20 text-neutral-400 border-neutral-500/30';
  }
};

const getStatusText = (status: ElectionResult['status']) => {
  switch (status) {
    case 'completed':
      return 'Results Declared';
    case 'ongoing':
      return 'Counting in Progress';
    case 'upcoming':
      return 'Upcoming Election';
    default:
      return 'Unknown';
  }
};

export default function ElectionResults() {
  const [selectedTab, setSelectedTab] = useState<'latest' | 'upcoming'>('latest');

  const latestResults = electionResultsData.filter((result) => result.status === 'completed');
  const upcomingElections = electionResultsData.filter((result) => result.status === 'upcoming');

  const formatVotes = (votes: number) => {
    if (votes === 0) return '0';
    return (votes / 1000000).toFixed(1) + 'M';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Latest Election Results</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Stay updated with the most recent election outcomes and upcoming polls across India
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg border border-neutral-200 p-1 shadow-sm">
            <button
              onClick={() => setSelectedTab('latest')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedTab === 'latest' ? 'bg-primary text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Latest Results
            </button>
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                selectedTab === 'upcoming'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Upcoming Elections
            </button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(selectedTab === 'latest' ? latestResults : upcomingElections).map((result) => (
            <div
              key={result.id}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-200 overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Header */}
              <div className="p-6 border-b border-neutral-200">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900">{result.state}</h3>
                    <p className="text-neutral-400 text-sm">{result.electionType}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(result.status)}`}>
                    {getStatusText(result.status)}
                  </div>
                </div>
                <div className="flex items-center text-neutral-600 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {formatDate(result.date)}
                </div>
              </div>

              {/* Results Content */}
              <div className="p-6">
                {result.status === 'completed' ? (
                  <div className="space-y-4">
                    {/* Leading Party */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-neutral-900 font-medium">{result.leadingParty}</span>
                          <span className="text-primary font-bold">{result.leadingPartyPercentage}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${result.leadingPartyPercentage}%` }}
                          />
                        </div>
                        <p className="text-neutral-400 text-sm mt-1">{formatVotes(result.leadingPartyVotes)} votes</p>
                      </div>
                    </div>

                    {/* Trailing Party */}
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-neutral-900 font-medium">{result.trailingParty}</span>
                          <span className="text-accent font-bold">{result.trailingPartyPercentage}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div
                            className="bg-accent h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${result.trailingPartyPercentage}%` }}
                          />
                        </div>
                        <p className="text-neutral-400 text-sm mt-1">{formatVotes(result.trailingPartyVotes)} votes</p>
                      </div>
                    </div>

                    {/* Seat Information */}
                    <div className="pt-3 border-t border-neutral-200">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-400">
                          Seats: {result.resultsDeclared}/{result.totalSeats}
                        </span>
                        <button className="text-primary hover:text-primary-light font-medium transition-colors">
                          View Details →
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-info/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-neutral-600 mb-2">Election Scheduled</p>
                    <p className="text-neutral-400 text-sm mb-4">
                      {formatDate(result.date)} • {result.totalSeats} seats
                    </p>
                    <button className="bg-info hover:bg-info/80 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                      Set Reminder
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-primary/25">
            View All Election Results
          </button>
        </div>
      </div>
    </section>
  );
}
