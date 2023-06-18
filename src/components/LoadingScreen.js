import "./LoadingScreen.scss"




export default function LoadingScreen() {
  return (
    <div className="loading-container">
      <div className="name-container">
        <div className="row upper">
          <span className="upper">Z</span>
          <span className="upper">E</span>
        </div>
        <div className="row">
          <span className="lower">I</span>
          <span className="lower">N</span>
        </div>
      </div>

      <div className="center-animation">
        <div className="turning-piece">
          <div className="line skew-1"></div>
          <div className="line skew-2"></div>
          <div className="line skew-3"></div>
          <div className="line skew-4"></div>

        </div>
      </div>
    </div>
  )
}