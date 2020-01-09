// import Manager from "./lib/Manager";
// import Engineer from "./lib/Engineer"; 
// import Intern from "./lib/Intern"; 
const Inquirer = require("inquirer"); 

const questionFilter= { "Manager": "office number",
                        "Engineer": "Github username",
                        "Intern": "school"}; 

const questionKey=  { "Manager": "officeNumber",
                        "Engineer": "github",
                        "Intern": "school"};

let type= null; 

function askUserInput(){
    console.log("\n\nWelcome to the Team Summary Developer. \n\n To build your team, please answer the following questions: "); 
    Inquirer
        .prompt([
         {
            type: "list",
            message: "What type of team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "I have finished adding my team"],
            name: "memberType"
         }
        ])
        .then(function(response){
            console.log(response); 
            type= response.memberType; 
            let typeQuestion= questionFilter[type]; 
            let typeKey= questionKey[type]; 
            if (type !== "I have finished adding my team"){
                return Inquirer.prompt([
                    {
                        type: "input",
                        message: `What is the name of your ${type}?`,
                        name: `${type}Name`
                    },
                    {
                        type: "input",
                        message: `What is the id of this ${type}?`,
                        name: `${type}Id`
                    },
                    {
                        type: "input",
                        message: `What is the email of this ${type}?`,
                        name: `${type}Email`
                    },
                    {
                        type: "input",
                        message: `What is the ${typeQuestion} of this ${type}?`,
                        name: `${type}${typeKey}`
                    }
                ])
            } else {
                return ("Thank you for entering your team information \n\n Your summary will be generated shortly."); 
                
            }
        })
        .then(function(data){
            if (data !== "Thank you for entering your team information \n\n Your summary will be generated shortly."){
                let employee= type + data[type+"Name"];
                console.log(employee); 
                // switch(type) {
                //     case "Manager": 
                //         const 
                // }
            }
        })
}

askUserInput(); 