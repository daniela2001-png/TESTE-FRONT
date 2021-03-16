import React from 'react'
import Componente from "./Componente"
// import Filtro from '../Filtro'


export default function Profile({ data }) {
    let shows = data["shows"]
    //const show = shows.filter(show => show.name.contains(handle()))
    let result = shows.map(item => (item[1]))
    return (
        <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexWrap: "wrap" }} className="Hello">
                {
                    result.map((artista, index) => (
                        <>
                            <Componente genre={artista.genre_artist} show={shows[index][0]} data={artista} city_description={shows[index][2]} />
                        </>
                    ))

                }
            </div>
        </div>
    )
}