import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"

import SupaCard from "../components/supaCard"

const Home = () => {

  const [fetchError, setFetchError] = useState(null)
  const [supatable, setSupatable] = useState(null)

  useEffect(() => {
    const fetchSupatable = async () => {
      const { data, error } = await supabase
        .from('supatable')
        .select()

      if (error) {
        setFetchError('Veri gelmedi! Hata var.')
        setSupatable(null)
        console.log(error)
      }
      if (data) {
        setSupatable(data)
        setFetchError(null)
      }

    }
    fetchSupatable()

  }, [])

  return (
    <div className="page home">

      {fetchError && (<p>{fetchError}</p>)}

      {supatable && (
        <div className="supatable">
          {/* Buton */}
          <div className="supatable-grid">
            {supatable.map(supatables => (
              <SupaCard key={supatables.id} supatables={supatables} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home