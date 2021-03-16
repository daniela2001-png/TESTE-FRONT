import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import Artistas from './Artistas'
import "../../assets/styles/components/grids.css"

export default function Componente({ data, show, city_description }) {

    return (
        <>
            <div style={{ display: "flex", flex: "1 50%", justifyContent: "flex-end", padding: "20px" }}>
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Image
                                floated='right'
                                size='mini'
                                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                            />
                            <h6>Estado del show: <h5>{show.status_show}</h5></h6>
                            <Card.Meta><p>Precio Ticket: {show.price_ticket}</p></Card.Meta>
                            <Artistas artistas={data}></Artistas>
                            <Card.Description>
                                {city_description.description}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        </>
    )

}