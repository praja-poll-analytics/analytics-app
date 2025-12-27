import { ElectionType, StateElectionData } from './types';

export const electionData: Record<string, StateElectionData> = {
  uttarpradesh: {
    stateName: 'Uttar Pradesh',
    availableElections: [
      {
        name: 'Uttar Pradesh Assembly General Election 2017',
        type: ElectionType.Assembly,
        surveyDate: '11-03-2017',
        estimatedColumn: 'Estimates on 09-03-2017 after calculations',
        actualColumn: 'Actual seats received on 11-03-2017',
      },
    ],
  },
  bihar: {
    stateName: 'Bihar',
    availableElections: [
      {
        name: 'Bihar Legislative Assembly Election 2025',
        type: ElectionType.Assembly,
        estimatedColumn: 'Estimated Seats Prediction',
        actualColumn: 'Actual Seats After Results on 14-11-2025',
      },
    ],
  },
  andhrapradesh: {
    stateName: 'Andhra Pradesh',
    availableElections: [
      {
        name: 'Andhra Pradesh Assembly Election 2024',
        type: ElectionType.Assembly,
        estimatedColumn: 'Expected Seats',
        actualColumn: 'Actual Seats',
      },
      {
        name: 'Andhra Pradesh Lok Sabha Election 2024',
        type: ElectionType.LokSabha,
        estimatedColumn: 'Expected Total Seats / Predicted Seats',
        actualColumn: 'Actual Results 2024',
      },
    ],
  },
};
