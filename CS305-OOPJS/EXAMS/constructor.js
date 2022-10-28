function User(name) {
  this.name = name;
  this.isAdmin = "xxx";
}

let user1 = new User("Jack"); // User func copied to user1
// now you can use user1 like User function that it does.
console.log(user1.name); // Jack
console.log(user1.isAdmin); // xxx
console.log(User == user1); // false bcs: it's copy obj

function User() {
  alert(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User();
