class User{
    constructor(firstName, lastName, credit){
        this.firstName = firstName
        this.lastName = lastName
        this.credit = credit
    }
    getFullName(){
        return `${this.firstName} ${this.lastName} has credit ${this.credit}`
    }
    editName(newname){
        let myName = newname.split(' ')
        this.firstName = myName[0]
        this.lastName = myName[1]
    }
}

let john =  new User('Johhny','Depth',32)
console.log(john.getFullName())

john.editName('John Depth')
console.log(john.getFullName())
