import './Main.css'
import { Link } from 'react-router-dom'


function Main() {
    return (
        <div className='App'>
            <div className="container">
            <h1 className="main_header">Генератор заданий <br /> по информатике</h1>
            <h3 className='main_description'>Тренажер , который поможет вам подготовиться к экзаменам и самостоятельным работам по информатике</h3>
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