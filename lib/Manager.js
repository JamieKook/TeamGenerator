const Employee= require("./Employee"); 

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // if (!officeNumber) {
        //     throw new Error("You must input an office number.");
        // }
        super(name, id, email, "Manager"); 
        this.officeNumber= officeNumber; 
        if (isNaN(this.officeNumber)){
            this.isValid= false; 
            console.log("You can only use numbers in the office number "); 
        } else if (this.officeNumber === undefined || this.officeNumber === ""){
            console.log("You must enter an office number!"); 
            this.isValid=false; 
        }
    }

    getOfficeNumber(){
        return this.officeNumber; 
    }
}

module.exports= Manager; 