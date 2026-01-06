import { useState } from 'react';
import { readingData } from '../data/readingData';
import { CheckCircle2, ChevronRight, RotateCcw } from 'lucide-react';
import '../styles/Practice.css';

const Reading = () => {
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
        readingData.questions.forEach((q) => {
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
    };

    return (
        <div className="practice-page">
            <header className="practice-header">
                <div className="practice-title">
                    <h1>Reading Skills</h1>
                    <p>{readingData.title}</p>
                </div>
                <div className="practice-timer">
                    <span className="timer-badge">20:00</span>
                </div>
            </header>

            <div className="practice-content split-view">
                <div className="content-panel passage-panel">
                    <div className="card">
                        <h3>Passage</h3>
                        {readingData.passage.split('\n\n').map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </div>

                <div className="content-panel questions-panel">
                    <div className="card">
                        <h3>Questions</h3>
                        {readingData.questions.map((q, i) => (
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
                                    <span>Your Score: {score} / {readingData.questions.length}</span>
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

export default Reading;
