var express = require('express');
var router = express.Router();
var mysql = require('./../tool/mysql');
var url = require('url');
var fs = require('fs');
var multer = require('multer');//中间件
var uploadDetail = multer({dest:'pcuploads/detail'});
var async = require('async');

//查询主题详情==============================
router.get("/",(req,res,next)=>{
    mysql.connect((db)=>{
        mysql.find(db,"detail",{},{},(result)=>{

            
            res.render("detail/detail",{title:"详情",activeIndex:7,result:result})
            db.close()
        })
    })
  //  res.render("detail/detail",{title:"详情",activeIndex:7})
})

//=========================增加主题详情
router.get("/addDetail",(req,res,next)=>{
    res.render("detail/addDetail",{title:"增加详情",activeIndex:7})
})


//================================增加主题

router.post("/addDetailAction", uploadDetail.array('subjectImg'), (req, res, next) => {
    //console.log(req.files)
    var obj = req.body
    //var img = {}
    var img = []
    var option = []

    for (let i = 0; i < req.files.length; i++) {
        option[i] = function (cb) {
            var type = req.files[i].mimetype.split("/")[1]
            fs.rename("pcuploads/detail/" + req.files[i].filename, "pcuploads/detail/" + req.files[i].filename + "." + type, (err) => {
                if (err) throw err
                img[i] = "http://localhost:4000/detail/" + req.files[i].filename + "." + type
               // img["goodsImg" + i] = "http://localhost:3000/goods/" + req.files[i].filename + "." + type
                cb(null,obj)
            })
        }
    }
    async.parallel(option,(err,data)=>{
       // console.log(data)
      //  console.log("-----------------------------")
      
        obj.img = img
      //  console.log(obj)
        mysql.connect((db)=>{
            mysql.insert(db,"detail",obj,(result)=>{
                db.close()
                res.redirect("/detail")
            })
        })
    })
  
})

router.get('/subjectdetail', function(req, res, next) {
    var subjectID = url.parse(req.url,true).query.subjectID;
    
    mysql.connect((db)=>{
        var queryObj = {
            subjectID:subjectID
        };
        console.log(queryObj,"------------")
        var showObj = {};
        mysql.find(db,'detail',queryObj,showObj,(result)=>{
           res.send(result);
            // res.render('updateAddress',obj);
            db.close();
        })
    })
});

/* router.post('/addSubjectAction',uploadSubject.single('subjectImg'), function(req, res, next) {
    var obj = req.body;
    // console.log(obj);
    var subjectID = obj.subjectID;
    var filename = req.file.filename;
    var type = req.file.mimetype.split('/')[1];//图片类型
    var subjectImg = "http://localhost:4000/subject/" + filename+"."+type;//图片路径
    obj.subjectImg = subjectImg
    mysql.connect((db)=>{
        mysql.find(db,"subject",{subjectID:subjectID},{},(resultAll)=>{
            if(resultAll.length ==0){
                
                fs.rename('pcuploads/subject/'+filename,'pcuploads/subject/'+filename+'.'+type,(err,result)=>{
                    if(err) throw  err;
                    mysql.insert(db,'subject',obj,(result)=>{
                        // res.redirect('/banner?limitNum=4&pageCode=0');
                        res.send('<script>alert("添加成功");window.location.href="/subject"</script>')
                        db.close();
                    })
                })
            }else{
                res.send('<script>alert("添加失败,ID已经存在");window.location.href="/subject"</script>')
                        db.close();
            }
        })
       
    })
}); */
//=======================删除主题
/* router.get('/deleteSubject', function(req, res, next) {
  
    var subjectID = url.parse(req.url,true).query.subjectID;
    mysql.connect((db)=>{
        var deleteObj = {
            subjectID:subjectID
        }

        mysql.find(db, "subject", deleteObj, {}, (resultAll) => {
            mysql.deleteOne(db, "subject", deleteObj, (result) => {
              db.close()
              res.redirect('/subject');
              var str = resultAll[0].subjectImg.split("/")[4]
        
              fs.unlink("pcuploads/subject/" + str, (err) => {
                  console.log(str)
                if (err) throw err
      
              })
            })
      
          })
      
    })
});
 */

//==========================更新主题
/* router.get("/updateSubject",(req,res,next)=>{
    var subjectID = url.parse(req.url,true).query.subjectID
    mysql.connect((db)=>{
        mysql.find(db,"subject",{subjectID:subjectID},{},(result)=>{

            
            res.render("subject/updateSubject",{title:"主题变更",activeIndex:6,result:result})
            db.close()
        })
    })
}) */
//==============================更新主题
/* router.post('/updateSubjectAction',uploadSubject.single('subjectImg'), function(req, res, next) {
    var obj = req.body;
    // console.log(obj);
    var subjectID = obj.subjectID
    var filename = req.file.filename;
    var type = req.file.mimetype.split('/')[1];//图片类型
    var subjectImg = "http://localhost:4000/subject/" + filename+"."+type;//图片路径
    obj.subjectImg = subjectImg
    mysql.connect((db)=>{
        var whereObj = {
            subjectID:subjectID,
          
        };
       
        mysql.find(db, "subject", whereObj, {}, (resultAll) => {
            var str = resultAll[0].subjectImg.split("/")[4]
            mysql.updateOne(db, "subject", whereObj, obj, (result) => {
      
              fs.rename("pcuploads/subject/" + req.file.filename, "pcuploads/subject/" + req.file.filename + "." + type, (err) => {
                if (err) throw err
                db.close()
                res.send('<script>alert("修改成功");window.location.href="/subject"</script>')
              })
              fs.unlink("pcuploads/subject/" + str, (err) => {
                if (err) throw err
                    
              })
            
      
      
            })
          })
        
       
    })
}); */


//接口
/* router.get("/api",(req,res,next)=>{
    var subjectID = url.parse(req.url,true).query.subjectID;
    var subjectKind =  url.parse(req.url,true).query.subjectKind;
    if(subjectID){
        var queryObj = {
            subjectID:subjectID
        }
    }else if(subjectKind){
        var queryObj = {
            subjectKind:subjectKind
        }
    }else{
        var queryObj = {

        }
    }
    mysql.connect((db)=>{
        mysql.find(db,"subject",queryObj,{_id:0},(result)=>{         
            res.send(result)
            db.close()
        })
    })
}) */
module.exports = router;
