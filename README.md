
# A Comparison Analysis of COVID-19 on Countries with weak and robust health care systems based on past epidemic experience.

When we talk about healthcare, people living in developed countries enjoy more facilities than the
rest of the world. We know that death due to infections and poverty related diseases are uncommon
in developed countries and common disease noticed is mainly “diseases of affluence”. But recently,
COVID-19 which is an infectious disease is experienced everywhere in the world. Countries with the
best health care systems also had to deal with it.

This project focuses on understanding, how countries without good health care systems and a history of continuously
experiencing infectious diseases (epidemics) are doing compared to the developed countries with the
best health care system based on multiple key indicating factors such as, the Human Development
Index(HDI), mortality rates , healthcare expenditure etc.

Datasets used in the project:

1.“Health Nutrition Population”: This dataset combines key health statistics from a variety of sources
to provide a look at global health and population trends.

2.“Covid19 Open Data”: This dataset contains the
largest COVID-19 epidemiological database
available in addition to a powerful set of expansive covariates.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file and 
replace `xxxxx` with the google big query project id or contact any one of the authors for help 
regarding project setup. 

`CUBEJS_DB_BQ_PROJECT_ID=xxxxx`

`CUBEJS_DB_BQ_KEY_FILE=xxxxx`

`CUBEJS_DEV_MODE=true`

`CUBEJS_DB_TYPE=bigquery`

`CUBEJS_API_SECRET=xxxxx`

`CUBEJS_EXTERNAL_DEFAULT=true`

`CUBEJS_SCHEDULED_REFRESH_DEFAULT=true`


## Run Locally

Clone the project

```bash
  git clone https://github.com/kanav10/pandemic-health-analysis 
```

Go to the project directory

```bash
  cd my-project
```

```bash
  cd bigquery-public-datasets
```


Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

  
## Authors

- [@Kanav Malik](https://github.com/kanav10)
- [@Ahmed Rashique](https://github.com/rush17)
- [@Rayan Selim](https://github.com/rayanselim)

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
