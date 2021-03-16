import React from 'react'
import "../styles/error.css"

export default function PageError() {
    return (
        <div>
            <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css' />
            <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Arvo' />
            <body>
                <section class="page_404">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 ">
                                <div class="col-sm-10 col-sm-offset-1  text-center">
                                    <div class="four_zero_four_bg">
                                        <h1 class="text-center ">404</h1>
                                    </div>
                                    <div class="contant_box_404">
                                        <h3 class="h2">
                                            Oops! Página No Encontrada
                                        </h3>
                                        <p>Vamos a Tempo!</p>
                                        <a href="/" class="link_404">Tempo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </div>
    )
}
