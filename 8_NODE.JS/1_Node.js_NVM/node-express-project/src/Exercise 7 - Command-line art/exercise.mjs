import figlet from "figlet";

/* Exercise 7 - Command-line art

Create a new Node.js project and install the figlet package (https://www.npmjs.com/package/figlet).
Write a script that uses the function from this package to output some text based art (the figlet package README has a 'Quick Start' section).
Run the script with Node.js. */

const artText = () => {
  return figlet.text(
    "Marcos",
    {
      font: "Big Money-nw",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    },
  );
};

artText();
