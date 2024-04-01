
const Express = require('express');
const app = Express();

app.get("", (req, res) => {
    res.send(`
       <h1> Hi This is Actually h1 tag </h1>
    `)

});

app.get("/form", (req, res) => {
    res.send(`
     <form style="color:red" action="/action_page.php">
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe"><br><br>
  <input type="submit" value="Submit">
</form> 
     `)
});

app.get("/about", (req, res) => {
    res.send("Wellcome name: 'rajendra'")
});
app.listen(8000);


