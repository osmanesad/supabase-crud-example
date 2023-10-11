import { Link } from "react-router-dom"
import supabase from "../config/supabaseClient"

const SupaCard = ({supatables}) => {

    const handleDelete = async () => {
        const { data, erorr } = await supabase
        .from("supatable")
        .delete()
        .eq("id",supatables.id)

        if (erorr) {
            console.log(erorr)
        }

        if (data) {
            console.log(data)
        }

    }
    
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
                <i className="material-icons" onClick={handleDelete}>delete</i>
            </div>
        </div>

    )
}

export default SupaCard