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
  Municipal,
}

export interface StateElectionData {
  stateName: string;
  availableElections: ElectionConfig[];
}

export interface ElectionConfig {
  name: string;
  type: ElectionType;
  surveyDate?: string;
  electionDate?: string;
  estimatedColumn: string;
  actualColumn: string;
  scrollableTable?: boolean;
  mergeColumns?: string[];
  isUpcoming?: boolean;
  rulingParty?: string;
  partyNameColumns?: string[];
}

export interface CSVData {
  data: Record<string, string>[];
  headers: string[];
  mergeCells?: MergeCellInfo[];
  partyNameColumns?: string[];
}

export interface MergeCellInfo {
  columnKey: string;
  startRow: number;
  rowSpan: number;
  value: string;
}

export interface PartyChartData {
  partyName: string;
  estimated: number;
  actual: number;
}

export interface StateStats {
  name: string;
  mlas: number;
  mpsLokSabha: number;
  ulbs: number;
  rajyaSabha: number;
  legislativeCouncil: number;
}

export interface StateColors {
  bg: string;
  fg: string;
  border: string;
}
