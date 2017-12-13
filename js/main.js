var nameNpass = [
  {
    username: "Josue",
    password: "Satan666"
  },
  {
    username: "Lola",
    password: "Duck"
  },
    {
      username: "BJ",
      password: "Rat"
    }
]


function getInfo() {
    var userName = document.getElementById("userName").value
    var passWord = document.getElementById("passWord").value

for(i = 0; i < nameNpass.length; i++) {
    if(userName == nameNpass[i].username && passWord == nameNpass[i].password)  {
    document.getElementById("uNameIt").textContent = "You are logged in!"
    console.log(userName + " is logged in!")
    return
  }
}
   document.getElementById("noName").textContent = "Please register a username and password";


    }

    function regInfo() {
        var userReg = document.getElementById("userReg").value
        var passReg = document.getElementById("passReg").value
        var registerNew = {
            username: userReg,
            password: passReg
                          }
        for(i = 0; i < nameNpass.length; i++) {
          if(userReg == nameNpass[i].username) {
            alert("Username already taken, please choose another")
            return
          } else if (userReg =! nameNpass[i].username && passReg.length >= 8) {
            alert("User successfully registered!")
            return

          } else if (passReg.length < 8) {
            alert("Please use at least 8 characters for you password")
            return
          }


        }



    nameNpass.push(registerNew)
    console.log(nameNpass)

  }

    // for(i = 0; i < nameNpass.length; i++) {
    //     if(userName == nameNpass[i].username && passWord == nameNpass[i].password)  {
    //     document.getElementById("uRegIt").textContent = "You are logged in!"
    //     console.log(userName + " is now registered!")
    //     return
    //
    //   }
    // }
    //     document.getElementById("alreadyTaken").textContent = "Please register a different username and password";


// // CREATING OBJECTS //
//
// var superheroes = [
//
// {
//         name: "spiderman",
//         power: "websling",
//         identity: "Peter Parker",
//         lover: "MaryJane",
//         strength: 24
//     },
//     {
//       name: "ironman",
//       power: "robotsuit",
//       identity: "Tony Stark",
//       lover: "Pepper Pots",
//       strength: 67
//     },
//     {
//       name: "superman",
//       power: "everything",
//       identity: "Clark Kent",
//       lover: "Lois Lane",
//       strength: 99
//     }
// ]
//   for(i=0; i < superheroes.length; i++) {
//     if(superheroes[i].strength < 100) {
//       document.write(superheroes[i].name + ", " + superheroes[i].power + " ")
//     }
//   }






// var raison = [14, 20, 11, 13, 23, 20, 38, 31, 55];
// var grape = 0;
//   for(i=0; i < raison.length; i++){
//     if(grape < raison[i]) {
//       grape = raison[i]
//       console.log(grape)
//
//         }
//   }



// var superheroes = ["spiderman", "ironman", "superman"]
//
// for(i = 0; i < superheroes.length; i++) {
// if(superheroes[i] = "ironman") {
//     console.log("Superhero is " + superheroes[i])
// }
// }






// var phrase = "Here's a phrase for the ages"
// document.getElementById("checkit").innerHTML = phrase




// var userInput = prompt("Please type your name");
//   if(userInput == "Spiderman") {
//     document.write("Nice to see you " + userInput + "<img src=img/spiderman.png>")
//   } else if(userInput == "Spongebob") {
//     document.write("Nice to see you " + userInput + "<img src=img/spongebob.jpeg>")
//   }  else {
//     document.write("Hello " + userInput + "," + " you're neither Spiderman nor Spongebob")
//   }
