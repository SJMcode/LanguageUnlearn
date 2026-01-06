export const readingData = {
    id: 'r1',
    title: 'The Future of Renewable Energy',
    passage: `The transition to renewable energy sources is no longer a matter of choice, but a necessity for the survival of industrial civilization. As fossil fuels deplete and the impact of climate change becomes more pronounced, governments worldwide are looking towards solar, wind, and hydroelectric power as the primary pillars of their energy strategies.

One of the most significant challenges in this transition is the intermittency of renewable sources. Unlike coal or natural gas plants, which can provide a steady base load of electricity, solar and wind power depend on weather conditions. This has led to a surge in research into energy storage technologies, such as lithium-ion batteries and green hydrogen.

Furthermore, the decentralization of energy production is changing the way utilities operate. Instead of massive centralized power plants, we are seeing the rise of microgrids and household solar installations. This shift empowers individuals to become "prosumers"—both consumers and producers of energy.`,
    questions: [
        {
            id: 1,
            type: 'multiple-choice',
            question: 'What is mentioned as a primary reason for transitioning to renewable energy?',
            options: [
                'Completion of industrial civilization',
                'Necessity for survival',
                'A matter of choice',
                'Reduction in government spending'
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            type: 'multiple-choice',
            question: 'What is a major challenge associated with solar and wind power?',
            options: [
                'They are too expensive',
                'They are not widely available',
                'Their production is intermittent',
                'They require massive centralized plants'
            ],
            correctAnswer: 2
        },
        {
            id: 3,
            type: 'text-input',
            question: 'What term is used to describe individuals who both consume and produce energy?',
            correctAnswer: 'prosumers'
        }
    ]
};
