// Step 1. An object
const mary = { name: "Mary Wanjiku", site: "Ruiru Business Park", onDuty: false };
mary.onDuty = true;
console.log(mary.name + " is on duty at " + mary.site);

// Step 2. An array of objects
const checkpoints = [
  { name: "Gate 2", qr: "CP-GATE2", order: 1 },
  { name: "Generator room", qr: "CP-GENROOM", order: 2 },
  { name: "Fence corner C", qr: "CP-FENCEC", order: 3 },
];

for (let checkpoint of checkpoints) {
  console.log(checkpoint.name);
}

// Step 3. A function that uses the objects
function findByQr(list, code) {
  return list.find((item) => item.qr === code);
}

// Step 3 Tests
console.log(findByQr(checkpoints, "CP-GENROOM").name);
console.log(findByQr(checkpoints, "CP-WRONG"));

// Step 4 & 5. Patrol Class (with Order Enforcement)
class Patrol {
  constructor(guard, checkpoints, deadline) {
    this.guard = guard;
    this.checkpoints = checkpoints;
    this.deadline = deadline;
    this.scanned = [];
    this.done = false;
  }

  // Bonus getter: Returns checkpoint names not yet scanned
  get remaining() {
    return this.checkpoints
      .filter((cp) => !this.scanned.includes(cp.name))
      .map((cp) => cp.name);
  }

  scan(code) {
    const cp = findByQr(this.checkpoints, code);

    // 1. Unknown QR code check
    if (!cp) {
      console.log("Unknown code");
      return;
    }

    // 2. Order rule check (Step 5)
    if (cp.order !== this.scanned.length + 1) {
      console.log("Out of order: " + cp.name);
      return;
    }

    // 3. Valid scan execution
    this.scanned.push(cp.name);

    if (this.scanned.length === this.checkpoints.length) {
      this.done = true;
    }
  }

  status() {
    if (this.done) {
      return `${this.guard.name} has scanned ${this.scanned.length} of ${this.checkpoints.length} checkpoints, patrol done`;
    }
    return `${this.guard.name} has scanned ${this.scanned.length} of ${this.checkpoints.length} checkpoints, due ${this.deadline}`;
  }
}

// Step 5 Test: Out of order scan 
const freshPatrol = new Patrol(mary, checkpoints, "23:00");
freshPatrol.scan("CP-FENCEC"); // Scans order 3 first

// Step 4 Test: Standard patrol execution
const p = new Patrol(mary, checkpoints, "23:00");
p.scan("CP-GATE2");
p.scan("CP-WRONG");
p.scan("CP-GENROOM");
console.log(p.status());
p.scan("CP-FENCEC");
console.log(p.status());