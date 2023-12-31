import './Main.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCountFirst, setCountSecond, setCountThird } from '../../store/countSlice'
import { useState } from 'react'

function Main() {

    const dispatch = useDispatch()

    const isNum = (str) => {
        return /^\d+$/.test(str)
    }

    const changeInp = (e, num) => {
        const value = e.target.value
        if (isNum(value) && +value < 30) {
            switch (num) {
                case 1:
                    dispatch(setCountFirst(value))
                    break;
                case 2:
                    dispatch(setCountSecond(value))
                    break;
                case 3:
                    dispatch(setCountThird(value))
                    break;

                default:
                    break;
            }
        }
        // isNum(value) ? dispatch(setCount(value)) : e.target.value.substring(0, e.target.value.length - 1)
    }

    return (
        <div className='App'>
            <div className="container">
                <h1 className="main_header">Генератор заданий <br /> по информатике</h1>
                <h3 className='main_description'>Тренажер , который поможет вам подготовиться к экзаменам и самостоятельным работам по информатике</h3>
                <input className='main_input' type="text" placeholder='Тип 1' onChange={e => changeInp(e, 1)} />
                <input className='main_input' type="text" placeholder='Тип 2' onChange={e => changeInp(e, 2)} />
                <input className='main_input' type="text" placeholder='Тип 3' onChange={e => changeInp(e, 3)} />
                <Link to={'/tasks'}>
                    <button className="start_btn">
                        <span>Начать</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Main