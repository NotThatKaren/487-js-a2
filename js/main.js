
// These are my two variables:
// tableBuilder will construct my table on index.html
// mostWins will return my concatenated statement
// I did not figure out how to bold the team with the most wins

var myTableBuilder="";
var mostWins="";

// Set my new arrays

teams = new Array([]);

// this is the data provided for the exercise

teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dodgers","Diamondbacks","Giants","Padres","Rockies"];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

// This is a rather clumsy and probably poor way of building a table, but it worked

myTableBuilder="<table><tr><th> Teams </th><th> Wins </th><th> Losses </th></tr>";

// loops through all the teams putting the data into the table
for (var i=0; i<teams.length; i++) {

  //logs teams to the console for verification this is working
  console.log(teams[i]);

  myTableBuilder += "<tr>" + "<td>" + teams[i] + "</td>" + "<td>" + wins[i] +  "</td>" + "<td>" + losses[i] + "</td>" + "</tr>";

  //logs myTableBuilder to the console for verification this is working
  console.log(myTableBuilder);
}

// closes out the table
myTableBuilder += "</table>"

// creates the Id used in index.html to display the table
document.getElementById("teams").innerHTML=myTableBuilder;

// turns the document.getElementById statement into a constant called border
const border=document.getElementById("teams");

// applies a border of 7px to my data table
border.border="7";

//^^^Finally, I got it to work :(

// creates a variable called tempHighWins which identifies the highest number
// of wins in the wins data set
// creates a variable called tempLeader which identifies the team associated with
// the highest number of wins
var tempHighWins = 0;
var tempLeader = 0;

// loops through and identifies the team with the highest number of wins
for (var i=0; i<teams.length; i++){
  if(wins[i] >= tempHighWins){
    tempHighWins = wins[i];
    tempLeader = i;
  }
}

// logs the results of the for loop into the console
console.log("The team with the most wins, " + tempHighWins + ", is " + teams[tempLeader]);

// concatenates my statement which gets displayed in index.html
mostWins = "The team with the most wins, " + tempHighWins + ", is the " + teams[tempLeader] + ".";

//creates the id to put into my div on the index.html page
document.getElementById("wins").innerHTML=mostWins;
