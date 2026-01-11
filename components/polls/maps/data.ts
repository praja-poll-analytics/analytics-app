// State name to abbreviation mapping
export const stateAbbreviations: Record<string, string> = {
  'Andhra Pradesh': 'AP',
  'Arunachal Pradesh': 'AR',
  Assam: 'AS',
  Bihar: 'BR',
  Chhattisgarh: 'CG',
  Goa: 'GA',
  Gujarat: 'GJ',
  Haryana: 'HR',
  'Himachal Pradesh': 'HP',
  Jharkhand: 'JH',
  Karnataka: 'KA',
  Kerala: 'KL',
  'Madhya Pradesh': 'MP',
  Maharashtra: 'MH',
  Manipur: 'MN',
  Meghalaya: 'ML',
  Mizoram: 'MZ',
  Nagaland: 'NL',
  Odisha: 'OD',
  Punjab: 'PB',
  Rajasthan: 'RJ',
  Sikkim: 'SK',
  'Tamil Nadu': 'TN',
  TamilNadu: 'TN',
  Telangana: 'TG',
  Tripura: 'TR',
  'Uttar Pradesh': 'UP',
  UttarPradesh: 'UP',
  Uttarakhand: 'UK',
  'West Bengal': 'WB',
  WestBengal: 'WB',
  'Andaman and Nicobar Islands': 'AN',
  Chandigarh: 'CH',
  'Dadra and Nagar Haveli and Daman and Diu': 'DD',
  Delhi: 'DL',
  'Jammu and Kashmir': 'JK',
  Ladakh: 'LA',
  Lakshadweep: 'LD',
  Puducherry: 'PY',
};

export const statesMapConfig: Record<string, { name: string; scaleMap?: number; centerMap: [number, number] }> = {
  andamannicobar: {
    name: 'Andaman and Nicobar Islands',
    scaleMap: 4000, // 8,249 sq km - scattered islands, needs moderate scale
    centerMap: [92.9, 11.7],
  },
  andhrapradesh: {
    name: 'Andhra Pradesh',
    scaleMap: 2000, // 162,975 sq km - large state (reference)
    centerMap: [80, 16],
  },
  arunachalpradesh: {
    name: 'Arunachal Pradesh',
    scaleMap: 2500, // 83,743 sq km - medium-large state
    centerMap: [94.5, 28],
  },
  assam: {
    name: 'Assam',
    scaleMap: 2800, // 78,438 sq km - medium state
    centerMap: [92.9, 26],
  },
  bihar: {
    name: 'Bihar',
    scaleMap: 4000, // 94,163 sq km - medium state (reference)
    centerMap: [85.5, 26],
  },
  chhattisgarh: {
    name: 'Chhattisgarh',
    scaleMap: 2200, // 135,192 sq km - large state
    centerMap: [82, 21],
  },
  delhi: {
    name: 'Delhi',
    scaleMap: 15000, // 1,484 sq km - very small UT
    centerMap: [77.05, 28.6],
  },
  goa: {
    name: 'Goa',
    scaleMap: 12000, // 3,702 sq km - very small state
    centerMap: [74, 15.25],
  },
  gujarat: {
    name: 'Gujarat',
    scaleMap: 1800, // 196,024 sq km - large state
    centerMap: [71.5, 22],
  },
  haryana: {
    name: 'Haryana',
    scaleMap: 4500, // 44,212 sq km - small state
    centerMap: [76, 29],
  },
  himachalpradesh: {
    name: 'Himachal Pradesh',
    scaleMap: 3500, // 55,673 sq km - small-medium state
    centerMap: [77.5, 31.5],
  },
  jammukashmir: {
    name: 'Jammu and Kashmir',
    scaleMap: 2800, // 42,241 sq km (J&K UT) - but elongated shape
    centerMap: [75, 33.5],
  },
  jharkhand: {
    name: 'Jharkhand',
    scaleMap: 3500, // 79,716 sq km - medium state
    centerMap: [85.5, 23.5],
  },
  karnataka: {
    name: 'Karnataka',
    scaleMap: 1800, // 191,791 sq km - large state
    centerMap: [76.5, 15],
  },
  kerala: {
    name: 'Kerala',
    scaleMap: 4500, // 38,863 sq km - small state, narrow shape
    centerMap: [76.3, 10.5],
  },
  ladakh: {
    name: 'Ladakh',
    scaleMap: 2000, // 59,146 sq km - medium, but sparse
    centerMap: [77.5, 34],
  },
  lakshadweep: {
    name: 'Lakshadweep',
    scaleMap: 15000, // 32 sq km - tiny islands
    centerMap: [73, 10.5],
  },
  madhyapradesh: {
    name: 'Madhya Pradesh',
    scaleMap: 1600, // 308,252 sq km - very large state
    centerMap: [78, 23.5],
  },
  maharashtra: {
    name: 'Maharashtra',
    scaleMap: 1600, // 307,713 sq km - very large state
    centerMap: [76.5, 19],
  },
  manipur: {
    name: 'Manipur',
    scaleMap: 6000, // 22,327 sq km - small state
    centerMap: [93.9, 24.7],
  },
  meghalaya: {
    name: 'Meghalaya',
    scaleMap: 6000, // 22,429 sq km - small state
    centerMap: [91.3, 25.5],
  },
  mizoram: {
    name: 'Mizoram',
    scaleMap: 5500, // 21,081 sq km - small state
    centerMap: [92.8, 23.2],
  },
  nagaland: {
    name: 'Nagaland',
    scaleMap: 6500, // 16,579 sq km - small state
    centerMap: [94.5, 26],
  },
  odisha: {
    name: 'Odisha',
    scaleMap: 2200, // 155,707 sq km - large state
    centerMap: [84.5, 20.5],
  },
  puducherry: {
    name: 'Puducherry',
    scaleMap: 15000, // 479 sq km - very small UT
    centerMap: [79.8, 11.9],
  },
  punjab: {
    name: 'Punjab',
    scaleMap: 4000, // 50,362 sq km - small-medium state
    centerMap: [75.5, 31],
  },
  rajasthan: {
    name: 'Rajasthan',
    scaleMap: 1500, // 342,239 sq km - largest state
    centerMap: [74, 26.5],
  },
  sikkim: {
    name: 'Sikkim',
    scaleMap: 10000, // 7,096 sq km - very small state
    centerMap: [88.5, 27.5],
  },
  tamilnadu: {
    name: 'TamilNadu',
    scaleMap: 2200, // 130,058 sq km - large state
    centerMap: [78.5, 11],
  },
  telangana: {
    name: 'Telangana',
    scaleMap: 2800, // 112,077 sq km - medium-large state
    centerMap: [79.5, 18],
  },
  tripura: {
    name: 'Tripura',
    scaleMap: 7000, // 10,486 sq km - small state
    centerMap: [91.7, 23.8],
  },
  uttarakhand: {
    name: 'Uttarakhand',
    scaleMap: 3500, // 53,483 sq km - small-medium state
    centerMap: [79.5, 30],
  },
  uttarpradesh: {
    name: 'UttarPradesh',
    scaleMap: 2000, // 240,928 sq km - large state (reference)
    centerMap: [80.5, 27],
  },
  westbengal: {
    name: 'WestBengal',
    scaleMap: 2800, // 88,752 sq km - medium state
    centerMap: [87.5, 24],
  },
};

export const getKeyFromStateName = (stateName: string): string => {
  return (
    Object.entries(statesMapConfig).find(([, config]) => config.name === stateName)?.[0] ||
    stateName.toLowerCase().replace(/\s+/g, '')
  );
};
