import { useState } from "react"
import './Task1.css'

function Task1(props) {
  const randint = (min, max) => Math.floor(min + Math.random() * (max - min + 1))
  const randEl = arr => arr[randint(0, arr.length - 1)]

  const [curAnswear, setCurAnswear] = useState('')
  const [isAnsweared, setIsAnsweared] = useState(false)


  const setWords = (str) => {
    str = str.replace('A', words[0])
    str = str.replace('B', words[1])
    str = str.replace('C', words[2])
    return str
  }

  const checkAnswear = (e) => {
    e.preventDefault()
    setIsAnsweared(true)
  }

  const changeInp = (e) => {
    e.preventDefault()
    setCurAnswear(e.target.value)
  }


  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  let a = []
  for (let i = 0; i < 7; i++) a.push(randint(10, 50))

  let words = [['ухо', 'подкова', 'наковальня'], ['зима', 'жаворонок', 'мороз'], ['лихорадка', 'золото', 'нефть'], ['трактор', 'гусеница', 'бабочка'], ['рожь', 'поле', 'напряжённость'], ['пилот', 'вертолёт', 'акула'], ['пчела', 'улей', 'город'], ['пещера', 'сталактит', 'озеро'], ['жираф', 'слон', 'моська'], ['подсолнечник', 'масло', 'двигатель']]

  const tasks = [
    [
      { name: 'A | B | C', val: a[0] + a[1] + a[2] + a[3] + a[4], question: true },
      { name: 'A', val: a[0] + a[1], question: true },
      { name: 'B', val: a[1] + a[2] + a[3], question: true },
      { name: 'C', val: a[3] + a[4], question: true },
      { name: 'A & B', val: a[1], question: true },
      { name: 'B & C', val: a[3], question: true },
      { name: 'A & C', val: 0, question: false }
    ],

    [
      { name: 'A | B | C', val: a[0] + a[1] + a[2] + a[3] + a[4], question: true },
      { name: 'A', val: a[0] + a[1], question: false },
      { name: 'B', val: a[1] + a[2] + a[3], question: false },
      { name: 'C', val: a[3] + a[4], question: true },
      { name: 'A | B', val: a[0] + a[1] + a[2] + a[3], question: true },
      { name: 'B & C', val: a[3], question: true },
      { name: 'A & C', val: 0, question: false }
    ],

    [
      { name: 'A | B | C', val: a[0] + a[1] + a[2] + a[3] + a[4], question: true },
      { name: 'A', val: a[0] + a[1], question: false },
      { name: 'A | B', val: a[0] + a[1] + a[2] + a[3], question: true },
      { name: 'C', val: a[3] + a[4], question: true },
      { name: 'A & B', val: a[1], question: false },
      { name: 'B & C', val: a[3], question: true },
      { name: 'A & C', val: 0, question: false }
    ],

    [
      { name: 'A | B | C', val: a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6], question: true },
      { name: 'A', val: a[0] + a[1] + a[3] + a[4], question: true },
      { name: 'B', val: a[1] + a[2] + a[4] + a[5], question: true },
      { name: 'C', val: a[3] + a[4] + a[5] + a[6], question: true },
      { name: 'A & B', val: a[1] + a[4], question: true },
      { name: 'A & C', val: a[3] + a[4], question: true },
      { name: 'B & C', val: a[4] + a[5], question: true },
      { name: 'A & B & C', val: a[4], question: true }
    ],

    [
      { name: 'A | B | C', val: a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6], question: true },
      { name: 'A', val: a[0] + a[1] + a[3] + a[4], question: false },
      { name: 'B', val: a[1] + a[2] + a[4] + a[5], question: false },
      { name: 'C', val: a[3] + a[4] + a[5] + a[6], question: true },
      { name: 'A | B', val: a[0] + a[1] + a[2] + a[3] + a[4] + a[5], question: true },
      { name: 'A & C', val: a[3] + a[4], question: true },
      { name: 'B & C', val: a[4] + a[5], question: true },
      { name: 'A & B & C', val: a[4], question: true }
    ],

    [
      { name: 'A | B | C', val: a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6], question: true },
      { name: 'A', val: a[0] + a[1] + a[3] + a[4], question: false },
      { name: 'B', val: a[1] + a[2] + a[4] + a[5], question: true },
      { name: 'C', val: a[3] + a[4] + a[5] + a[6], question: false },
      { name: 'A | B', val: a[0] + a[1] + a[2] + a[3] + a[4] + a[5], question: true },
      { name: 'B | C', val: a[1] + a[2] + a[3] + a[4] + a[5] + a[6], question: true },
      { name: 'A & C', val: a[3] + a[4], question: true },
      { name: 'A & B & C', val: a[4], question: true }
    ]
  ]

  let group = randEl(tasks)
  const question = randEl(group.filter(el => el.question))
  group = group.filter(el => el.name != question.name)
  group = shuffle(group)
  words = randEl(words)

  const [template, setTemplate] = useState(group.map(i => {
    return <tr key={i.name}>
      <td>{setWords(i.name)}</td>
      <td>{i.val}</td>
    </tr>

  }))

  const [query, setQuery] = useState(setWords(question.name))
  const [answeart, setAnsweart] = useState(question.val)

  return (
    <>
      <span className="number">
        {props.num}
      </span>
      <p> В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И» — символ «&».</p>
      <p>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.</p><br></br>
      <table>
        {template}

        <p>Сколько страниц будет найдено по запросу <span>{query}</span>?</p>

        {
          (() => {
            if (isAnsweared) {
              return answeart == curAnswear ? <p>Верно</p> : <p>Не верно</p>
            }
          })()
        }

        {/* <p><span >Ответ:</span> <span>{answeart}</span></p> */}

      </table>
      <div className="answear_block">
        <input type="text" className="answear_input" onChange={e => changeInp(e)} />
        <button className="answear_btn" onClick={e => checkAnswear(e)}>
          <span>Проверить</span>
        </button>
      </div>
    </>
  )
}

export default Task1