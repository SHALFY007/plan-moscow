import { useEffect, useState } from "react"

function Task2(props) {

    const randint = (min, max) => Math.floor(min + Math.random() * (max - min + 1))
    const randEl = arr => arr[randint(0, arr.length - 1)]

    let encoding = [['UTF-8', '8 битами'], ['UTF-16', '16 битами'], ['UTF-32', '32 битами'], ['Windows-1250', '16 битами'], ['ISO 8859-15', '8 битами'], ['MIK', '8 битами'], ['VISCII', '32 битами']]
    let names = ['Леша', "Сережа", "Миша", "Вова", "Никита", "Маша", "Вася", "Ваня"]
    let words = [
        {
            id: 0,
            name: "профессий",
            value: ["Врач ,", 'актер ,', 'акушер ,', 'генетик ,', 'издатель ,', 'кардиолог -']
        },
        {
            id: 1,
            name: "стран",
            value: ["Чехия ,", 'Великобритания ,', 'Катар ,', 'Швеция ,', 'Украина ,', 'Словакия ,', 'Польша -']
        },
        {
            id: 2,
            name: "птицы",
            value: ["Чиж ,", 'грач ,', 'стриж ,', 'гагара ,', 'пингвин ,', 'ласточка ,', 'жаворонок ,', "буревестник -"]
        },
        {
            id: 3,
            name: "озер",
            value: ["Онтарио ,", 'Байкал ,', 'Каспийское ,', 'Виннипег ,', 'Эри ,', 'Гурон ,', 'Восток -']
        },
        {
            id: 4,
            name: "островов",
            value: ["Ява ,", 'Куба ,', 'Лусон ,', 'Маражо ,', 'Суматра ,', 'Сулавеси ,', 'Эспаньола -']
        },
        {
            id: 5,
            name: "овощей",
            value: ["Репа ,", 'артишок ,', 'тыква ,', 'картофель ,', 'огурец ,', 'морковь ,', 'патиссон -']
        },
    ]

    const enc = randEl(encoding)
    const name = randEl(names)
    const [group, setGroup] = useState(randEl(words))
    const [curAns, setCurAns] = useState('')
    const [answear, setAnswear] = useState('')
    const [size, setSize] = useState(0)
    const [isChecked, setIsChecked] = useState(false)
    let str = ''

    for (let i of group.value) {
        str = str + i
    }

    const countSize = (arr) => {
        let oneSize = parseInt(enc[1].slice(0, enc[1].indexOf(' ')))
        let el = randEl(arr.value)
        setAnswear(el.substring(0, el.length - 2))
        setSize(el.length * oneSize)
    }

    const changeInp = (e) => {
        e.preventDefault()

        setCurAns(e.target.value)
    }

    const checkAns = (e) => {
        e.preventDefault()
        setIsChecked(true)
    }

    useEffect(() => {
        countSize(group)
    }, [])

    const [template, setTemplate] = useState(
        <>
            <p>В кодировке {enc[0]} каждый символ кодируется {enc[1]} битами. {name} написал текст (в нем нет лишних пробелов):</p>
            <br />
            <p>"{str} {group.name}"</p>
            <br />
            <p>Ученик вычеркнул из списка название одного из {group.name}. Заодно он вычеркнул ставшие лишними запятые и пробелы  — два пробела не должны идти подряд.</p> <br />
        </>
    )
    return (
        <>
            <span className="number">
                {props.num}
            </span>
            {template}
            <p>При этом размер нового предложения в данной кодировке оказался на {size / 8} байтов меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название {group.name}.</p>
            {
                (() => {
                    if (isChecked) {
                        return curAns == answear ? <p>Верно</p> : <p>Не верно</p>
                    }
                })()
            }
            <div className="answear_block">
                <input type="text" className="answear_input" onChange={e => changeInp(e)} />
                <button className="answear_btn" onClick={e => checkAns(e)}>
                    <span>Проверить</span>
                </button>
            </div>

        </>
    )
}

export default Task2