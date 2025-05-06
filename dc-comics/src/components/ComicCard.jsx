const ComicCard = ({ thumb, series }) => {

  return (
    <div className='comic-card'>
      <a href="#">
        <img src={thumb} alt="" />
      </a>
      <h5>{series}</h5>
    </div>
  )
}

export default ComicCard
