const fs = require("fs");
const content = "MIKE TESTED";
fs.writeFile(
  "C:UsersmikeOneDriveDesktopCS-415myfilefromnodejs.txt",
  content,
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    //file written successfully
  }
);
