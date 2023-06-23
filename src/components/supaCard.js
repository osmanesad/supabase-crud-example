import { Link } from "react-router-dom"
const SupaCard = ({supatables}) => {
    
    return (
        <div className="supatable-card">
            <h2>{supatables.title}</h2>
            <p>{supatables.method}</p>
            <div className="rating">
                {supatables.rating}
            </div>
            <div className="buttons">
                <Link to={'/' + supatables.id}>
                <i className="material-icons">edit</i>
                </Link>
            </div>
        </div>

    )
}

export default SupaCard