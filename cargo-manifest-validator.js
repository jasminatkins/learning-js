const manifest1 = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
};

function normalizeUnits(manifest) {
  const normalizedManifest = {...manifest};
  if (manifest.unit === "lb") {
    normalizedManifest.weight *= 0.45;
    normalizedManifest.unit = "kg";
  }
  return normalizedManifest;
}

function validateManifest(manifest) {
  const newObject = {};
  if (typeof manifest.containerId !== "number" || manifest.containerId <= 0 || Number.isInteger(manifest.containerId) !== true) {
    newObject.containerId = "Invalid";
  }
  if (manifest.containerId === undefined) {
    newObject.containerId = "Missing";
  }
  if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    newObject.destination = "Invalid";
  }
  if (manifest.destination === undefined) {
    newObject.destination = "Missing";
  }
  if (manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    newObject.weight = "Invalid";
  }
  if (manifest.weight === undefined) {
    newObject.weight = "Missing";
  }
  if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    newObject.unit = "Invalid";
  }
  if (manifest.unit === undefined) {
    newObject.unit = "Missing";
  }
  if (typeof manifest.hazmat !== "boolean") {
    newObject.hazmat = "Invalid";
  }
  if (manifest.hazmat === undefined) {
    newObject.hazmat = "Missing";
  }
  return newObject;
}

function processManifest(manifest) {
  if (Object.keys(validateManifest(manifest)).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    normalizeUnits(manifest);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  }
}

processManifest(manifest1);
