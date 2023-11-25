import './Tasks.css'
import Task1 from '../../components/Task1/Task1'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Tasks() {

    const count = useSelector((state) => state.counter.value)

    const getTask = (count) => {
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

    return (
        <div className='container'>
            <h1 className="tasks_header">Вариант работы по информатике:</h1>
            <div className="tasks_block">
                {
                    getTask(count)
                }
                {/* <div className="task_block">
                    <Task1 />
                </div>
                <div className="task_block">
                    <Task1 />
                </div>
                <div className="task_block">
                    <Task1 />
                </div>
                <div className="task_block">
                    <Task1 />
                </div>
                <div className="task_block">
                    <Task1 />
                </div>
                <div className="task_block">
                    <Task1 />
                </div>
                <div className="task_block">
                    <Task1 />
                </div> */}
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