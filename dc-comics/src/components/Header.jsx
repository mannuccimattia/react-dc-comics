const Header = () => {
  return (
    <header>
      <div className="container">
        <figure>
          <img src="../src/assets/img/dc-logo.png" alt="logo DC comics" />
        </figure>
        <nav>
          <ul>
            <li>
              <a href="#">Characters</a>
              <div className="mark"></div>
            </li>
            <li>
              <a href="#" className="active">Comics</a>
              <div className="mark"></div>
            </li>
            <li>
              <a href="#">Movies</a>
              <div className="mark"></div>
            </li>
            <li>
              <a href="#">Tv</a>
              <div className="mark"></div>
            </li>
            <li>
              <a href="#">Games</a>
              <div className="mark"></div>
            </li>
            <li>
              <a href="#">Collectibles</a>
              <div className="mark"></div>
            </li>
            <li>
              <a href="#">Videos</a>
              <div className="mark"></div>
            </li>
            <li>
              <a href="#">Fans</a>
              <div className="mark"></div>
            </li>
            <li>
              <a href="#">News</a>
              <div className="mark"></div>
            </li>
            <li>
              <a href="#">Shop</a>
              <div className="mark"></div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
