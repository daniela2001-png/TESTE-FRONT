import React from 'react'
import useFetch from "../Hooks/Hooks"
import Tonto from "./index"
import Loading from "../Helpers/Loading"
import Error from "../Helpers/Error"

const API = process.env.REACT_APP_API;


// COMPONENTE DE LOGICA
export const Profile = () => {
    const { data, loading, error } = useFetch(`${API}/profile`)
    if (loading) {
        return <Loading></Loading>
    }
    if (error)
        return <Error></Error>
    if (data) {
        // console.table(data)
        return (
            <div className="wraper">
                <Tonto data={data}></Tonto>
            </div>
        )
    }

}