import './Loader.css'

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>
        <h2 className="loader-text gradient-text">Loading Portfolio</h2>
        <div className="loader-bar">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  )
}

export default Loader


