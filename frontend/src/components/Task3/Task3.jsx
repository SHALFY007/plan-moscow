import { useEffect, useState } from "react"

function Task3(props) {
    const randint = (min, max) => Math.floor(min + Math.random() * (max - min + 1))
    const randEl = arr => arr[randint(0, arr.length - 1)]

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;

    }

    const words = [
        {
            id: 0,
            0: 'М',
            1: 'П',
            2: 'Й',
            3: 'З',
            4: 'А'
        },
        {
            id: 1,
            0: 'Э',
            1: 'А',
            2: 'Е',
            3: 'Ы',
            4: 'Х'
        },
        {
            id: 2,
            0: 'Ж',
            1: 'Ю',
            2: 'Г',
            3: 'К',
            4: 'И'
        },
        {
            id: 3,
            0: 'Ъ',
            1: 'К',
            2: 'О',
            3: 'Е',
            4: 'С'
        },
        {
            id: 4,
            0: 'З',
            1: 'Э',
            2: 'А',
            3: 'И',
            4: 'Г'
        },
        {
            id: 5,
            0: 'В',
            1: 'Ы',
            2: 'А',
            3: 'И',
            4: 'Ш'
        }
    ]
    const tempTask = [
        {
            id: 0,
            name: '4',
            value: ['0000',
                '0001',
                '0002',
                '0003',
                '0010'
            ]
        },
        {
            id: 1,
            name: '5',
            value: ['00000',
                '00001',
                '00002',
                '00003',
                '00004',
                '00010'
            ]
        }
    ]

    const [name, setName] = useState(randEl(tempTask))
    const [group, setGroup] = useState(randEl(words))
    const [str, setStr] = useState('')
    const [place, setPlace] = useState(getRandomInt(40, 260))
    const [isChecked, setIsChecked] = useState(false)
    const [curAns, setCurAns] = useState('')
    const [answear, setAnswear] = useState(() => {
        if (name.name == '4') {
            let a = { 0: group[0], 1: group[1], 2: group[2], 3: group[3] }
            let counter = 0
            for (let i in a) {
                for (let k in a) {
                    for (let g in a) {
                        for (let j in a) {
                            counter++
                            if (counter == place) {
                                return `${a[i]}${a[k]}${a[g]}${a[j]}`
                            }
                        }
                    }
                }
            }
        } else {
            let a = { 0: group[0], 1: group[1], 2: group[2], 3: group[3], 4: group[4] }
            let counter = 0
            for (let i in a) {
                for (let k in a) {
                    for (let g in a) {
                        for (let j in a) {
                            for (let o in a) {
                                counter++
                                if (counter == place) {
                                    return `${a[i]}${a[k]}${a[g]}${a[j]}${a[o]}`
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    const createStr = (obj) => {
        let strR = ''
        if (name == '4') {
            for (let key in Object.keys(obj)) {
                if (key != 0 && key != 5) {
                    strR = strR + `${obj[key]}, `
                }
            }
        } else {
            for (let key in Object.keys(obj)) {
                if (key != 5) {
                    strR = strR + `${obj[key]}, `
                }
            }
        }

        setStr(strR)
    }

    const changeInp = (e) => {
        e.preventDefault()

        setCurAns(e.target.value)
    }

    const checkAns = (e) => {
        e.preventDefault()
        setIsChecked(true)
    }

    const setWords = (str) => {
        str = str.replaceAll('0', group[0])
        str = str.replaceAll('1', group[1])
        str = str.replaceAll('2', group[2])
        str = str.replaceAll('3', group[3])
        str = str.replaceAll('4', group[4])
        return str
    }

    useEffect(() => {
        createStr(group)
    }, [])

    return (
        <>
            <span className="number">
                {props.num}
            </span>
            <p>
                Все {name.name}-буквенные слова, составленные из букв {str} записаны
                в алфавитном порядке. <br />
                Вот начало списка:
                {
                    name.value.map(tem => {
                        return <p key={tem}>
                            {setWords(tem)}
                            <br />
                        </p>
                    })
                }
                <br />
                Запишите слово, которое стоит на <b>{place}-м</b> месте от начала списка.
            </p>
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

export default Task3