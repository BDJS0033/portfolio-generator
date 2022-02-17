<<<<<<< HEAD
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    GitHub: ${githubName}
  `;
};
=======
const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');

});
>>>>>>> aa6314f4b8c964612a29394c23840e2d8d08c5cc
