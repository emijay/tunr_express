var React = require("react");

class Home extends React.Component {
  render() {

    const artist = this.props.artist.map(element=> {
        return(<div className="card text-center bg-light mb-3 border-dark mb-3" style={{ width: 300, margin: 10 }}>
                    <img className="card-img-top" src={element.photo_url} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{element.name}</h5>
                        <p className="card-text">{element.nationality}</p>
                        <a href={"/artists/"+element.id} class="btn btn-info align-bottom">View Artist</a>
                    </div>
                </div>
        )
    });

    return (
      <html>
        <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link href="https://fonts.googleapis.com/css?family=Lora&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        </head>

        <body style={{backgroundImage : 'url("https://wallpaperaccess.com/full/646093.png")', backgroundPosition : "center", backgroundRepeat : "no-repeat", backgroundSize : "cover", height : "100vh", backgroundAttachment : "fixed"}}>

        <div className="container mx-auto">
                <h1 className="text-center mt-5" style={{fontFamily : "Lora, serif", color:'white'
}}>This Season's Hottest Artists</h1>
            <div className = "row mt-3" style={{ justifyContent : "center" }}>
                {artist}
            </div>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;