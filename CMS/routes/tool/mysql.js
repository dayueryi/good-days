var MongoClient = require('mongodb').MongoClient;
var mongo_url = 'mongodb://localhost:27017/goodday';
//定义模块
var mysql = {
    connect(cb){
        MongoClient.connect(mongo_url,(err,db)=>{
            if(err) throw err;
            cb(db);
        })
    },
    insert(db,collectionName,insertDate,cb){
        var collection = db.collection(collectionName);
        collection.insert(insertDate,(err,result)=>{
            if(err) throw err;
            cb(result);
        })
    },
    updateOne(db,collectionName,whereObj,updateObj,cb){
        var collection = db.collection(collectionName);
        collection.updateOne(whereObj,updateObj,(err,result)=>{
            if(err) throw err;
            cb(result);
        })
    },
    updateMany(db,collectionName,whereObj,updateObj,cb){
        var collection = db.collection(collectionName);
        collection.updateOne(whereObj,updateObj,(err,result)=>{
            if(err) throw err;
            cb(result);
        })
    },
    deleteOne(db,collectionName,deleteObj,cb){
        var collection = db.collection(collectionName);
        collection.deleteOne(deleteObj,(err,result)=>{
            if(err) throw err;
            cb(result);
        })
    },
    deleteMany(db,collectionName,deleteObj,cb){
        var collection = db.collection(collectionName);
        collection.deleteMany(deleteObj,(err,result)=>{
            if(err) throw err;
            cb(result);
        })
    },
    find(db,collectionName,queryObj,showObj,cb){
        var collection = db.collection(collectionName);
        collection.find(queryObj,showObj).toArray((err,result)=>{
            if(err) throw err;
            cb(result);
        });
    },
    findSort(db,collectionName,queryObj,showObj,sortObj,cb){
        var collection = db.collection(collectionName);
        collection.find(queryObj,showObj).sort(sortObj).toArray((err,result)=>{
            if(err) throw err;
            cb(result);
        });
    },
    findLimit(db,collectionName,queryObj,showObj,limitNum,cb){
        var collection = db.collection(collectionName);
        collection.find(queryObj,showObj).limit(limitNum).toArray((err,result)=>{
            if(err) throw err;
            cb(result);
        });
    },
    findSkip(db,collectionName,queryObj,showObj,skipNum,cb){
        var collection = db.collection(collectionName);
        collection.find(queryObj,showObj).skip(skipNum).toArray((err,result)=>{
            if(err) throw err;
            cb(result);
        });
    },
    findFenye(db,collectionName,queryObj,showObj,limitNum,skipNum,pageCode,cb){
        var collection = db.collection(collectionName);
        collection.find(queryObj,showObj).limit(limitNum).skip(skipNum).toArray((err,result)=>{
            if(err) throw err;
            cb(result);
        });
    },
    findFenyeSort(db,collectionName,queryObj,showObj,limitNum,skipNum,pageCode,sortObj,cb){
        var collection = db.collection(collectionName);
        collection.find(queryObj,showObj).limit(limitNum).skip(skipNum).sort(sortObj).toArray((err,result)=>{
            if(err) throw err;
            cb(result);
        });
    }

}
//暴露模块
module.exports = mysql;
