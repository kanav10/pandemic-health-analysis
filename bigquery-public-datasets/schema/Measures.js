 
cube(`Measures`, {
  sql: `
    SELECT *
    FROM \`bigquery-public-data.world_bank_health_population.health_nutrition_population\`
  `,

  refreshKey: {
    sql: `
      SELECT COUNT(*)
      FROM \`bigquery-public-data.world_bank_health_population.health_nutrition_population\`
    `,
  },

  measures: {
      value: {
      sql: `value`,
      type: `max`,
      format: 'percent',
    }, 
  },

  dimensions: {
    key: {
      sql: `CONCAT(country_region, '-', sub_region_1, '-', sub_region_2, '-', ${Mobility}.date)`,
      type: `string`,
      primaryKey: true
    },

    country_name: {
      sql: `country_name`,
      type: `string`
    },

    country_code: {
      sql: `country_code`,
      type: `string`
    },

    indicator_name: {
      sql: `indicator_name`,
      type: `string`
    },

    indicator_code: {
      sql: `indicator_code`,
      type: `string`
    },

    year: {
      sql: `year`,
      type: `string`
    },
  },
});
