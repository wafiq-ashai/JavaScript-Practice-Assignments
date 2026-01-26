let processDonation = function(donationData) {

    let donationObject = JSON.parse(donationData)

    donationObject.timestamp = new Date()           // adding date and time of processing to the object 

    donationObject.id = "d-1"                     // adding an id for demonstration purpose

    donationObject.amount = Number(donationObject.amount.toFixed(2))        //Rounding the amount to 2 decimal places

    return JSON.stringify(donationObject)

}




