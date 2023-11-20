import './Tasks.css'
import Task1 from '../../components/Task1/Task1'
import { Link } from 'react-router-dom'

function Tasks() {
    return (
        <div className='container'>
            <h1 className="tasks_header">Вариант работы по информатике:</h1>
            <div className="tasks_block">
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
                </div>
                <div className="task_block">
                    <Task1 />
                </div>
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