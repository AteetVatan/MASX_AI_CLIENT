import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import './App.css';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [count, setCount] = useState(0);
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
	<div className="dashboard-container">
	  <div className="globe-bg">
		<Globe
		  ref={globeEl}
		  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
		  backgroundColor="rgba(0,0,0,1)"
		/>
	  </div>

	  <div className="ui-overlay">
		<div className="glass-panel">
		  <h1 className="title">MASX AI</h1>
		  <p className="subtitle">The Master AI for Strategic Intelligence and Execution</p>
		  <p className="mission">
			Geopolitical insight, strategic simulation, and AI-powered decision-making —
			built for those who shape the world.
		  </p>

		  <button className="cta-button" onClick={() => setCount(count + 1)}>
			Test Interaction: {count}
		  </button>
		</div>

		<footer className="footer">
		  MASX AI © 2025 | Intelligence Engine for the Future
		</footer>
	  </div>
	</div>
  );
}

export default App;
