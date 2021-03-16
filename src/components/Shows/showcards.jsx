import Image1 from '../../assets/images/show1.jpeg'
import './popup_styles.css'


export const ShowsRender = ({data}) => {
  console.log(data)
  let shows = data.map((show) => (show[0]))
  let artists = data.map((artist) => (artist[1]))
  let venue = data.map((venue) => (venue[2]))
  let show = shows.map((sh) => (sh))
  console.log(shows)
  console.log(artists)
  console.log(venue)

  return (
    <div className="showscontainer">
      <div><h1>Shows</h1></div>
      <div className="showswrapper">    
        {show.map((sh, index) => {
          return (
            <>
              <div className="showcard">
                <div className="cardvisible">
                  <img src={Image1}></img>
                  <div className="showinfo">
                    <h3 >{sh.name_show}</h3>
                    <p>Entrada: {sh.price_ticket}.<br></br>{sh.date.slice(0, 11)}</p>
                    <a href={`#${sh.id}`} className="button-opn-popup">Ver mas</a>
                  </div>
                </div>
                <div class="container-all" id={`${sh.id}`}>
                <div className="popup">
                  <div className="hiddenimg">
                    <img src={Image1}></img>
                  </div>
                  <div className="container-text">
                    <h4>Status</h4>
                    <div className="popup-show-cont">
                      <h3>{sh.name_show}</h3>
                      <div className="description-date">
                        <div className="description"><h5>Descripción</h5><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptas mollitia doloribus est consequuntur laboriosam molestias eius! Ea, facere dicta. Omnis quidem quis sit quaerat ratione aut quo ex tempore.</p></div>
                        <div className="date-hour">
                          <p>Fecha: {sh.date.slice(0, 11)}</p>
                          <p>hora: {sh.hour}</p>
                        </div>
                      </div>
                      <p>{venue[index].address}</p>
                      <div className="description-date">
                        <div className="description">
                          <h5>Bandas invitadas</h5>
                        {
                          artists[index].map((artist) => {
                            return (
                              <>
                                <div className="date-hour">
                                  <p>{artist.artist_name}</p>
                                  <p>{artist.genre_artist}</p>
                                </div>
                              </>
                            )
                          })
                        }
                        </div>
                      </div>
                    </div>
                    <div className="precio">
                      <p>{sh.price_ticket}</p>
                    </div>
                  </div>
                  <a href="#" className="btn-close-popup">X</a>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
}
