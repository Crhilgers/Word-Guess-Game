// create an array of words
// choose words randomly
// create underscores based on word
//get user guess
// chech if guess is right
// if right push to right array
// if wrong push to wrong arr

//make repating letters show up when pressed
// wins and losses
// lives

    var words = ["rouge", "wizard","barbarian", "fighter", "sorcerer", "cleric", "palidian","ranger"];

    var num = Math.floor(Math.random() * words.length);
    var chosenWord = words[num];
    var underScore = [];
    var rightWord = [];
    var wrongWord = [];
    var win = 0;
    var loss = 0;
    var lives = 5;
    
   var showLives = document.getElementsByClassName("myLives")
    var docunder = document.getElementsByClassName("underscore");
    var docRightGuess = document.getElementsByClassName("rightGuess")
    var docWrongGuess = document.getElementsByClassName("wrongGuess")
    var myWins = document.getElementsByClassName("myWins")
    var myLosses = document.getElementsByClassName("myLosses")
    var button = document.getElementById("restart")



button.addEventListener("click", function(event){

    event.preventDefault();
    chosenWord = words[Math.floor(Math.random() * words.length)];
    underScore = [];
     rightWord = [];
    wrongWord = [];
    generateUnderscore();
    docunder[0].innerHTML = underScore.join(" ");
    docRightGuess[0].innerHTML = underScore.join(" ");
    docWrongGuess[0].innerHTML = underScore.join(" ");
    console.log(chosenWord)
});

    console.log(chosenWord);

    var generateUnderscore = () => {

        for(var i = 0; i < chosenWord.length; i++) {

            underScore.push("_");
        }

        return underScore;
    }

document.addEventListener("keypress", (event) => {
    var keycode = event.keyCode;
    var keyword = String.fromCharCode(event.keyCode);
    var wordIndex = [];
    chosenWord.split("").forEach(function(letter,index){
        
        if (keyword === letter){
            wordIndex.push(index);
        }

    } );
    console.log(wordIndex)
        if(chosenWord.indexOf(keyword) > -1) {

                rightWord.push(keyword);
                
                underScore[chosenWord.indexOf(keyword)] = keyword;
                // underScore.forEach(function(under,index){
                //     wordIndex.forEach(function(number){
                //         if (index === number){
                //             under = keyword;
                //         }
                //     });
                // });
                for(i = 0; i < wordIndex.length; i++){
                    underScore[wordIndex[i]] = keyword;
                }
                docunder[0].innerHTML = underScore.join(" ");

                docRightGuess[0].innerHTML = rightWord;

                if(underScore.join("") == chosenWord) {
                    win++;
                    myWins[0].innerHTML = win;
                    alert("Winner!")
                    // document.getElementById("span1").innerHTML=win + 1;
                    //re pick new word
                }
            }
        else {
    
            //repick new word
            if (lives> 0 ) {
                showLives[0].innerHTML = lives--;
                wrongWord.push(keyword);
                docWrongGuess[0].innerHTML = wrongWord;
            
        }
            else {
                alert("Sorry you lost!")
                loss++;
                myLosses[0].innerHTML = loss;

            }
        }

});

docunder[0].innerHTML = generateUnderscore().join(" ");
showLives[0].innerHTML = lives.toString();
myWins[0].innerHTML = win.toString();
myLosses[0].innerHTML = loss.toString();