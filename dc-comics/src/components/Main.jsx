import BottomMain from "./BottomMain"
import ListComics from "./ListComics"

const Main = () => {
  return (
    <main>
      <section className="top-main">
        <div id="jumbotron">
          <span id="flag">CURRENT SERIES</span>
        </div>
        <div className="container">
          <div className="comics-wrapper">
            <ListComics></ListComics>
          </div>
          <div className="btn-wrapper">
            <div id="load-btn">
              <a href="#">LOAD MORE</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-main">
        <div className="container">
          <BottomMain></BottomMain>
        </div>
      </section>
    </main>
  )
}

export default Main
