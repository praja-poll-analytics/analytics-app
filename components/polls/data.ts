import { ElectionType, StateElectionData } from './types';

export const electionData: Record<string, StateElectionData> = {
  uttarpradesh: {
    stateName: 'Uttar Pradesh',
    availableElections: [
      {
        name: 'Uttar Pradesh Assembly General Election 2017',
        type: ElectionType.Assembly,
        surveyDate: '11-03-2017',
      },
    ],
  },
  bihar: {
    stateName: 'Bihar',
    availableElections: [
      {
        name: 'Bihar Legislative Assembly Election 2025',
        type: ElectionType.Assembly,
      },
    ],
  },
  andhrapradesh: {
    stateName: 'Andhra Pradesh',
    availableElections: [
      {
        name: 'Andhra Pradesh Assembly Election 2024',
        type: ElectionType.Assembly,
      },
      {
        name: 'Andhra Pradesh Lok Sabha Election 2024',
        type: ElectionType.LokSabha,
        electionDate: '06-06-2024',
      },
    ],
  },
};
