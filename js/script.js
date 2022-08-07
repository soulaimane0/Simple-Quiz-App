const quizinfos = [
    {
        question:'Who was the Ancient Greek God of the Sun ?',
        a:'Zeus',
        b:'Apollo',
        c:'Poseidon',
        d:'Demeter',
        correct:'b'
    },
    {
        question:'What country has the highest life expectancy ?',
        a:'USA',
        b:'Italy',
        c:'Hong Kong',
        d:'Egypt',
        correct:'c'
    },
    {
        question:'What year was the United Nations established ?',
        a:'1945',
        b:'1981',
        c:'2000',
        d:'1956',
        correct:'a'
    },
    {
        question:'How many minutes are in a full week ?',
        a:'9,880',
        b:'20,010',
        c:'25,000',
        d:'10,080',
        correct:'d'
    },
    {
        question:'What sports car company manufactures the 911 ?',
        a:'Mercides',
        b:'Porsche',
        c:'BMW',
        d:'Toyota',
        correct:'b'
    },
];

const Quiz_C = document.getElementById('quiz');

const question_text = document.getElementById('quest');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btnsubmit = document.getElementById('subm');


const answers = document.getElementsByName('qst');

let quizCounter = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectElts();
    const currentQuiz = quizinfos[quizCounter];

    question_text.innerHTML = currentQuiz.question;
    a_text.innerText  = currentQuiz.a;
    b_text.innerText  = currentQuiz.b;
    c_text.innerText  = currentQuiz.c;
    d_text.innerText  = currentQuiz.d;

}

function getSelected(){
    let answer = undefined;
    answers.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectElts(){
    answers.forEach((answerElm)=>{
        answerElm.checked=false;
    })
}


btnsubmit.addEventListener('click',()=>{
   
    let answer = getSelected();
    if(answer){
        if(answer === quizinfos[quizCounter].correct){
            score++;
        }
        quizCounter++;
        if(quizCounter<quizinfos.length){
        loadQuiz();
        }else{
            Quiz_C.innerHTML = `<h2>You answered correctly ${score}/${quizinfos.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
        
    }
})