import React from 'react'

export default function NameOrganizer({data}) {
    return (
        <div>
            {
                data.map((element) => <h1>{JSON.stringify(element[0].names_organizer)}</h1>)
            }
        </div>
    )
}
