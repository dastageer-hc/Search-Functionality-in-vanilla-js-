function calculateTotalPeople(levels) {
    // Initial person
    let totalPeople = 1;

    // Loop through each level
    for (let i = 1; i <= levels; i++) {
        // Each person at this level adds 3 people
        totalPeople += 3 ** i;
    }

    return totalPeople;
}


const totalPeople = calculateTotalPeople(20);

// Format the number with commas
const formattedTotalPeople = totalPeople.toLocaleString();

console.log(`Total number of people after 12 levels: ${formattedTotalPeople}`);