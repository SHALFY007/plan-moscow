import './Development.css'
import { Link } from 'react-router-dom'

function Development() {
    return (
        <div className="development">
            <h1 className="dev_header">
                Задания находятся в разработке
            </h1>
            <Link to={'/'}>
                <button className="dev_button">
                    <span>Вернуться</span>
                </button>
            </Link>
        </div>
    )
}

export default Development