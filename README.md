# Team Summary Generator
This Command line Interface application returns a html page displaying a information about each team member. 

![image of summary](TeamSumary.png)

## Installation

Clone folder onto your own computer by forking the repository and using the "Clone or download" button on github.

Install all npm modules using the command "npm install"

Run the program by calling node app.js from the commandline open in the root folder.

## Functionality 

### User Input on Command Line
A team summary will be generated from user input. Using the command line, the user will input key information about the team manager. The user then can add any number of engineers and/or interns and input information for each new employee. 

### Validation of Input
If the user does not met necessary requirements when inputting employee data, that employee's data is not saved and the user is prompted to re-enter the data in the correct format. 

### HTML Output
This application stores the information for each employee as an object, using the object constructors in the library javascript files, and then use the object to make individual html cards. Once all cards are generated, a single html document is written and saved in the output folder, displaying all of the employees information. 

### Code Testing
Jest is used to ensure the functionality of the different classes: Employee, Manager, Engineer, and Intern. 

## Coding

*   This project utilizes html, javascript, and css.
*   Bootstraps 4 and Fontawesome are utilized for the styling.
*   Inquier is used to gather user input from the command line. 
*   FileSystem is used to write the html file. 
*   Jest is used for testing. 

## Meta 

Jamie Kook - kookjc6@gmail.com


