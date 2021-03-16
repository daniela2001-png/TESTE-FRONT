import React from 'react'

export default function DataOrganizer({data}) {
    // console.table(data);

    // const req = Object.entries(data);
    return (
        <div>
            {
                data.map((element) => <h1>{JSON.stringify(element[0])}</h1>)
            }
            {/* <div>
                {
                    data.map((element) => <h1>{JSON.stringify(element[0].names_organizer)}</h1>)
                }
            </div> */}
        </div>
    )
}
