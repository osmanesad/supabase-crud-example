const SupaCard = ({supatables}) => {
    return (
        <div className="supatable-card">
            <h2>{supatables.title}</h2>
            <p>{supatables.method}</p>
            <div className="rating">
                {supatables.rating}
            </div>
        </div>

    )
}

export default SupaCard