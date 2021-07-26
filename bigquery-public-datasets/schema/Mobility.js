cube(`Mobility`, {
  sql: `
      SELECT *
      FROM \`bigquery-public-data.covid19_open_data.covid19_open_data\`
    `,

  refreshKey: {
    sql: `
        SELECT COUNT(*)
        FROM \`bigquery-public-data.covid19_open_data.covid19_open_data\`
      `,
  },

  measures: {
    cumulative_deceased: {
      sql: `CAST(cumulative_deceased AS NUMERIC)`,
      type: `sum`,
    },

    population: {
      sql: `CAST(population AS NUMERIC)`,
      type: `max`,
      format: 'percent'
      
    },

    human_development_index: {
      sql: `CAST(human_development_index AS NUMERIC)`,
      type: `max`,
    },

    gdp_per_capita_usd: {
      sql: `gdp_per_capita_usd`,
      type: `max`,
    
    },

    health_expenditure_usd: {
      sql: `CAST(health_expenditure_usd AS NUMERIC)`,
      type: `max`,
    },

    comorbidity_mortality_rate: {
      sql: `CAST(comorbidity_mortality_rate AS NUMERIC)`,
      type: `max`,
    },

    life_expectancy: {
      sql: `CAST(life_expectancy AS NUMERIC)`,
      type: `max`,
    },

    cumulative_recovered: {
      sql: `CAST(cumulative_recovered AS NUMERIC)`,
      type: `max`,
      // format: 'percent'
    },
    //Check
    emergencyHealthcareInvestment: { 
        sql: `CAST(emergency_investment_in_healthcare AS NUMERIC)`,
        type: `sum`,
    },
  
    vaccineInvestment: { 
        sql: `CAST(investment_in_vaccines AS NUMERIC)`,
        type: `max`
    },

    cumulative_persons_vaccinated: {
        sql: `CAST(cumulative_persons_vaccinated AS NUMERIC)`,
        type: `max`
    }
    
  },

  dimensions: {
    key: {
      sql: `CONCAT(country_name, '-', ${Mobility}.date)`,
      type: `string`,
      primaryKey: true,
    },

    country: {
      sql: `country_name`,
      type: `string`,
    },
//Confusion
date: {
    sql: `TIMESTAMP(${Mobility}.date)`,
    type: `time`
  },
  },

  joins: {
    Measures: {
      sql: `${Measures}.country_name = ${Mobility}.country_name AND ${Measures}.date = ${Mobility}.date`,
      relationship: `hasOne`
    }
  }
});
