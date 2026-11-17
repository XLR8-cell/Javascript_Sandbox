const projects = [
  { id: 1, title: "Ruiru borehole", ward: "Ruiru", budgetKes: 3_200_000, votes: 412 },
  { id: 2, title: "Juja health post", ward: "Juja", budgetKes: 5_800_000, votes: 987 },
  { id: 3, title: "Thika road walkway", ward: "Thika", budgetKes: 1_450_000, votes: 233 },
  { id: 4, title: "Githurai market", ward: "Githurai", budgetKes: 2_100_000, votes: 654 },
];

// 1. formatKes(amount) -> "KES 5,800,000"
const formatKes = (amount) => `KES ${amount.toLocaleString()}`;

// 2. classify(votes) -> High / Moderate / Low using early returns
const classify = (votes) => {
  if (votes >= 600) return "High";
  if (votes >= 250) return "Moderate";
  return "Low";
};

// 3. projectLine(project, index) -> formats a single row in the report
const projectLine = (project, index) => {
  const num = `${index + 1}.`.padEnd(4, " ");
  const title = project.title.padEnd(22, " ");
  const budget = formatKes(project.budgetKes).padEnd(16, " ");
  const votes = `${project.votes} votes`.padEnd(12, " ");
  const band = classify(project.votes);

  return `${num}${title}${budget}${votes}${band}`;
};

// 4. summarise(list, getValue) -> Generic callback reducer for calculations
const summarise = (list, getValue) =>
  list.reduce((sum, item) => sum + getValue(item), 0);

// 5. report(list) -> Generates output using sort, map, and join (No loops)
const report = (list) => {
  const header = "--- Kiambu County: public participation report ---\n";

  // Sort descending by votes without mutating original array
  const sortedList = [...list].sort((a, b) => b.votes - a.votes);

  // Transform each project into a line and combine with newlines
  const lines = sortedList.map(projectLine).join("\n");

  // Call summarise twice: once for shillings, once for votes
  const totalBudget = summarise(sortedList, (p) => p.budgetKes);
  const totalVotes = summarise(sortedList, (p) => p.votes);

  const footer = `\n---\nProjects: ${list.length}   Total budget: ${formatKes(totalBudget)}   Total votes: ${totalVotes.toLocaleString()}`;

  return `${header}${lines}${footer}`;
};

// Execute and log the final report
console.log(report(projects));