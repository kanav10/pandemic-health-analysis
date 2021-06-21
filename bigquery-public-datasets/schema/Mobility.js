 
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
      sql: `cumulative_deceased`,
      type: `number`,
    },

    population: {
      sql: `population`,
      type: `number`,
    },

    human_development_index: {
      sql: `human_development_index`,
      type: `number`,
    },

    gdp_per_capita_usd: {
      sql: `gdp_per_capita_usd`,
      type: `number`,
    },

    health_expenditure_usd: {
      sql: `health_expenditure_usd`,
      type: `number`,
    },

    comorbidity_mortality_rate: {
      sql: `comorbidity_mortality_rate`,
      type: `number`,
    },

    life_expectancy: {
      sql: `life_expectancy`,
      type: `number`,
    },

    cumulative_recovered: {
      sql: `cumulative_recovered`,
      type: `number`,
    },

  },

  dimensions: {
    key: {
      sql: `CONCAT(country_region, '-', date)`,
      type: `string`,
      primaryKey: true
    },

    country_name: {
      sql: `country_name`,
      type: `string`
    },

    date: {
      sql: `date`,
      type: `time`
    },
  },

  joins: {
    Measures: {
      sql: `${Measures}.country_name = ${Mobility}.country_name`,
      relationship: `hasOne`
    }
  }
});
