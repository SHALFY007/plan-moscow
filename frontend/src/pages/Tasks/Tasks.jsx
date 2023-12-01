import './Tasks.css'
import Task1 from '../../components/Task1/Task1'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Task2 from '../../components/Task2/Task2'
import Task3 from '../../components/Task3/Task3'

function Tasks() {

    const countFirst = useSelector((state) => state.counter.valueFirst)
    const countSecond = useSelector((state) => state.counter.valueSecond)
    const countThird = useSelector((state) => state.counter.valueThird)

    const getTaskFirst = (count) => {
        let cont = []
        for (let i = 0; i < +count; i++) {
            const ind = i
            cont.push(
                <div className="task_block" key={ind}>
                    <Task1 num={+ind+1}/>
                </div>
            )
        }
        return cont
    }

    const getTaskSecond = (count) => {
        let cont = []
        for (let i = 0; i < +count; i++) {
            const ind = i
            cont.push(
                <div className="task_block" key={ind}>
                    <Task2 num={+ind+1}/>
                </div>
            )
        }
        return cont
    }

    const getTaskThird = (count, block) => {
        let cont = []
        for (let i = 0; i < +count; i++) {
            const ind = i
            cont.push(
                <div className="task_block" key={ind}>
                    <Task3 num={+ind+1}/>
                </div>
            )
        }
        return cont
    }

    return (
        <div className='container'>
            <h1 className="tasks_header">Вариант работы по информатике:</h1>
            <div className="tasks_block">
                {
                    getTaskFirst(countFirst)
                }
                <hr />
                {
                    getTaskSecond(countSecond)
                }
                <hr />
                {
                    getTaskThird(countThird)
                }
            </div>
            <Link to={'/'}>
                <button className="dev_button">
                    <span>Вернуться</span>
                </button>
            </Link>
        </div>
    )
}

export default Tasks