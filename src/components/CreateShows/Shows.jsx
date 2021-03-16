import React, { useState } from 'react'
import "../../styles/create-show.css"
import { useHistory } from "react-router-dom";
import Main from "./upload"

const API = process.env.REACT_APP_API


export default function CreateShow() {
    const [state, setstate] = useState([])
    const [nameshow, setshow] = useState("")
    const [precio, setPrecio] = useState("")
    const [fecha, setfecha] = useState("")
    const [hora, sethora] = useState("")
    const [descripcion, setdescripcion] = useState("")
    const [nombreArtista, setnombreArtista] = useState("")
    const [generoArtista, setgeneroArtista] = useState("")
    const [nombre_lugar, setnombre_lugar] = useState("")
    const [direccion, setdireccion] = useState("")
    const [ciudad, setciudad] = useState("")
    const [descripcion_lugar, setdescripcion_lugar] = useState("")


    let history = useHistory()
    // HANLDE CHANGE PARA EL SHOW 
    const handleChange = ({ target }) => {
        switch (target.name) {
            case "name_show":
                setshow(target.value);
                break;
            case "precio":
                setPrecio(target.value);
                break;
            case "fecha":
                setfecha(target.value);
                break;
            case "hora":
                sethora(target.value);
                break;
            case "descripcion_evento":
                setdescripcion(target.value);
                break;
            default:
                return;
        }
    }
    const handleSubmit2 = (e) => {
        e.preventDefault()
        const data = {
            name_show: nameshow,
            price_ticket: precio,
            date: fecha,
            hour: hora,
            description_show: descripcion,
            venue_name: nombre_lugar,
            address: direccion,
            city: ciudad,
            description: descripcion_lugar,
            artist_name: nombreArtista,
            genre_artist: generoArtista
        }
        setstate([...state, data])
        fetch(`${API}/create-show`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "data": data, })
        }).then(
            function (response) {
                if (response.status === 200)
                    history.push('/profile')
                console.log(response);
            }
        ).catch(
            (error) => console.log(error)
        )
    }
    console.log("SOY EL ESTADO INICIAL PADRE >>>", state)
    return (
        <>
            <div className="all">
                <div className="content">
                    <div className="steps">
                        <div className="step-current">
                            <h4>Paso 1</h4>
                        </div>
                        <div>
                            <h4>Paso 2</h4>
                        </div>
                        <div>
                            <h4>Paso 3</h4>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit2}>
                        <div>
                            <h2>Datos del evento</h2>
                        </div>
                        <div className="forms">
                            {/* CREAR SHOWS */}
                            <div className="SHOWS">
                                <h1>CREAR SHOW</h1>
                                <div className="div-inputs">
                                    <label><b>*</b> Nombre del evento:</label><br></br>
                                    <input required className="inputs" onChange={handleChange} name="name_show" value={nameshow} type="text" placeholder="Nombre de el show" />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b> Precio Entrada</label><br></br>
                                    <input required className="inputs" type="text" name="precio" value={precio} onChange={handleChange} placeholder="Precio" />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b> Fecha:</label><br></br>
                                    <input required className="inputs" type="date" name="fecha" value={fecha} onChange={handleChange} />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b> Hora:</label><br></br>
                                    <input required className="inputs" name="hora" value={hora} type="time" onChange={handleChange} />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b> Descripción del evento:</label><br></br>
                                    <textarea required placeholder="Haz una breve descripción de la tematica de tu show" name="descripcion_evento" value={descripcion} onChange={handleChange} className="inputs"></textarea>
                                </div>
                                <div className="div-inputs">
                                    <input type="file" className="upload-img" name="file" id="file" accept="image/png, image/jpeg image/jpg" />
                                    <label className="label-file" htmlFor="file">Subir foto ⇪</label>
                                </div>
                            </div>
                            {/* CREAR ARTISTAS */}
                            <div className="ARTISTAS">
                                <h1>CREAR ARTISTA</h1>
                                <div className="div-inputs">
                                    <label><b>*</b> Nombre del artista/Banda:</label><br></br>
                                    <input required className="inputs" name="name_artist" value={nombreArtista} onChange={(e) => setnombreArtista(e.target.value)} type="text" placeholder="Nombre del artista o banda" />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b> Género:</label><br></br>
                                    <input required className="inputs" type="text" name="genero" value={generoArtista} onChange={(e) => setgeneroArtista(e.target.value)} placeholder="Género del artista" />
                                </div>
                                <div className="div-inputs">
                                    <Main></Main>
                                </div>
                            </div>
                            {/* CREAR LUGARES */}
                            <div className="LUGARES">
                                <h1>CREAR LUGAR</h1>
                                <div className="div-inputs">
                                    <label><b>*</b> Nombre del establecimiento o lugar::</label><br></br>
                                    <input required className="inputs" name="nombre_lugar" value={nombre_lugar} onChange={(e) => setnombre_lugar(e.target.value)} type="text" placeholder="Nombre de tu establecimiento" />
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b>Dirección:</label><br></br>
                                    <input required className="inputs" type="text" name="direccion" value={direccion} onChange={(e) => setdireccion(e.target.value)} placeholder="Dirección del establecimiento" />
                                </div>
                                <div className="div-inputs">
                                    <label htmlFor="ciudad"><b>*</b>Elige una Ciudad:</label>
                                    <select required name="ciudad" value={ciudad} onChange={(e) => setciudad(e.target.value)} id="ciudad">
                                        <option value="0">Seleccione una ciudad</option>
                                        <option value="Bogota">Bogota</option>
                                        <option value="Medellín">Medellín</option>
                                        <option value="Cali">Cali</option>
                                        <option value="Cartagena">Cartagena</option>
                                    </select>
                                </div>
                                <div className="div-inputs">
                                    <label><b>*</b>Descripción de tu establecimiento:</label><br></br>
                                    <textarea required name="descripcion_lugar" value={descripcion_lugar} onChange={(e) => setdescripcion_lugar(e.target.value)} className="inputs" placeholder="Escribe una breve descripcion del establecimiento"></textarea>
                                </div>
                                <div className="btn-next-step">
                                    <input type="submit" value="Subir" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
