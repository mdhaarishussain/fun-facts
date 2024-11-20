const facts = [
    "I am 20 years old and have a passion for exploring historical landmarks.",
    "I have visited over 10 historical landmarks in the past year alone.",
    "I love learning about the history and stories behind each landmark I visit.",
    "I am planning a trip to visit the ancient ruins of Machu Picchu next year.",
    "I enjoy sharing my experiences and photos of historical sites on social media."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
