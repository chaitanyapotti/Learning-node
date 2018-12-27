const p = Promise.resolve(1);
p.then(id => console.log("Id", id));

const p2 = Promise.reject(new Error("My Wish"));
p2.catch(err => console.log("Error", err));

const p3 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

const p4 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

// if any promise is rejected, final promise is rejected

Promise.all([p3, p4]).then(result => console.log(result));
//Promise.race([p3, p4]).then(result => console.log(result));
