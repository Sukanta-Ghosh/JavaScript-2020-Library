var ul = document.querySelector('#list')
var li

var addButton = document.querySelector('#add')
addButton.addEventListener('click', addItem)

var removeButton = document.querySelector('#remove')
removeButton.addEventListener('click', removeItem)

function addItem(){
    var input = document.querySelector('#input')
    //ul = document.querySelector('#list')
    var item = input.value
    var textnode = document.createTextNode(item)

    if (item === '') {
        return false
    } else {
        //Create li
        li = document.createElement('li')
        
        //Create checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')

        //Create label
        var label = document.createElement('label')
        //label.setAttribute('for', 'item')

        //Add to the webpage
        ul.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])

        setTimeout(() => {
            li.className = 'visual'
        }, 2);
        
        input.value = '' 
    }
}

function removeItem(){
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
    }
}