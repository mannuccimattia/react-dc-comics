import BottomMain from "./BottomMain"
import ListComics from "./ListComics"

const Main = () => {
  return (
    <main>
      <section className="top-main">
        <div className="container">
          <ListComics></ListComics>
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
