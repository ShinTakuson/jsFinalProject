const myForm = document.getElementById("myForm");
let headAnimation = document.getElementById("ImgHead");

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
    // console.log("Form has been submitted")
    headAnimation.classList.add("ImgHead");
    cardCounter();
 
    MainScreen.classList.add("disableBackground")
    BigCard.classList.add("MainCardPopUp");
    // setTimeout(TheCorner,4500);
    // function TheCorner(){
    //     headAnimation.classList.remove("ImgHead");}
});
function CloseCard(){
    BigCard.classList.remove("MainCardPopUp");
    MainScreen.classList.remove("disableBackground");
    headAnimation.classList.remove("ImgHead");
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

function RecallCard(x){
    BigCard.classList.add("MainCardPopUp");
    Questions = JSON.parse(sessionStorage.getItem(x)).theQuestion;
    Answers = JSON.parse(sessionStorage.getItem(x)).theAnswers;
    document.getElementById("MainCardQuestion").innerHTML = Questions;
    document.getElementById("MainCardAnswer").innerHTML = Answers;
}
