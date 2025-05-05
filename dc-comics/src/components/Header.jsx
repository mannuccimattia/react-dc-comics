const Header = () => {
  return (
    <header>
      <div className="container">
        <figure>
          <img src="../src/assets/img/dc-logo.png" alt="logo DC comics" />
        </figure>
        <nav>
          <ul>
            <li><a href="#">Characters</a></li>
            <li><a href="#" className="active">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Tv</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Collectibles</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">Fans</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
