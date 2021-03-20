const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
require("./config/connect")


//define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//the below routes relate to the books.js file in my routes folder
app.use(
  "/api", 
  require("./routes/books"),
  //more routes go here 
  )

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
