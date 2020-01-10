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

// async function makeEmployeeObjects(data){
//     try{
//         let employee= null;   
//         let htmlData= null; 
//         switch(type) {
//             case "Manager": 
//                 employee = new Manager(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
//                 htmlData= cardHtml.generateCardHtml(employee.name, type, employee.id, employee.email, employee.officeNumber); 
//                 break; 
//             case "Engineer": 
//                 employee = new Engineer(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
//                 htmlData= cardHtml.generateCardHtml(employee.name, type, employee.id, employee.email, employee.github); 
//                 break; 
//             case "Intern": 
//                 employee = new Intern(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
//                 htmlData= cardHtml.generateCardHtml(employee.name, type, employee.id, employee.email, employee.school); 
//                 break; 
//             default: 
//                 console.log("Something went wrong"); 
//                 break; 
//         }
        
//     } catch (err) {
//         console.log(err); 
        
//     } finally (err) {
//         if (err){
//             console.log("Please re-enter this employee. Data was not saved.");
//         } else {
//             htmlGathered += htmlData;
//             console.log(htmlGathered); 
//             console.log("Data saved."); 
//         }
//         askUserInput(); 
//     }
// }

function validateAndCreateHtml(employee, specialParam){
    if (employee.isValid) {
        htmlData= cardHtml.generateCardHtml(employee.name, type, employee.id, employee.email, specialParam); 
        htmlGathered += htmlData;
        console.log("Data saved."); 
    } else {
        console.log("Data not generated for this employee. Please re-enter the information."); 
    }
}

// async function generateManager(){
//     try {
//         type= "Manager";
//         let typeQuestion= questionFilter[type]; 
//         const data = await Inquirer.prompt([
//             {
//                 type: "input",
//                 message: `What is the name of your ${type}?`,
//                 name: `Name`
//             },
//             {
//                 type: "input",
//                 message: `What is the id of this ${type}?`,
//                 name: `Id`
//             },
//             {
//                 type: "input",
//                 message: `What is the email of this ${type}?`,
//                 name: `Email`
//             },
//             {
//                 type: "input",
//                 message: `What is the ${typeQuestion} of this ${type}?`,
//                 name: `Special`
//             }
//             ]); 
    
//         employee = new Manager(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
//         specialParam= employee.officeNumber; 
//         validateAndCreateHtml(employee, specialParam);

//     } catch (err){
//         console.log(err); 
//     } 
// }

function generateTeam(){
    Inquirer.prompt([
        {
            type: "list",
            message: "What type of team member would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "I have finished adding my team"],
            name: "memberType"
        }
        ])
        .then (function(response){
            if (type !== "I have finished adding my team"){
                type= response.memberType; 
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
            } else {
                console.log("\n\nThank you for entering your team information \n\n Your summary will be generated shortly."); 
                const completeHtml= Html.templateHtml(htmlGathered); 
                isDone= true; 
                return completeHtml; 
            }
        })
        .then(function(data){
            if (!isDone) {
                // makeEmployeeObjects(data); 
                let employee= null;   
                let htmlData= null; 
                let specialParam= null; 
                // let isValid=true;  
                // if (data.name === undefined || data.name.trim()=== ""){
                //     console.log("You must enter an employee name!"); 
                //     isValid=false; 
                // }
                switch(type) {
                    case "Manager": 
                        employee = new Manager(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
                        specialParam= employee.officeNumber; 
                        validateAndCreateHtml(employee, specialParam);
                        break; 
                    case "Engineer": 
                        employee = new Engineer(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
                        specialParam= employee.github; 
                        validateAndCreateHtml(employee, specialParam);
                        break; 
                    case "Intern": 
                        employee = new Intern(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
                        specialParam= employee.school; 
                        validateAndCreateHtml(employee, specialParam);
                        break; 
                    default: 
                        console.log("Something went wrong"); 
                        break; 
                }
                askUserInput(); 
            } else {
                fs.writeFile("./output/teamsummary.html", data, (err) =>{
                    if (err) {
                        console.log(err); 
                    } else {
                        console.log("The file has been saved!"); 
                    }
                });
            }
        });
    }



function askUserInput(){
    if (type= null){
        console.log("\n\nWelcome to the Team Summary Developer. \n\n To build your team, please answer the following questions: "); 
    }
    // generateManager(); 
        type= "Manager";
        let typeQuestion= questionFilter[type]; 
        Inquirer
            .prompt([
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
            ]).then(function(data){
                let employee= null;   
                let htmlData= null; 
                let specialParam= null; 
                employee = new Manager(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
                specialParam= employee.officeNumber; 
                validateAndCreateHtml(employee, specialParam);
                console.log(!employee.isValid); 
                if (!employee.isValid){
                    return ("restart"); 
                } else {
                    return  Inquirer.prompt([
                        {
                            type: "list",
                            message: "What type of team member would you like to add?",
                            choices: ["Manager", "Engineer", "Intern", "I have finished adding my team"],
                            name: "memberType"
                        }
                        ]);
                }
            })
            .then(function(response){
                type= response.memberType; 
                let typeQuestion= questionFilter[type];  
                if (response === "restart"){
                    return "restart"; 
                } else if (type !== "I have finished adding my team"){
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
                } else {
                    console.log("\n\nThank you for entering your team information \n\n Your summary will be generated shortly."); 
                    const completeHtml= Html.templateHtml(htmlGathered); 
                    isDone= true; 
                    return completeHtml; 
                }
            })
            .then(function(data){
                if (data= "restart"){
                    askUserInput()
                } else if (!isDone) {
                    // makeEmployeeObjects(data); 
                    let employee= null;   
                    let htmlData= null; 
                    let specialParam= null; 
                    // let isValid=true;  
                    // if (data.name === undefined || data.name.trim()=== ""){
                    //     console.log("You must enter an employee name!"); 
                    //     isValid=false; 
                    // }
                    switch(type) {
                        case "Manager": 
                            employee = new Manager(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
                            specialParam= employee.officeNumber; 
                            validateAndCreateHtml(employee, specialParam);
                            break; 
                        case "Engineer": 
                            employee = new Engineer(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
                            specialParam= employee.github; 
                            validateAndCreateHtml(employee, specialParam);
                            break; 
                        case "Intern": 
                            employee = new Intern(data.Name.trim(), data.Id.trim(), data.Email.trim(), data.Special.trim()); 
                            specialParam= employee.school; 
                            validateAndCreateHtml(employee, specialParam);
                            break; 
                        default: 
                            console.log("Something went wrong"); 
                            break; 
                    }
                    askUserInput(); 
                } else {
                    fs.writeFile("./output/teamsummary.html", data, (err) =>{
                        if (err) {
                            console.log(err); 
                        } else {
                            console.log("The file has been saved!"); 
                        }
                    });
                }
            });
}

askUserInput(); 