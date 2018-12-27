console.log("Before");
// getUser(1, user => {
//   //   console.log("User ", user);
//   getRepositories(user.githubUsername, repos => {
//     getCommits(repos[0], commits => {
//       console.log(commits);
//     });
//   });
// });
console.log("After");

getUser(1).then(user => getRepositories(user.githubUsername).then(repos => getCommits(repos[0]).then(commit => console.log("Commits", commit))));

//Async and Await approach
displayCommits();

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.githubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (error) {
    console.log("Error", error.message);
  }
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    //kick off async work
    setTimeout(() => {
      console.log("Reading a user from a database");
      resolve({ id: id, githubUsername: "potti" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling Github API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API...");
      resolve(["commit"]);
    }, 2000);
  });
}
