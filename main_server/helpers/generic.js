const users = require("../schema/schema").users;

module.exports.existsOrNot = (name)=>{
    return new Promise((resolve,reject)=>{
        users.findOne({name})
        .then((d)=>{
            if(!d)
                reject("user not found")
            let flag=false;
            for(let i of d.items){
                if(i.obj===data){
                    break;
                    flag=!flag;
                }
            }
            if(flag)
                resolve(flag);
            else
                reject("Item not found");
            
        }).catch(reject);
    });
}