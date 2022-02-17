// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    GitHub: ${githubName}
  `;
};
