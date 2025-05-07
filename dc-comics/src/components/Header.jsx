const links = [
  {
    id: 1,
    href: "#",
    label: "Characters",
    current: false,
  },
  {
    id: 2,
    href: "#",
    label: "Comics",
    current: true,
  },
  {
    id: 3,
    href: "#",
    label: "Movies",
    current: false,
  },
  {
    id: 4,
    href: "#",
    label: "TV",
    current: false,
  },
  {
    id: 5,
    href: "#",
    label: "Games",
    current: false,
  },
  {
    id: 6,
    href: "#",
    label: "Collectibles",
    current: false,
  },
  {
    id: 7,
    href: "#",
    label: "Videos",
    current: false,
  },
  {
    id: 8,
    href: "#",
    label: "Fans",
    current: false,
  },
  {
    id: 9,
    href: "#",
    label: "News",
    current: false,
  },
  {
    id: 10,
    href: "#",
    label: "Shop",
    current: false,
  }
]

const Header = () => {

  const renderLinks = () => {
    return links.map(({ id, href, label, current }) => (
      <li key={`link-${id}`}>
        <a href={href} className={current ? "active" : ""}>
          {label}
        </a>
        <div className="mark"></div>
      </li>
    ))
  }

  return (
    <header>
      <div className="container">
        <figure>
          <img src="../src/assets/img/dc-logo.png" alt="logo DC comics" />
        </figure>
        <nav>
          <ul>
            {renderLinks()}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
