const Manager = require( "./lib/Manager");
const Engineer = require( "./lib/Engineer"); 
const Intern = require( "./lib/Intern"); 
const Html = require("./templates/team"); 
const cardHtml= require("./templates/card"); 
const Inquirer = require("inquirer");
 

const questionFilter= { "Manager": "office number",
                        "Engineer": "Github username",
                        "Intern": "school's name"}; 

let type= null; 

function askUserInput(){
    if (type= null){
        console.log("\n\nWelcome to the Team Summary Developer. \n\n To build your team, please answer the following questions: "); 
    }
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
            // console.log(response); 
            type= response.memberType; 
            let typeQuestion= questionFilter[type];  
            if (type !== "I have finished adding my team"){
                return Inquirer.prompt([
                    {
                        type: "input",
                        message: `What is the name of your ${type}?`,
                        name: `Name`
                    },
                    {
                        type: "input",
                        message: `What is the id of this ${type}?`,
                        name: `Id`
                    },
                    {
                        type: "input",
                        message: `What is the email of this ${type}?`,
                        name: `Email`
                    },
                    {
                        type: "input",
                        message: `What is the ${typeQuestion} of this ${type}?`,
                        name: `Special`
                    }
                ])
            } else {
                console.log("\n\nThank you for entering your team information \n\n Your summary will be generated shortly."); 
                return "done"
            }
        })
        .then(function(data){
            if (data !== "done"){
                // let employee= type + data[type+"Name"];
                // console.log(employee);
                let employee= null;   
                let htmlData= null; 
                switch(type) {
                    case "Manager": 
                        employee = new Manager(data.Name, data.Id, data.Email, data.Special); 
                        htmlData= cardHtml.generateCardHtml(employee.name, type, employee.id, employee.email, employee.officeNumber); 
                        break; 
                    case "Engineer": 
                        employee = new Engineer(data.Name, data.Id, data.Email, data.Special); 
                        htmlData= cardHtml.generateCardHtml(employee.name, type, employee.id, employee.email, employee.github); 
                        break; 
                    case "Intern": 
                        employee = new Intern(data.Name, data.Id, data.Email, data.Special); 
                        htmlData= cardHtml.generateCardHtml(employee.name, type, employee.id, employee.email, employee.school); 
                        break; 
                    default: 
                        console.log("Something went wrong"); 
                        break; 
                }
                console.log(htmlData); 
                askUserInput();
            }
        })
}

askUserInput(); 