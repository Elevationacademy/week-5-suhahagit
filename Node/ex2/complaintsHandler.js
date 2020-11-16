
const constsObj = require('./consts')

const handleComplaints = function(complaint){
    if(complaint.type === constsObj.finance){
        console.log("Money doesn't grow on trees, you know.")
    }
    if(complaint.type === constsObj.weather){
        console.log("It is the way of nature. Not much to be done.")
    }
    if(complaint.type === constsObj.emotions){
        console.log("It'll pass, as all things do, with time.")        
    }
}

module.exports.handleComplaints = handleComplaints