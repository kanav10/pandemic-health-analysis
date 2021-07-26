import { formatLongNumber, formatSignedPercent } from "../format"

const confirmedCasesIndicator = {
    key: 'confirmedCases',
    name: 'Confirmed cases',
    color: 'rgb(208, 0, 255)',
    value: 0,
    formatValue: value => formatLongNumber(value),
    isPercent: false,
    measures: []
}

const confirmedDeathIndicator = {
    key: 'deaths',
    name: 'Confirmed deaths',
    color: 'rgb(255, 0, 0)',
    value: 0,
    formatValue: value => formatLongNumber(value),
    isPercent: false,
    measures: []
}
const lifeexpectancyIndicator = {
    key: 'life_expectancy',
    name: 'life expectancy',
    color: 'rgb(0, 170, 111)',
    value: 0,
    formatValue: value => formatLongNumber(value),
    isPercent: false,
    measures: []
}
const comorbiditymortalityrate = {
    key: 'comorbidity_mortality_rate',
    name: 'comorbidity mortality rate',
    color: 'rgb(0, 90, 0)',
    value: 0,
    formatValue: value => formatLongNumber(value),
    isPercent: false,
    measures: []
}

const cumulativedeceasedIndicator = {
    key: 'cumulative_deceased',
    name: 'cumulative deceased',
    color: 'rgb(170, 0, 122)',
    value: 0,
    formatValue: value => formatLongNumber(value),
    isPercent: false,
    measures: []
}

const stringencyIndicator = {
    key: 'maxStringencyIndex',
    name: 'Stringency Index',
    color: 'rgb(24, 103, 210)',
    value: 0,
    formatValue: value => formatSignedPercent(value),
    isPercent: true,
    measures: [
    ]
}
const humandevelopmentindex = {
  key: 'human_development_index',
  name: 'human development index',
  color: 'rgb(31, 142, 42)',
  value: 0,
  formatValue: (value) => formatSignedPercent(value),
  isPercent: false,
  measures: [],
};
const vaccineInvestmentIndicator = {
  key: 'vaccineInvestment',
  name: 'vaccine Investment',
  color: 'rgb(255, 170, 0)',
  value: 0,
  formatValue: (value) => formatSignedPercent(value),
  isPercent: true,
  measures: [],
};
const gdppercapitausd = {
    key: 'gdp_per_capita_usd',
    name: 'GDP per capita USD',
    color: 'rgb(232, 170, 13)',
    value: 0,
    formatValue: value => formatSignedPercent(value),
    isPercent: false,
    measures: [
    ]
}
const cumulativerecovered = {
    key: 'cumulative_recovered',
    name: 'cumulative recovered',
    color: 'rgb(30, 125, 160)',
    value: 0,
    formatValue: value => formatSignedPercent(value),
    isPercent: false,
    measures: [
    ]
}
const emergencyHealthcareInvestmentIndicator = {
  key: 'emergencyHealthcareInvestment',
  name: 'Emergency Healthcare Investment',
  color: 'rgb(171, 108, 183)',
  value: 0,
  formatValue: (value) => formatSignedPercent(value),
  isPercent: false,
  measures: [],
};
const internationalSupportIndicator = {
    key: 'internationalSupport',
    name: 'International Support',
    color: 'rgb(171, 108, 183)',
    value: 0,
    formatValue: (value) => formatSignedPercent(value),
    isPercent: false,
    measures: [],
  };
  


export const defaultIndicators = [
    confirmedCasesIndicator,
    humandevelopmentindex,
    confirmedDeathIndicator,
    vaccineInvestmentIndicator,
    stringencyIndicator,
    emergencyHealthcareInvestmentIndicator,
    lifeexpectancyIndicator,
    cumulativedeceasedIndicator,
    comorbiditymortalityrate,
    cumulativerecovered,
    gdppercapitausd,
    
    
    
]