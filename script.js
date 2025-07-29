const quizData = [
  {
    question: 'поехали! сколько тебе лет?',
    answers: [
      { text: '> 18', color: 'red', position: '1 / 1', columnSpan: 1 },
      { text: 'чет около 18–25', color: 'blue', position: '2 / 1', columnSpan: 1, rowSpan: 3 },
      { text: 'я в самом расцвете! 26–35', color: 'green', position: '2 / 4', columnSpan: 1, rowSpan: 3 },
      { text: 'огород на подходе! 46+', color: 'red', position: '4 / 2', columnSpan: 2 },
      {
        text: 'молодой человек, неприлично задавать такие вопросы......36–45',
        color: 'blue',
        position: '1 / 2',
        columnSpan: 3,
      },
    ],
  },
  {
    question: 'ты с марса или с венеры?',
    answers: [
      { text: 'женщина', color: 'red', position: '1 / 1', columnSpan: 2 },
      { text: 'мужчина!', color: 'blue', position: '1 / 3', columnSpan: 2 },
    ],
  },
  {
    question: 'чем ты занимаешься, где работаешь?',
    answers: [
      { text: 'учусь', color: 'red', position: '1 / 1', rowSpan: 4 },
      { text: 'работаю', color: 'blue', position: '1 / 2', columnSpan: 3 },
      { text: 'не работаю, на вайбе', color: 'blue', position: '4 / 2', columnSpan: 2 },
      { text: 'пенсионер с воооооот такой дачей', color: 'green', position: '2 / 4', rowSpan: 3 },
    ],
  },
  {
    question: 'почему ты покупаешь нашу пиццулю?',
    answers: [
      { text: 'лень готовить', color: 'red', position: '1 / 1', columnSpan: 2 },
      { text: 'детям', color: 'blue', position: '2 / 1', rowSpan: 3 },
      { text: 'для посиделок дома', color: 'red', position: '4 / 2', columnSpan: 2 },
      { text: 'для вечеринки/др', color: 'blue', position: '1 / 3', columnSpan: 2 },
      { text: 'полезный перекус', color: 'green', position: '2 / 4', rowSpan: 3 },
    ],
  },
  {
    question: 'как часто ты заказываешь пиццу?',
    answers: [
      { text: 'раз в неделю или чаще', color: 'red', position: '1 / 1', columnSpan: 2 },
      { text: '1–3 раза в месяц', color: 'blue', position: '1 / 3', columnSpan: 2 },
      { text: 'реже 1 раза в месяц', color: 'green', position: '2 / 4', rowSpan: 3 },
    ],
  },
  {
    question: 'какие виды пиццы предпочитаешь?',
    answers: [
      { text: 'с мясными начинками (бекон, ветчина, колбаса)', color: 'red', position: '1 / 1', columnSpan: 2 },
      { text: 'вегетарианская / веганская', color: 'green', position: '2 / 1', rowSpan: 3 },
      { text: 'классическая (маргарита, пепперони)', color: 'yellow', position: '1 / 3', columnSpan: 1 },
      { text: 'экзотическая', color: 'blue', position: '4 / 2', columnSpan: 3 },
      { text: 'острая', color: 'green', position: '1 / 4', rowSpan: 1 },
      { text: 'с морепродуктами', color: 'red', position: '2 / 4', rowSpan: 2 },
    ],
  },
  {
    question: 'почему ты выбираешь нашу пиццулю?',
    answers: [
      { text: 'лучшее тесто', color: 'green', position: '1 / 1', columnSpan: 2 },
      { text: 'лучшее качество', color: 'red', position: '1 / 3', columnSpan: 2 },
      { text: 'идеальный размер', color: 'red', position: '4 / 1', columnSpan: 2 },
      { text: 'лучшие начинки', color: 'blue', position: '4 / 3', columnSpan: 2 },
    ],
  },
  {
    question: 'где чаще всего заказываешь пиццу?',
    answers: [
      { text: 'прихожу в пиццерию', color: 'red', position: '1 / 1', columnSpan: 2 },
      { text: 'через сайт пиццерии', color: 'blue', position: '2 / 1', rowSpan: 3 },
      { text: 'через доставку (delivery/yandex)', color: 'blue', position: '1 / 3', columnSpan: 2 },
      { text: 'через приложение', color: 'red', position: '4 / 2', columnSpan: 2 },
      { text: 'по телефону', color: 'green', position: '2 / 4', rowSpan: 3 },
    ],
  },
  {
    question: 'пиццы каких брендов ты еще покупаешь?',
    answers: [
      { text: 'scrocchiarella', color: 'red', position: '1 / 1', columnSpan: 2 },
      { text: 'dominos', color: 'blue', position: '2 / 1', rowSpan: 2 },
      { text: 'империя пиццы', color: 'green', position: '1 / 3', columnSpan: 2 },
      { text: 'pizza hut', color: 'blue', position: '2 / 4', rowSpan: 2 },
      { text: 'додо', color: 'yellow', position: '4 / 1', columnSpan: 1 },
      { text: 'папа джонс', color: 'red', position: '4 / 4', columnSpan: 2 },
      { text: 'напиши свой вариант', color: 'green', isCustomInput: true, position: '4 / 2', columnSpan: 2 },
    ],
  },
  {
    question: 'как узнаешь о новых пиццериях?',
    answers: [
      { text: 'рекомендации друзей', color: 'green', position: '1 / 1', columnSpan: 3 },
      { text: 'реклама в google/yandex', color: 'red', position: '1 / 4', columnSpan: 1 },
      { text: 'через доставочные приложения', color: 'blue', position: '4 / 1', columnSpan: 3 },
      { text: 'соцсети', color: 'green', position: '4 / 4', columnSpan: 1 },
    ],
  },
  {
    question: 'где удобнее получать инфу о новинках zotman?',
    answers: [
      { text: 'смс', color: 'red', position: '1 / 1', columnSpan: 1 },
      { text: 'в соцсетях', color: 'blue', position: '1 / 2', columnSpan: 1 },
      { text: 'email на почту', color: 'red', position: '1 / 3', columnSpan: 2 },
      { text: 'пуш в приложении', color: 'green', position: '4 / 3', columnSpan: 2 },
    ],
  },
  {
    question: 'финишная прямая! какие акции могут тебя заинтересовать?',
    answers: [
      { text: '2 пиццы по цене 1', color: 'red', position: '1 / 1', columnSpan: 2 },
      { text: 'сезонные предложения', color: 'blue', position: '1 / 3', columnSpan: 2 },
      { text: 'скидка на первый заказ', color: 'blue', position: '2 / 1', rowSpan: 3 },
      { text: 'накопительные бонусы', color: 'green', position: '4 / 2', columnSpan: 2 },
      { text: 'бесплатная доставка', color: 'green', position: '2 / 4', rowSpan: 3 },
    ],
  },
  {
    question: 'введи e-mail',
    isEmail: true,
  },
]

let currentQuestion = 0
let userAnswers = []

function renderQuestion() {
  document.getElementById('quizContainer').style.display = 'grid'
  const container = document.getElementById('quizContainer')
  container.style.display = window.innerWidth < 600 ? 'flex' : 'grid'
  container.style.flexDirection = window.innerWidth < 600 ? 'column' : ''
  container.style.alignItems = window.innerWidth < 600 ? 'stretch' : ''
  const data = quizData[currentQuestion]

  if (data.isEmail) {
    container.innerHTML = `
      <div class="email-container">
        <div class="question question--mail">твой e-mail отправим туда твой подарочек</div>
        <input type="email" class="email-input" placeholder="введи e-mail" />
        <button class="submit-btn" onclick="showFinal()">отправить</button>
      </div>
    `
    return
  }

  container.className = 'quiz-container'
  container.innerHTML = ''

  const questionEl = document.createElement('div')
  questionEl.className = 'question'
  questionEl.textContent = data.question
  container.appendChild(questionEl)

  data.answers.forEach(ans => {
    const answerEl = document.createElement('div')
    answerEl.className = `answer ${ans.color}`
    answerEl.style.gridArea = ans.position
    if (ans.columnSpan) answerEl.style.gridColumnEnd = `span ${ans.columnSpan}`
    if (ans.rowSpan) answerEl.style.gridRowEnd = `span ${ans.rowSpan}`
    if (ans.isCustomInput) {
      // изначально текст
      answerEl.innerHTML = `<div class="custom-label">напиши<br>свой<br>вариант</div>`
      answerEl.onclick = () => {
        answerEl.innerHTML = `
          <div class="custom-input-wrapper">
            <input type="text" class="custom-line-input" placeholder=" " />
            <div class="custom-done">готово!</div>
          </div>
            `
        const input = answerEl.querySelector('input')
        const done = answerEl.querySelector('.custom-done')
        input.focus()
        input.addEventListener('keydown', e => {
          if (e.key === 'Enter' && input.value.trim() !== '') {
            userAnswers.push({
              question: data.question,
              answer: input.value.trim(),
            })
            nextQuestion()
          }
        })
        done.addEventListener('click', () => {
          if (input.value.trim() !== '') {
            userAnswers.push({
              question: data.question,
              answer: input.value.trim(),
            })
            nextQuestion()
          }
        })
      }
    } else {
      answerEl.textContent = ans.text
      answerEl.onclick = () => {
        userAnswers.push({
          question: data.question,
          answer: ans.text,
        })
        nextQuestion()
      }
    }
    container.appendChild(answerEl)
  })
}

function nextQuestion() {
  currentQuestion++
  if (currentQuestion < quizData.length) {
    renderQuestion()
  }
}

function showFinal() {
  const container = document.getElementById('quizContainer')
  const emailInput = document.querySelector('.email-input')
  const userEmail = emailInput ? emailInput.value.trim() : ''
  sendToBitrix(userEmail)
  container.innerHTML = `
    <div class="final-screen">
      <div class="top-left">
        <b class="thanks">ваааа,</b><br />
        <b class="thanks">спасибо!</b><br />
        <p>сколько бы тебе ни было лет,<br />
        что бы ты ни любил — наша<br />
        пиццуля сближает всех!</p>
      </div>
      <div class="bottom-right">
        <div class="highlight">держи скидочку!</div>
        <div class="promo">промокод на -35%</div>
      </div>
    </div>
  `
}

function startQuiz() {
  document.getElementById('startScreen').style.display = 'none'
  renderQuestion()
}

document.getElementById('startScreen').style.display = 'flex'

const fieldMapping = {
  'поехали! сколько тебе лет?': 'UF_CRM_1753716036201',                            
  'ты с марса или с венеры?': 'UF_CRM_1753716064902',                           
  'чем ты занимаешься, где работаешь?': 'UF_CRM_1753716064903',            
  'почему ты покупаешь нашу пиццулю?': 'UF_CRM_1753716064904',             
  'как часто ты заказываешь пиццу?': 'UF_CRM_1753716064905',          
  'какие виды пиццы предпочитаешь?': 'UF_CRM_1753716064906',               
  'почему ты выбираешь нашу пиццулю?': 'UF_CRM_1753716064907',          
  'где чаще всего заказываешь пиццу?': 'UF_CRM_1753716064908',            
  'пиццы каких брендов ты еще покупаешь?': 'UF_CRM_1753716064909',       
  'как узнаешь о новых пиццериях?': 'UF_CRM_1753716064910',          
  'где удобнее получать инфу о новинках zotman?': 'UF_CRM_1753716064911',
  'финишная прямая! какие акции могут тебя заинтересовать?': 'UF_CRM_1753716064912' 
}

function sendToBitrix(email) {
  const webhookURL = 'https://zotmanpro.bitrix24.ru/rest/11/ijpaqzfiaju1kkx1/crm.lead.add.json'

  const customFields = {}
  userAnswers.forEach(entry => {
    const fieldCode = fieldMapping[entry.question]
    if (fieldCode) {
      customFields[fieldCode] = entry.answer
    }
  })

  const leadData = {
    fields: {
      TITLE: 'Опросник Zotman',
      NAME: 'Новый клиент',
      EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
      ...customFields
    },
  }

  fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(leadData),
  })
    .then(res => res.json())
    .then(data => console.log('Успешно в Bitrix:', data))
    .catch(err => console.error('Ошибка Bitrix:', err))
}
