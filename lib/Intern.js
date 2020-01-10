const Employee = require("./Employee"); 

class Intern extends Employee{
    constructor(name, id, email, school){
        // if (!school) {
        //     throw new Error("You must input a school.");
        // }
        super(name, id, email, "Intern"); 
        this.school= school; 
        const alpha ="abcdefghijklmnopqrstuvwxyz";
        if (this.school === undefined || this.school === ""){
            console.log("You must enter an employee school!"); 
            this.isValid=false; 
        } else {
            for (const letter of this.school.toLowerCase()){
                if (alpha.indexOf(letter) === -1){
                    this.isValid=false; 
                }
            }
            if (!this.isValid){
                console.log("You can only use letters in the employee's school."); 
            }
        }
    }

    getSchool(){
        return this.school; 
    }
}

module.exports= Intern; 