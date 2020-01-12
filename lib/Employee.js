class Employee {
    constructor(name, id, email, title){
        // if (!name) {
        //     console.log("You must input a name.");
        // }
        // if (!id) {
        // throw new Error("You must input an id.");
        // }
        // if (!email) {
        // throw new Error("You must input an email.");
        // }
        const alpha ="abcdefghijklmnopqrstuvwxyz ";

        this.name= name; 
        this.id = id; 
        this.email= email; 
        this.title= title; 
        this.isValid = true; 

        if (this.name === undefined || this.name === ""){
            console.log("You must enter an employee name!"); 
            this.isValid=false; 
        } else {
            for (const letter of this.name.toLowerCase()){
                if (alpha.indexOf(letter) === -1){
                    this.isValid=false; 
                }
            }
            if (!this.isValid){
                console.log("You can only use letters in the employee name."); 
            }
        }

        if (isNaN(this.id)){
            this.isValid= false; 
            console.log("You can only use numbers in the employee id. "); 
        } else if (this.id === undefined || this.id === ""){
            console.log("You must enter an employee id!"); 
            this.isValid=false; 
        }

        if (this.email === undefined || this.email === ""){
            console.log("You must enter an employee email!"); 
            this.isValid=false;
        } else if (this.email.indexOf("@")=== -1 || this.email.indexOf(".")=== -1 ) {
            console.log("You must enter an email address"); 
            this.isValid= false; 
        }

    }

    getName(){
        return this.name; 
    }

    getId(){
        return this.id; 
    }

    getEmail(){
        return this.email; 
    }

    getRole(){
        if (this.title === undefined){
            return "Employee"; 
        } else {
            return this.title; 
        }
        
    }
}

module.exports= Employee; 