export const listeningData = {
    id: 'l1',
    title: 'University Campus Tour',
    description: 'Listen to a guide explaining the facilities of the new university library.',
    audioUrl: '#', // Mock URL
    questions: [
        {
            id: 1,
            type: 'multiple-choice',
            question: 'Where is the main information desk located?',
            options: [
                'Near the entrance',
                'On the second floor',
                'Behind the lift',
                'In the cafe area'
            ],
            correctAnswer: 0
        },
        {
            id: 2,
            type: 'multiple-choice',
            question: 'What do students need to bring to borrow a laptop?',
            options: [
                'A deposit of $10',
                'Their student ID card',
                'A library membership form',
                'A reference from a tutor'
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            type: 'text-input',
            question: 'The library is closed on which day of the week?',
            correctAnswer: 'Sunday'
        }
    ]
};
