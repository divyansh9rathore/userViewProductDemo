const UserView = require('./models/userView');
const DateGenerator = require('random-date-generator');
require("./config/db").db;

const insertedRec=[];
let startDate = new Date(2019, 2, 2);
let endDate = new Date();
for(let productId = 1; productId <= 1000; productId++){
    for(let userId = 1; userId <= 5; userId++){
        insertedRec.push({
                productId,
                viewDate: DateGenerator.getRandomDateInRange(startDate, endDate),
                userId
            })
    }
}

UserView.insertMany(insertedRec,function(err, data) {
    if(err) {
        console.log('error occurred');
    } else
        console.log('Records added');
    process.exit(0);
});

