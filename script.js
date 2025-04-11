const binsData = [
  { area: "Gandhipuram", level: 30 },
  { area: "RS Puram", level: 60 },
  { area: "Koundampalayam", level: 85 }
];

function getStatusColor(level) {
  if (level < 30) return "🟢 Low";
  else if (level < 70) return "🟡 Medium";
  else return "🔴 High";
}

function getStatusText(level) {
  if (level < 30) return "Low - No need to collect";
  else if (level < 70) return "Medium - Monitor";
  else return "High - Send Collection Truck!";
}

function displayBins() {
  const binContainer = document.getElementById("bins");
  binContainer.innerHTML = "";

  binsData.forEach((bin, i) => {
    const binDiv = document.createElement("div");
    binDiv.className = "bin";

    binDiv.innerHTML = `
      <h3>${bin.area}</h3>
      <p class="level">Status: ${getStatusColor(bin.level)}</p>
      <p>${getStatusText(bin.level)}</p>
    `;

    if (bin.level >= 70) {
      const truckBtn = document.createElement("button");
      truckBtn.className = "send-truck";
      truckBtn.textContent = "🚛 Send Truck";
      truckBtn.onclick = () => {
        alert(`Truck dispatched to ${bin.area}!`);
      };
      binDiv.appendChild(truckBtn);
    }

    binContainer.appendChild(binDiv);
  });
}

function updateBins() {
  binsData.forEach(bin => {
    const randomChange = Math.floor(Math.random() * 40) - 20;
    bin.level = Math.min(100, Math.max(0, bin.level + randomChange));
  });
  displayBins();
}

displayBins();
