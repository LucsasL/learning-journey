// Importing everything in three.js as "THREE"
import * as THREE from "three";

// Printing the three.js module into the console
console.log(THREE);

// Declaring a scene
const scene = new THREE.Scene();

// Creating a cube shape and basic material
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

// Creating a mesh, wich is made using a shape and a mesh
const cubeMesh = new THREE.Mesh(
  cubeGeometry,
  cubeMaterial
);

// Adding the mesh to the scene
scene.add(cubeMesh);

console.log(scene);