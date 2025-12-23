export interface PartyWiseEntry {
  partyName: string;
  estimatedSeatsBefore: string;
  estimatedPlusMinus: string;
  estimatedSeatsAfter: string;
  actualSeatsReceived: string;
}

export interface ConstituencyWiseEntry {
  district: string;
  constituency: string;
  partyName: string;
  estimatedVotes: string;
  actualVotes: string;
}
