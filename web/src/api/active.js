import myajax from "./../tool/myajax.js";

export default{
     goodslist(cb,activeID){
     var config={
           url:'http://localhost:4000/api/detail/activedetail?activeID='+activeID,
           options:{
         
           },
           success:(data)=>{
              cb(data)
           }
     }
     myajax.fetch(config)
    },
    active(cb){
      var config={
            url:'http://localhost:4000/api/detail/active',
            options:{
            },
            success:(data)=>{
               cb(data)
            }
      }
      myajax.fetch(config)
    }
}


