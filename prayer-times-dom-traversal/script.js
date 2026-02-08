const updatePrayerStatuses = function(currentPrayerId) {
    const currentPrayer = document.getElementById(currentPrayerId)
    const mainCard = currentPrayer.parentElement
    const allPrayersCollection = mainCard.children
    const allPrayers = [...allPrayersCollection]
    const current = allPrayers.indexOf(currentPrayer)
    console.log(current);
    

    for(let i = 0; i < allPrayers.length; i++) {
        const currentStatusElement = allPrayers[i]
        const currentStatus = currentStatusElement.querySelector('.status')
        if(i === current) {
            currentStatus.textContent = 'current'   
        }
        else if(i < current) {
            currentStatus.textContent = 'completed'
        }
        else if(i === current + 1) {
            currentStatus.textContent = 'next'
        }
        else if(i > current + 1) {
            currentStatus.textContent = 'upcoming'
        }  

    }
    
}

//-------------Lets test the function-------------------------

// updatePrayerStatuses('dhuhr')

