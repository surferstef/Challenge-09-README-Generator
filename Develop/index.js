const fs = require('fs');
const util = require('util');
const inquirer = require("inquirer");
const generatePage = require('./src/page-template.js');
const writeFileAsync = util.promisify(fs.writeFile);



// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profileDataArgs;




// TODO: Create an array of questions for user input

const promptQuestions = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your Project Title?',
        validate: projectNameInput => {
          if (projectNameInput) {
            return true;
          } else {
            console.log('Please enter your Project name!');
            return false;
          }
        }
      },
      {
          type: 'input',
          name: 'purpose',
          message: 'What is the purpose/ description of this repository?'
      },
      // {
      //   type: 'list',
      //   message: 'What is your Table of Contents?',
      //   name: 'contents',
      //   choices: ['Installation', 'Usage', 'Credits', 'License']
      // },
      {
        type: 'input',
        name: 'installation',
        message: 'What Installations are required? Provide installation instructions for how to get the development environment running.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators',
      },
      {
        type: 'confirm',
        name: 'testing',
        message: 'Is testing required?',
        default: false
      },
      {
        type: 'checkbox',
        message: 'What licenses?',
        name: 'licenses',
        choices: ['MIT License', 'Apache 2.0', 'GNU GPLv3', 'ISC License']
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your Git Username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
      }
  ]
)};


//inquirer.prompt()
    // .then(data)
    // .then(promptQuestions => {
    //   // const pageHTML = generatePage();
  
    //   // fs.writeFile('./index.html', pageHTML, err => {
    //   //   if (err) throw new Error(err);
  
    //   //   console.log('Page created! Check out index.html in this directory to see it!');
    //   // });
    // });



// TODO: Create a function to initialize app
    async function initProgram() {
      try {
        const responses = await promptQuestions();
        const filename = 'README.md';
        
         //We need to do this asynchronously, otherwise we will get a callback error message telling us the function received was 'Undefined'
         
         await writeFileAsync(filename, generatePage(responses));
      }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app
  initProgram();






