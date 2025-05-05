import BottomMain from "./BottomMain"

const Main = () => {
  return (
    <main>
      <section className="top-main">
        <div className="container">
          <h2>--&gt; Content goes here &lt;--</h2>
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
