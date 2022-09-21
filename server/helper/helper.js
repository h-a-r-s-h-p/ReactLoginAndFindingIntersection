
module.exports.VerifyPassword = function (data, clientdata){
    if(data.password===clientdata.password){
        return true;
    }
    else return false
}