const myForm = document.getElementById("myForm");
let headAnimation = document.getElementById("ImgHead");
// counting function and also loading the information onto session storage.
function cardCounter() {
    if(typeof(Storage) !== "undefined") {
        Questions = document.getElementById("Question").value;
        AnswersCalc = Math.floor(Math.random() * 15) + 1;
        let Answers;
            switch(AnswersCalc){
                case 1:
                    Answers = "IT IS QUITE POSSIBLE.";
                    break;
                case 2:
                    Answers = "IT HAS BEEN DECIDED IN YOUR FAVOUR.";
                    break;
                case 3:
                    Answers = "YOU MAY NEVER KNOW";
                    break;
                case 4:
                    Answers = "IF YOU MOVE SOON.";
                    break;
                case 5:
                    Answers = "THAT MAKE A GOOD DEAL OF SENSE.";
                    break;
                case 6:
                    Answers = "TRY AGAIN.";
                    break;
                case 7:
                    Answers = "THERE'S NO QUESTION ABOUT IT.";
                    break;
                case 8:
                    Answers = "DO YOU DARE RISK FINDING OUT.";
                    break;
                case 9:
                    Answers = "WHAT DO YOU THINK?";
                    break;
                case 10:
                    Answers = "YOUR CHANCES ARE GOOD.";
                    break;
                case 11:
                    Answers = "IT HAS ALREADY BEEN TAKEN CARE OF.";
                    break;
                case 12:
                    Answers = "IF THAT'S WHAT YOU REALLY WANT.";
                    break;
                case 13:
                    Answers = "THE ANSWER TO THAT IS OBVIOUS.";
                    break;
                case 14:
                    Answers = "THAT'S UP TO YOU TO FIND OUT";
                    break;
                case 15:
                    Answers = "IT ALL DEPENDS UPON YOUR POINT OF VIEW.";
                    break;
            }
        const obj = { theQuestion: Questions, theAnswers: Answers };
      if (sessionStorage.cardNumber) {
        sessionStorage.cardNumber = Number(sessionStorage.cardNumber)+1;
            if(sessionStorage.cardNumber === "6"){
                sessionStorage.cardNumber = 1;
            }
      } else {
        sessionStorage.cardNumber = 1;
      }
      sessionStorage.setItem(sessionStorage.cardNumber, JSON.stringify(obj) );
      document.getElementById("MainCardQuestion").innerHTML = Questions;
      document.getElementById("MainCardAnswer").innerHTML = Answers;
      
    } else {
    alert = "Sorry, your browser does not support web storage...";
    }
  }
// add the random text and apply to eventlistener
myForm.addEventListener("submit",(e) => {
    e.preventDefault();
    // adding head animation once the submit button was pressed. This bobbles the bobble head.
    headAnimation.classList.add("ImgHead");
    // session logged how many times they submitted a question or just submitted
    cardCounter();
    //adding animation to these calsses. 
    MainScreen.classList.add("disableBackground")
    BigCard.classList.add("MainCardPopUp");
});
// When the card pops up, i needed something to close it and reset a few things.
function CloseCard(){
    // value is reset to default
    Question.value = "";
    // animation is removed and allowed for reset on next go
    BigCard.classList.remove("MainCardPopUp");
    BigCard.classList.remove("MainCardPopUp2");
    // the background grey out is reset to default
    MainScreen.classList.remove("disableBackground");
    // head animation is removed and allowed to reset on next go
    headAnimation.classList.remove("ImgHead");
    // storing information into session. Let it only ccount up to 5 and reset back to 1 on 6.
    for(let i = 1; i < sessionStorage.length; i++){
        const cardNum = sessionStorage.key(i); 
        switch (cardNum){
            case sessionStorage.key(1):
                document.getElementById('Card01').innerHTML = JSON.parse(sessionStorage.getItem(1)).theQuestion;
                break;
            case sessionStorage.key(2):
                document.getElementById('Card02').innerHTML = JSON.parse(sessionStorage.getItem(2)).theQuestion;
                break;
            case sessionStorage.key(3):
                document.getElementById('Card03').innerHTML = JSON.parse(sessionStorage.getItem(3)).theQuestion;
                break;
            case sessionStorage.key(4):
                document.getElementById('Card04').innerHTML = JSON.parse(sessionStorage.getItem(4)).theQuestion;
                break;
            case sessionStorage.key(5):
                document.getElementById('Card05').innerHTML = JSON.parse(sessionStorage.getItem(5)).theQuestion;
                break;
        }
    }
   

}
// needed a different animate delay for recalling the cards previously used. 
function RecallCard(x){
    BigCard.classList.remove("MainCardPopUp2");
    //this was interesting to use. toggle it on and off. left it in versus add just to see the difference.
    document.getElementById("BigCard").classList.toggle("MainCardPopUp2");
    BigCard.classList.add("MainCardPopUp");
    // retrieving the in sesseion storage to display onto the cards.
    Questions = JSON.parse(sessionStorage.getItem(x)).theQuestion;
    Answers = JSON.parse(sessionStorage.getItem(x)).theAnswers;
    document.getElementById("MainCardQuestion").innerHTML = Questions;
    document.getElementById("MainCardAnswer").innerHTML = Answers;
}
