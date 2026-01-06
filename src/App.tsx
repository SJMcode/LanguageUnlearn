import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Listening from './pages/Listening';
import Reading from './pages/Reading';

// Temporary dummy components for other pages
const Writing = () => (
  <div className="practice-page">
    <header className="practice-header">
      <div className="practice-title">
        <h1>Writing Skills</h1>
        <p>IELTS Academic Writing Task 2</p>
      </div>
    </header>
    <div className="card">
      <h3>The Prompt</h3>
      <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>
        "In many countries, the quality of life in large cities is decreasing. Discuss the causes and solutions."
      </p>
      <textarea
        className="text-input"
        style={{ minHeight: '300px', resize: 'vertical', marginBottom: '24px' }}
        placeholder="Write your essay here (at least 250 words)..."
      ></textarea>
      <button className="btn-submit">Submit for Feedback</button>
    </div>
  </div>
);

const Speaking = () => (
  <div className="practice-page">
    <header className="practice-header">
      <div className="practice-title">
        <h1>Speaking Skills</h1>
        <p>Part 2: Cue Card Practice</p>
      </div>
    </header>
    <div className="card" style={{ textAlign: 'center', padding: '48px' }}>
      <h3>Cue Card</h3>
      <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '32px' }}>
        "Describe a book you have recently read that you found particularly interesting."
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
        <button className="play-btn" style={{ width: '80px', height: '80px', backgroundColor: 'var(--danger)' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: 'white', borderRadius: '2px' }}></div>
        </button>
      </div>
      <p style={{ marginTop: '24px', color: 'var(--text-secondary)' }}>Click to start recording your response (2 minutes)</p>
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="listening" element={<Listening />} />
        <Route path="reading" element={<Reading />} />
        <Route path="writing" element={<Writing />} />
        <Route path="speaking" element={<Speaking />} />
      </Route>
    </Routes>
  );
}

export default App;
