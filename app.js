/**
 *
 * @returns A promise that is designed to resolve
 * with a list of hobbits, or potentially fail with
 * an failure object. The failure object includes a
 * boolean success property and a string message
 * property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}
console.log("Exercise 1");
let paragraph = document.getElementById("error");
let ul = document.getElementById("list");
console.log("✔️");

console.log("Exercise 2");
getList()
  .then((list) => console.log(list))
  .catch((err) => console.error(err));
console.log("✔️");

console.log("Exercise 3");
// getList().then((list) => ((i = 0), i++));
// .then((list) => )

getList().then((list) => {
  list.forEach((hobbit) => {
    let li = document.createElement("li");
    li.textContent = hobbit;
    ul.appendChild(li);
  });
});
getList().catch((err) => {
  console.error(paragraph);
});
// TODO: Handle the resolved or rejected states of the promise

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)
