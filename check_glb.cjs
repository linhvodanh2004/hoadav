const fs = require('fs');

const buffer = fs.readFileSync('public/macbook.glb');
const magic = buffer.readUInt32LE(0);
if (magic !== 0x46546C67) {
  console.log('Not a valid GLB file');
  process.exit(1);
}

const version = buffer.readUInt32LE(4);
const length = buffer.readUInt32LE(8);

let chunkLength = buffer.readUInt32LE(12);
let chunkType = buffer.readUInt32LE(16);

if (chunkType !== 0x4E4F534A) {
  console.log('First chunk is not JSON');
  process.exit(1);
}

const jsonString = buffer.toString('utf8', 20, 20 + chunkLength);
const gltf = JSON.parse(jsonString);

console.log('Materials:');
gltf.materials.forEach((m, i) => {
  console.log(`[${i}] ${m.name}`);
});

console.log('\nNodes with meshes:');
gltf.nodes.forEach((n, i) => {
  if (n.mesh !== undefined) {
    const mesh = gltf.meshes[n.mesh];
    console.log(`Node ${i} (${n.name}) -> Mesh ${n.mesh} (${mesh.name})`);
    mesh.primitives.forEach((p, j) => {
      console.log(`  Primitive ${j} -> Material: ${gltf.materials[p.material].name}`);
    });
  }
});
