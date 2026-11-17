// 1. Build the four-project array
const projects = [
  { id: 1, title: "Ruiru borehole", ward: "Ruiru", budgetKes: 3_200_000, votes: 412 },
  { id: 2, title: "Juja health post", ward: "Juja", budgetKes: 5_800_000, votes: 987 },
  { id: 3, title: "Thika road walkway", ward: "Thika", budgetKes: 1_450_000, votes: 233 },
  { id: 4, title: "Githurai market", ward: "Githurai", budgetKes: 2_100_000, votes: 654 },
];

// 2. Log count, first title, and last title using .length (not hardcoded indices)
console.log("Count:", projects.length);
console.log("First title:", projects[0].title);
console.log("Last title:", projects[projects.length - 1].title);

// 3. Push a fifth project: Kalimoni dispensary, KES 900,000, 78 votes
projects.push({
  id: 5,
  title: "Kalimoni dispensary",
  ward: "Kalimoni",
  budgetKes: 900_000,
  votes: 78,
});

// 4. All five titles as one comma-separated sentence
const titlesSentence = projects.map((p) => p.title).join(", ");
console.log("All Titles:", titlesSentence);

// 5. Total budget and total votes
const totalBudget = projects.reduce((sum, p) => sum + p.budgetKes, 0);
const totalVotes = projects.reduce((sum, p) => sum + p.votes, 0);
console.log(`Total Budget: KES ${totalBudget.toLocaleString()}`);
console.log(`Total Votes: ${totalVotes}`);

// 6. Titles of every project with more than 400 votes
const popularTitles = projects
  .filter((p) => p.votes > 400)
  .map((p) => p.title);
console.log("Projects with > 400 votes:", popularTitles);

// 7. Find project id 3 by its id (not by array index position)
const projectThree = projects.find((p) => p.id === 3);
console.log("Project ID 3:", projectThree);

// 8. Does every project cost under KES 6,000,000?
const allUnder6m = projects.every((p) => p.budgetKes < 6_000_000);
console.log("Are all projects under KES 6,000,000?", allUnder6m);