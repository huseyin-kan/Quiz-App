const quizData = [
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    },
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    },
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    },
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    },
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    },
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    },
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    },
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    },
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    },
    {
        question:"1-)Question",
        a:"a",
        b:"b",
        c:"c",
        d:"d",
        correct:'a'
    }

]
const quiz = document.getElementById("quiz")
const questionEl = document.getElementById("question")
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")
const submitBtn = document.getElementById("submit")


displayMessages = function(message,type){
    const window = document.getElementById("alert")

    const div = document.createElement("div")

    div.className = `alert alert-${type}`
    div.textContent = message
    window.appendChild(div)
    setTimeout(function(){
        div.remove()
    },1000)
}

let currentQuiz = 0
let score = 0
loadQuiz()

function loadQuiz(){
    
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    deselectAnswers()
}

function getSelected(){
    const answerEls = document.querySelectorAll(".answer")
    
    let answer = undefined
    
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    
    return answer
}

function deselectAnswers(){
    const answerEls = document.querySelectorAll(".answer")
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false
    })
}

submitBtn.addEventListener("click",()=>{
    const answer = getSelected()
    
    console.log(answer)

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
            displayMessages("Doğru knk","success")
        }
        else{
            displayMessages("Yanlış knk","danger")
        }


        currentQuiz++

        if(currentQuiz<quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML=`<h2>${score}/${quizData.length} Doğru Cevapladın</h2> <button onclick="location.reload()">Tekrardan Başlat</button>`
        }

        

    }
    else{
        displayMessages("Şık seç Knk", "warning")
    }
    
    
    
})