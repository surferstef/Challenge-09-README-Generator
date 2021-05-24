// module.exports = templateData => {
//     console.log(templateData);

//module.exports = generatePage => {


    function generatePage(responses) {
        return `
    
        <head>
           <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>${responses.name}</title>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
         <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        </head>
      
        ## Purpose
        ${responses.purpose}
    
        ## Table of Contents
        [Installation](*installation)
        [Contributing](*collaborators)
        [Testing](*testing)
        [Licenses](*licenses)
        [Git Username](*username)
        [Questions](*email)
    
        ##Installation
        ${responses.installation}
    
        ##Contributing
        ${responses.collaborators}
    
        ##Testing
        ${responses.testing}
    
        ##Licenses
        ${responses.licenses}
        ![badge](https://img.shields.io/badge/license-${responses.licenses})
    
        ##Git Username
        ${responses.username}
    
        <h2><a href="https://github.com/${responses.username}">Github</a></h2
    
        ##Questions
        Feel free to email me with your questions at: 
        ${responses.email}
    
    
        `;
      };
    
      module.exports = generatePage;