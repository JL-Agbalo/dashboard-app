// Helper function to generate all unique squad names
function getAllUniqueSquadNames() {
    const adjectives = ["Swift", "Brave", "Mighty", "Silent", "Fierce", "Clever", "Noble", "Wild", "Bold", "Loyal"];
    const animals = ["Lions", "Wolves", "Eagles", "Tigers", "Sharks", "Falcons", "Bears", "Panthers", "Cobras", "Hawks"];
    const names = [];
    for (const adj of adjectives) {
        for (const animal of animals) {
            names.push(`${adj} ${animal}`);
        }
    }
    // Shuffle the array
    for (let i = names.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [names[i], names[j]] = [names[j], names[i]];
    }
    return names;
}

const uniqueSquadNames = getAllUniqueSquadNames().slice(0, 50);

const squadData = [];

for (let i = 1; i <= 50; i++) {
    squadData.push({
        id: i,
        squad: uniqueSquadNames[i - 1],
        activity: Math.floor(Math.random() * 100) + 50,
        score: Math.floor(Math.random() * 30) + 70,
        date: `2024-05-${(i % 30 + 1).toString().padStart(2, '0')}`,
    });
}

export default squadData;