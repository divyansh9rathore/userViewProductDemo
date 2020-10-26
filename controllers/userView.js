const UserView = require('../models/userView');

const userViewProduct= function(req,res){
    const startDate = req.query.startDate ? new Date(req.query.startDate) : new Date('0');
    const endDate = req.query.endDate ? new Date(req.query.endDate) : new Date();

    UserView.aggregate([
        { $match:{'viewDate': { $gte:startDate, $lt:endDate}} },
        {
            $group:{_id:'$productId',
                viewCount: {$sum:1},
                uniqueUsers: {$addToSet:"$userId"},
                users: {$push:"$userId"}}
        },
        {
            $addFields: {uniqueUserCount:{$size:'$uniqueUsers'}, totalUser:{$size:"$users"}}
        }
    ], function(err, userView){
        if(err) {
            console.log("An error occur while getting view product", err);
            return res.status(500).send(err);
        }
        res.status(200).send(userView);
    })
};

module.exports = userViewProduct;