const ComicCard = ({ thumb, series }) => {
  return (
    <div className='comic-card'>
      <img src={thumb} alt="" />
      <h3>{series}</h3>
    </div>
  )
}

export default ComicCard
