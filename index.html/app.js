var questions = [
  {

      "question": "How to create alert box?",
      "option1": "alert='hello world'",
      "option2": "aler('hello world')",
      "option3": "alert.('hello world')",
      "option4": "alert('hello world')",
      "answer": "4"
  },
  {

      "question": "How to create variable?",
      "option1": "variable name = 'ali'",
      "option2": "var name = 'ali'",
      "option3": "variable: 'ali'",
      "option4": "variable. 'ali'",
      "answer": "2"
  },
  {

      "question": "How to create function?",
      "option1": "Function(){}",
      "option2": "function.create()",
      "option3": "function(){}",
      "option4": "function{}",
      "answer": "3"
  },
  {

      "question": "How to push value in array?",
      "option1": "arr.push(value)",
      "option2": "arr.push.value",
      "option3": "arr.(value)",
      "option4": "arr.value.push(value)",
      "answer": "1"
  },
  {

      "question": "What is javascript",
      "option1": "programming language",
      "option2": "scripting language",
      "option3": "codding language",
      "option4": "web language",
      "answer": "2"
  }

];



var question=document.getElementById('question');
var opt1=document.getElementById('opt1');

var opt2=document.getElementById('opt2');

var opt3=document.getElementById('opt3');

var opt4=document.getElementById('opt4');

question.innerHTML=questions[0].question;
opt1.innerHTML=questions[0].option1;
opt2.innerHTML=questions[0].option2;
opt3.innerHTML=questions[0].option3;
opt4.innerHTML=questions[0].option4;
var load=0;
var correct=0;
function next()
{
  var a=document.querySelector("input[name='option']:checked");
if(a !=null)
{
  
  if(questions.length -1=== load)
  {
    alert("question  end");
    var score=correct*20;
    document.getElementById('quizcontainer').style.display="none";
    document.getElementById('resultcontainer').style.display="block";
    document.getElementById('score').innerHTML="this is Your Score "+score+"%";
  }
else{
  if(questions[load].answer===a.value)
  {
   // alert("correct");
    ++correct;

  }
  else
  {
    alert("wrong");
  }

  load++;

  opt1.innerHTML=questions[load].option1;
  opt2.innerHTML=questions[load].option2;
  opt3.innerHTML=questions[load].option3;
  opt4.innerHTML=questions[load].option4;
}
}
else
{
alert("plz check any one");
}
  

}