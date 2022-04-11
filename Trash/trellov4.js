 const myTodos = ['Buy Bread', 'Go to Gym', 'Coding']

 //console.log(myTodos.indexOf('Buy bread'))

 const newTodos = [{
     title: 'Buy Bread',
     isDone: false,
 }, {
     title: 'Go to Gym',
     isDone: false,
 }, {
     title: 'Coding',
     isDone: true,
 }]

 const index = newTodos.findIndex(function(todo){
     //console.log(todo)
     return todo.title === 'Coding'
 })

 //console.log(index)

 //Find todo by findIndex() method
 const findTodo = function(myTodo, title){
        const index = myTodo.findIndex(function(todo, arrayIndex){
            return todo.title.toLowerCase() === title.toLowerCase()
        })
        return myTodo[index]
 }

 let printMe = findTodo(newTodos,'Coding')
 //console.log(printMe)

 //Find todo by find() method
 const findTodos = function(myTodo, title){
     return listItem = myTodo.find(function(todo, arrayIndex){
         return todo.title.toLowerCase() === title.toLowerCase()
     })
 }

 console.log(findTodos(newTodos, 'Coding'))