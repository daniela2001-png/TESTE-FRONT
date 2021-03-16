// import React from 'react'
// import useFetch from "./Hooks/Hooks"
// import Loading from "./Helpers/Loading"
// import Error from "./Helpers/Error"
// import { ShowsRender2 } from "./ShowsHome"
// import "../styles/title-home.css"

// const API = process.env.REACT_APP_API

// export default function Home() {
//     const { data, loading, error } = useFetch(`${API}/`)
//     if (loading) {
//         <Loading></Loading>
//     }
//     if (error) {
//         <Error></Error>
//     }
//     if (data) {
//         return (
//             <>
//                 <div className="container_daniela">
//                     <div className="img_daniela">
//                         <img src="https://i.ibb.co/Kw6B45K/Whats-App-Image-2021-03-12-at-19-28-45.jpg" alt="logo_tempo"></img>
//                     </div>
//                     <h1 className="daniela_title">
//                         <blockquote><font size="+7">Encuentra tus shows a TEMPO</font></blockquote>
//                     </h1>
//                 </div>
//                 <ShowsRender2 data={data}></ShowsRender2>
//             </>
//         )
//     }
// }
import React from 'react'
import useFetch from "./Hooks/Hooks"
import Loading from "./Helpers/Loading"
import Error from "./Helpers/Error"
import Header from './Header';
import Footer from './Footer/index';

import { ShowsRender2 } from "./ShowsHome"
import "../styles/title-home.css"

const API = process.env.REACT_APP_API

export default function Home() {
    const { data, loading, error } = useFetch(`${API}/`)
    if (loading) {
        <Loading></Loading>
    }
    if (error) {
        <Error></Error>
    }
    if (data) {
        return (
            <>
                <Header></Header>
                <div className="container_daniela">
                    <div className="img_daniela">
                        <img src="https://i.ibb.co/Kw6B45K/Whats-App-Image-2021-03-12-at-19-28-45.jpg" alt="logo_tempo"></img>
                    </div>
                    <h1 className="daniela_title">
                        <blockquote><font size="+7">Encuentra tus shows a TEMPO</font></blockquote>
                    </h1>
                </div>
                <ShowsRender2 data={data}></ShowsRender2>
                <Footer></Footer>
            </>
        )
    }
}
