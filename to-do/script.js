const searchBox = document.querySelector('#searchBox'),
// deleteBtn = document.querySelector('.delete'),
newTaskInput = document.querySelector('#newTask'),
list = document.querySelector('.main ul')
addBtn = document.querySelector('#addBtn')
// add a task
addBtn.addEventListener('click', (e) => {
    newTask = newTaskInput.value
    if (newTask.length === 0){
        newTask = ''
        console.log('please enter a task')
    }
    console.log(newTask)
    // create our HTML elements
    let newLi = document.createElement('li')
    let newP = document.createElement('p')
    let newBtn = document.createElement('button')
    // enter appropriate content
    newP.innerText = newTask
    newBtn.innerText = 'delete'
    // create appropriate classes/ID
    newP.classList.add('task')
    newBtn.classList.add('delete')
    // Put all together
    newLi.append(newP, newBtn)
    // add to DOM
    list.append(newLi)
    // Clear the input
    newTaskInput.value = ''

})
// remove a task
list.addEventListener('click', (e) => {
    if(e.target.classList[0] === 'delete'){
        e.target.parentElement.remove()
    }
})
// search a task
searchBox.addEventListener('keyup', (e) => {
    let testStr = searchBox.value.toLowerCase()
    Array.from(list.children).forEach((li) => {
        if(!li.children[0].textContent.toLowerCase().includes(testStr)){
            li.style.display ='none'
        } else{
            li.style.display ='block'
        }
    })

})