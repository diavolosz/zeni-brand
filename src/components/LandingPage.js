

import "./LandingPage.scss"


export default function LandingPage() {
  return (
    <div className="page-container">
      <div className="image-wrapper">
        <img className="cinematic-shot" src="img/cinematic-shot.png" alt="landing-page-shot"></img>
      </div>

      <section className="block-wrapper block-1">
        this is block 1
      </section>
      <section className="block-wrapper block-2">
        this is block 2
      </section>
      <section className="block-wrapper block-3">
        this is block 3
      </section>
    </div>
  )
}