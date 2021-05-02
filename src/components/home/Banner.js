const Banner = () => {
  return (
    <div
      className='banner'
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/img/banner-back.png')`,
      }}>
      <p className='banner-top'>event</p>
      <h2 className='banner-title'>London Fashion Week September 2017</h2>
      <h3 className='banner-subtitle'>15th - 19th September 2017 </h3>
    </div>
  )
}

export default Banner
