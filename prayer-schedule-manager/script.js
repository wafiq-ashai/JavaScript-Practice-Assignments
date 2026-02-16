const prayerList = document.querySelector('#prayerList');
const addButton = document.querySelector('#addPrayer');

const prayers = [
    { name: 'Fajr', time: '5:30 AM', completed: false, id: 'fajr', isEditing: false},
    { name: 'Dhuhr', time: '1:30 PM', completed: false, id: 'dhuhr', isEditing: false }
];

const renderPrayers = function() {
    prayerList.textContent = ''
    prayers.forEach((prayer)=> {
        const prayerCard = document.createElement('div')
        if(!prayer.isEditing) {
        prayerCard.textContent = prayer.name + ':  ' + prayer.time}
        else{
            const inputName = document.createElement('input')
            const inputTime = document.createElement('input')
            inputName.value = prayer.name
            inputTime.value = prayer.time
            prayerCard.append(inputName, inputTime)
        }
        prayerCard.dataset.id = prayer.id
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.classList.add('delete-btn')
        const editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.classList.add('edit-btn')
        const saveButton = document.createElement('button')
        saveButton.textContent = 'Save'
        saveButton.classList.add('save-btn')
        if(!prayer.isEditing) {
            prayerCard.appendChild(editBtn)

        }
       
        if (prayer.completed) {
            prayerCard.classList.add('completed')
        }
        if(prayer.isEditing) {
            prayerCard.appendChild(saveButton)
            
        }
        prayerCard.appendChild(deleteBtn)
        prayerList.appendChild(prayerCard)
    })
}

renderPrayers()

prayerList.addEventListener('click', (e)=> {

        if(e.target.classList.contains('delete-btn')) {
        const parentCardId = e.target.parentElement.dataset.id
        for(let i = 0; i < prayers.length; i++) {
            if(prayers[i].id === parentCardId) {
                prayers.splice(i, 1)
                break
            }
        }
        renderPrayers()
        return
    }

    else if(e.target.classList.contains('edit-btn')) {
        prayers.forEach((prayer)=> {
            prayer.isEditing = false
        })
        const parentCardId = e.target.parentElement.dataset.id
        const current = prayers.find((prayer)=> parentCardId === prayer.id)
        current.isEditing = true
       renderPrayers()
        return
    }

    else if(e.target.classList.contains('save-btn')) {
        const parent = e.target.parentElement
        const inputs = parent.querySelectorAll('input')
        const parentCardId = parent.dataset.id
        const current = prayers.find((prayer)=> parentCardId === prayer.id )
        current.name = inputs[0].value
        current.time = inputs[1].value
        current.isEditing = false
        renderPrayers()


        return
        
    }

    const clickedId = e.target.dataset.id
    if(clickedId) {
        const currentPrayer = prayers.find((prayer) =>clickedId === prayer.id )
        currentPrayer.completed = !currentPrayer.completed
        renderPrayers()
    } 
    
})

    let autoId = 0

addButton.addEventListener('click', () => {
    const asr = {
        name: 'Asr', 
        time: '5:30 PM',
        completed: false,
        id: autoId.toString(),
        isEditing: false
    }
    prayers.push(asr)
    renderPrayers()
    autoId++

})