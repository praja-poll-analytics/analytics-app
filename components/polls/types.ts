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

export enum ElectionType {
  Assembly,
  LokSabha,
}

export interface StateElectionData {
  stateName: string;
  availableElections: {
    name: string;
    type: ElectionType;
    surveyDate?: string;
    electionDate?: string;
  }[];
}
