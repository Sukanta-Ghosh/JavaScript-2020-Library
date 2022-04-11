let myTodo = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function(todo, meet = 0){
    myTodo.meetings = myTodo.meetings + meet
}

let meetDone = function(todo, meet = 0){
    myTodo.meetDone = myTodo.meetDone - meet
}

let getSummaryDay = function(todo){
    let meetLeft = myTodo.meetings + myTodo.meetDone
    return `Today ${meetLeft} meetings left.`
}

let resetDay = function(todo){
    myTodo.meetings = 0
    myTodo.meetDone = 0
}

addMeeting(myTodo, 6)

addMeeting(myTodo, 5)

meetDone(myTodo, 3)

console.log(getSummaryDay(myTodo))