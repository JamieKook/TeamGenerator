const Manager = require( "./lib/Manager");
const Engineer = require( "./lib/Engineer"); 
const Intern = require( "./lib/Intern"); 
const Html = require("./templates/team"); 
const cardHtml= require("./templates/card"); 
const Inquirer = require("inquirer");
const fs= require("fs"); 
 
const questionFilter= { "Manager": "office number",
                        "Engineer": "Github username",
                        "Intern": "school's name"}; 

let type= null; 
let htmlGathered= '';
let isDone=false;  

function validateAndCreateHtml(employee, specialParam){
    if (employee.isValid) {
        htmlData= cardHtml.generateCardHtml(employee.name, type, employee.id, employee.email, specialParam); 
        htmlGathered += htmlData;
        console.log("Data saved."); 
    } else {
        console.log("Data not generated for this employee. Please re-enter the information."); 
    }
}

function generateMemberData(){
    let typeQuestion= questionFilter[type]; 
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
            ]); 
}


function createObjectandHtml(employee){
    specialParam= employee.github; 
    validateAndCreateHtml(employee, specialParam);
    return employee; 
}

function generateTeam(){
    Inquirer.prompt([
        {
            type: "list",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I have finished adding my team"],
            name: "memberType"
        }
        ])
        .then (function(response){
            type= response.memberType;
            if (type !== "I have finished adding my team"){
                return generateMemberData(type); 
            } else {
                console.log("\n\nThank you for entering your team information \n\n Your summary will be generated shortly."); 
                const completeHtml= Html.templateHtml(htmlGathered); 
                isDone= true; 
                return completeHtml; 
            }
        })
        .then(function(data){
            if (!isDone) {
                let employee= null;   
                let htmlData= null; 
                let specialParam= null; 
                switch(type) {
                    case "Engineer": 
                         employee = new Engineer(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
                        createObjectandHtml(employee); 
                        break; 
                    case "Intern": 
                        employee = new Intern (data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
                        createObjectandHtml(employee); 
                        break; 
                    default: 
                        console.log("Something went wrong"); 
                        break; 
                }
                generateTeam(); 
            } else {
                fs.writeFile("./output/teamsummary.html", data, (err) =>{
                    if (err) {
                        console.log(err); 
                    } else {
                        console.log("The file has been saved!"); 
                    }
                });``
            }
        });
    }

function askUserInput(){
    if (type= null){
        console.log("\n\nWelcome to the Team Summary Developer. \n\n To build your team, please answer the following questions: "); 
    }
    type= "Manager";
    generateMemberData(type).then(function(data){
        let htmlData= null; 
        let specialParam= null; 
        employee = new Manager (data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
        employee= createObjectandHtml(employee); 
        if (!employee.isValid){
           askUserInput();  
        } else {
            generateTeam(); 
        }
    }) 
}

askUserInput(); 