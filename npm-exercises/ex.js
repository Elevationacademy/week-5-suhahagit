
//NPM - Node Package Manager

//Exercise 1

const validator = require('validator')

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
const ex1 = validator.isEmail('shoobert@dylan')
console.log(ex1) //false

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
const ex2 = validator.isMobilePhone("786-329-9958", 'en-US')
console.log(ex2) //true

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
const ex3 = validator.blacklist(text, blacklist)
console.log(ex3)

//-------------------------------------------------------------------------------------------------------------------------------------------------

//Exercise 2

const faker = require('faker')
const { fake } = require('faker')

const makeHuman = function(num){
    for(let i = 0; i < num; i++){
        console.log(faker.name.findName() + ", " +
        faker.image.avatar() + ", " + 
        faker.company.companyName())
    }
}

makeHuman(2) //Mr. Patty Wehner, https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg, Wiza - Jacobs
            //Wayne Lowe, https://s3.amazonaws.com/uifaces/faces/twitter/boxmodel/128.jpg, Davis Group