var express = require('express');
var router = express.Router();
var mysql = require('./../tool/mysql');
var url = require('url');
var fs = require('fs');
var multer = require('multer');//中间件
// var uploadSubject = multer({dest:'pcuploads/subject'});


//查询主题==============================
// router.get("/",(req,res,next)=>{
//     mysql.connect((db)=>{
//         mysql.find(db,"subject",{},{},(result)=>{

            
//             res.render("subject/subject",{title:"主题活动",activeIndex:6,result:result})
//             db.close()
//         })
//     })
// })

//=========================增加主题
// router.get("/addServicePrice",(req,res,next)=>{
//     res.render("subject/addSubject",{title:"增加活动",activeIndex:6})
// })


//================================增加主题
// router.post('/addServicePriceAction',uploadSubject.single('subjectImg'), function(req, res, next) {
//     var obj = req.body;
//     // console.log(obj);
//     var subjectID = obj.subjectID;
//     var filename = req.file.filename;
//     var type = req.file.mimetype.split('/')[1];//图片类型
//     var subjectImg = "http://localhost:4000/subject/" + filename+"."+type;//图片路径
//     obj.subjectImg = subjectImg
//     mysql.connect((db)=>{
//         mysql.find(db,"subject",{subjectID:subjectID},{},(resultAll)=>{
//             if(resultAll.length ==0){
                
//                 fs.rename('pcuploads/subject/'+filename,'pcuploads/subject/'+filename+'.'+type,(err,result)=>{
//                     if(err) throw  err;
//                     mysql.insert(db,'subject',obj,(result)=>{
//                         // res.redirect('/banner?limitNum=4&pageCode=0');
//                         res.send('<script>alert("添加成功");window.location.href="/subject"</script>')
//                         db.close();
//                     })
//                 })
//             }else{
//                 res.send('<script>alert("添加失败,ID已经存在");window.location.href="/subject"</script>')
//                         db.close();
//             }
//         })
       
//     })
// });
//=======================删除主题
// router.get('/deleteServicePrice', function(req, res, next) {
  
//     var subjectID = url.parse(req.url,true).query.subjectID;
//     mysql.connect((db)=>{
//         var deleteObj = {
//             subjectID:subjectID
//         }

//         mysql.find(db, "servicePrice", deleteObj, {}, (resultAll) => {
//             mysql.deleteOne(db, "servicePrice", deleteObj, (result) => {
//               db.close()
//               res.redirect('/servicePrice');
//               var str = resultAll[0].subjectImg.split("/")[4]
        
//               fs.unlink("pcuploads/servicePrice/" + str, (err) => {
//                   console.log(str)
//                 if (err) throw err
      
//               })
//             })
      
//           })
      
//     })
// });


//==========================更新主题
// router.get("/updateServicePrice",(req,res,next)=>{
//     var subjectID = url.parse(req.url,true).query.subjectID
//     mysql.connect((db)=>{
//         mysql.find(db,"servicePrice",{subjectID:subjectID},{},(result)=>{

            
//             res.render("servicePrice/updateServicePrice",{title:"主题变更",activeIndex:6,result:result})
//             db.close()
//         })
//     })
// })
//==============================更新主题
// router.post('/updateSubjectAction',uploadSubject.single('servicePriceImg'), function(req, res, next) {
//     var obj = req.body;
//     // console.log(obj);
//     var subjectID = obj.subjectID
//     var filename = req.file.filename;
//     var type = req.file.mimetype.split('/')[1];//图片类型
//     var subjectImg = "http://localhost:4000/servicePrice/" + filename+"."+type;//图片路径
//     obj.subjectImg = subjectImg
//     mysql.connect((db)=>{
//         var whereObj = {
//             subjectID:subjectID,
          
//         };
       
//         mysql.find(db, "servicePrice", whereObj, {}, (resultAll) => {
//             var str = resultAll[0].subjectImg.split("/")[4]
//             mysql.updateOne(db, "servicePrice", whereObj, obj, (result) => {
      
//               fs.rename("pcuploads/servicePrice/" + req.file.filename, "pcuploads/servicePrice/" + req.file.filename + "." + type, (err) => {
//                 if (err) throw err
//                 db.close()
//                 res.send('<script>alert("修改成功");window.location.href="/servicePrice"</script>')
//               })
//               fs.unlink("pcuploads/servicePrice/" + str, (err) => {
//                 if (err) throw err
                    
//               })
            
      
//             })
//           })
        
       
//     })
// });
//接口
router.get("/servicePriceApi",(req,res,next)=>{
    var serviceType =  url.parse(req.url,true).query.serviceType;
    var queryObj = {
        serviceType:serviceType
    }
    mysql.connect((db)=>{
        mysql.find(db,"servicePrice",queryObj,{_id:0},(result)=>{         
            res.send(result)
            db.close()
        })
    })
})
module.exports = router;
