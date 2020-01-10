const Employee= require("./Employee"); 

class Engineer extends Employee{
    constructor(name, id, email, github){
        // if (!github) {
        //     throw new Error("You must input a GitHub username.");
        // }
        super(name, id, email, "Engineer"); 
        this.github= github; 
        if (this.github === undefined || this.github === ""){
            console.log("You must enter an GitHub username!"); 
            this.isValid=false; 
        }
    }

    getGithub(){
        return this.github; 
    }
}

module.exports= Engineer; 