# Find total users and total unique users who viewed a product on daily/weekly/monthly/Custom date

## Setup 
```
$ git clone 
$ npm install 
```
## userView
Run file createUserView to insert 1000 records in userView collection
```
$ node createUserView
```

## Run
```
$ npm start
```
Hit the api `http://localhost:3000/getViewProductUser?startDate=2020-05-18&endDate=2020-07-18`
```