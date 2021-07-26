import cubejs from '@cubejs-client/core'
import moment from 'moment'

const cubejsApi = cubejs(
    process.env.REACT_APP_CUBEJS_TOKEN,
    { apiUrl: `${process.env.REACT_APP_API_URL}/cubejs-api/v1` }
);

const countriesQuery = {
    dimensions: [ 'Mobility.country' ]
}

export function loadCountries(callback) {
    cubejsApi
        .load(countriesQuery)
        .then(result => {
            const countries = result
                .tablePivot()
                .map(row => row['Mobility.country'])

            callback(countries)
        })
}

function createMobilityDataQuery(country) {
    return {
        "dimensions": [
            "Mobility.country"
        ],
        "timeDimensions": [
            {
                "dimension": "Mobility.date",
                "granularity": "day",
                "dateRange": [ '2020-01-01', moment().subtract(4, 'day').format('YYYY-MM-DD') ],
            }
        ],
        "measures": [
            "Measures.confirmed_cases",
            "Measures.deaths",
            "Measures.internationalSupport",
            "Measures.maxStringencyIndex",
            "Mobility.vaccineInvestment",
            "Mobility.emergencyHealthcareInvestment",
            "Mobility.cumulative_deceased",
            "Mobility.human_development_index",
            "Mobility.life_expectancy",
            "Mobility.comorbidity_mortality_rate",
            "Mobility.gdp_per_capita_usd",
            "Mobility.cumulative_recovered",
            
        ],
        "order": {
            "Mobility.date": "asc"
        },
        "filters": [
            {
                "dimension": "Mobility.country",
                "operator": "equals",
                "values": [ country ]
            }
        ],
        limit: 50000
    }
}

export function loadMobilityData(country, callback) {
    cubejsApi
        .load(createMobilityDataQuery(country))
        .then(result => {

            const data = result
                .chartPivot()
                .map(row => ({
                    x: row['x'],
                    mobility: {
                        confirmedCases: row[`${country}, Measures.confirmed_cases`],
                        deaths: row[`${country}, Measures.deaths`],
                        vaccineInvestment: row[`${country}, Mobility.vaccineInvestment`],
                        maxStringencyIndex: row[`${country}, Measures.maxStringencyIndex`],
                        emergencyHealthcareInvestment: row[`${country}, Mobility.emergencyHealthcareInvestment`],
                        cumulative_deceased: row[`${country}, Mobility.cumulative_deceased`],
                        human_development_index: row[`${country}, Mobility.human_development_index`],
                        life_expectancy: row[`${country}, Mobility.life_expectancy`],
                        gdp_per_capita_usd: row[`${country}, Mobility.gdp_per_capita_usd`],
                        comorbidity_mortality_rate: row[`${country}, Mobility.comorbidity_mortality_rate`],
                        cumulative_recovered: row[`${country}, Mobility.cumulative_recovered`],
                        internationalSupport: row[`${country}, Measures.internationalSupport`]
                    },
                    measures: {
                        schoolClosing: row[`${country}, Measures.schoolClosing`],
                        workplaceClosing: row[`${country}, Measures.workplaceClosing`],
                        restrictionsOnGatherings: row[`${country}, Measures.restrictionsOnGatherings`],
                        closePublicTransit: row[`${country}, Measures.closePublicTransit`],
                        stayAtHomeRequirements: row[`${country}, Measures.stayAtHomeRequirements`],
                        restrictionsOnInternalMovement: row[`${country}, Measures.restrictionsOnInternalMovement`]
                    }
                }))

            if (data.length > 0) {
                callback(data)
            }
        })
}