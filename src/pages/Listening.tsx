import { useState } from 'react';
import { listeningData } from '../data/listeningData';
import {
    Play,
    Pause,
    Volume2,
    CheckCircle2,
    ChevronRight,
    RotateCcw
} from 'lucide-react';
import '../styles/Practice.css';

const Listening = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [answers, setAnswers] = useState<Record<number, any>>({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionChange = (questionId: number, optionIndex: number) => {
        if (submitted) return;
        setAnswers({ ...answers, [questionId]: optionIndex });
    };

    const handleInputChange = (questionId: number, value: string) => {
        if (submitted) return;
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleSubmit = () => {
        let currentScore = 0;
        listeningData.questions.forEach((q) => {
            if (q.type === 'multiple-choice') {
                if (answers[q.id] === q.correctAnswer) currentScore++;
            } else if (q.type === 'text-input') {
                if (answers[q.id]?.toLowerCase().trim() === (q.correctAnswer as string).toLowerCase()) currentScore++;
            }
        });
        setScore(currentScore);
        setSubmitted(true);
    };

    const reset = () => {
        setAnswers({});
        setSubmitted(false);
        setScore(0);
        setIsPlaying(false);
    };

    return (
        <div className="practice-page">
            <header className="practice-header">
                <div className="practice-title">
                    <h1>Listening Skills</h1>
                    <p>{listeningData.title}</p>
                </div>
            </header>

            <div className="audio-player-card card">
                <div className="audio-info">
                    <p>{listeningData.description}</p>
                </div>
                <div className="audio-controls">
                    <button className="play-btn" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ? <Pause fill="white" /> : <Play fill="white" />}
                    </button>
                    <div className="progress-bar-mock">
                        <div className={`progress-fill ${isPlaying ? 'anim-progress' : ''}`}></div>
                    </div>
                    <Volume2 size={20} className="volume-icon" />
                </div>
            </div>

            <div className="practice-content single-column">
                <div className="content-panel questions-panel">
                    <div className="card">
                        <h3>Questions</h3>
                        {listeningData.questions.map((q, i) => (
                            <div key={q.id} className="question-block">
                                <p className="question-text">
                                    <span className="question-number">{i + 1}.</span> {q.question}
                                </p>

                                {q.type === 'multiple-choice' ? (
                                    <div className="options-list">
                                        {q.options?.map((opt, idx) => (
                                            <label
                                                key={idx}
                                                className={`option-item ${answers[q.id] === idx ? 'selected' : ''} ${submitted && idx === q.correctAnswer ? 'correct' : ''} ${submitted && answers[q.id] === idx && idx !== q.correctAnswer ? 'incorrect' : ''}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name={`q-${q.id}`}
                                                    checked={answers[q.id] === idx}
                                                    onChange={() => handleOptionChange(q.id, idx)}
                                                    disabled={submitted}
                                                />
                                                <span className="option-label">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="input-block">
                                        <input
                                            type="text"
                                            className={`text-input ${submitted ? (answers[q.id]?.toLowerCase().trim() === (q.correctAnswer as string).toLowerCase() ? 'correct' : 'incorrect') : ''}`}
                                            placeholder="Type your answer..."
                                            value={answers[q.id] || ''}
                                            onChange={(e) => handleInputChange(q.id, e.target.value)}
                                            disabled={submitted}
                                        />
                                        {submitted && (
                                            <p className="correct-answer">Correct: {q.correctAnswer}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}

                        {!submitted ? (
                            <button className="btn-submit" onClick={handleSubmit}>
                                Submit Answers <ChevronRight size={18} />
                            </button>
                        ) : (
                            <div className="results-block">
                                <div className="score-display">
                                    <CheckCircle2 size={32} />
                                    <span>Your Score: {score} / {listeningData.questions.length}</span>
                                </div>
                                <button className="btn-reset" onClick={reset}>
                                    <RotateCcw size={18} /> Try Again
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listening;
