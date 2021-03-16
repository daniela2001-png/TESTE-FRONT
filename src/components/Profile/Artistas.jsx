import React from 'react';


export default function Artistas({ artistas }) {
    return (
        <div>
            <h6>Artistas Y Generos</h6>
            {
                artistas.length > 0 && (
                    artistas.map((artista, index) => (
                        <>
                            <ul key={index}>
                                <li>{artista?.artist_name} <strong>{artista?.genre_artist}</strong></li>
                            </ul>
                        </>
                    ))
                )
            }
        </div>
    )
}