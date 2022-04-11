let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num){
        this.meetings = this.meetings + num
    },

    updateMeetDone: function(num){
        this.meetings = this.meetings - num
    },

    reset: function(){
        this.meetings = 0
    },

    display: function(){
        return `You have ${this.meetings} meetings today`
    },
}

myTodos.addMeeting(3)
console.log(myTodos.display())
myTodos.updateMeetDone(1)
console.log(myTodos.display())
myTodos.reset()
console.log(myTodos.display())
