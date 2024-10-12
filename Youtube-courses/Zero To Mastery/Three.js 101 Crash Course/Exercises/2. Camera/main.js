// Importing everything in three.js as "THREE"
import * as THREE from "three";

// Printing the three.js module into the console
console.log(THREE);

// Declaring a scene
const scene = new THREE.Scene();

// Initializing a camera

// You provide the Method with the following arguments: The field of view of the perspective camera, an aspect ratio of the scene and a definition of what can't be seen when it's too close or too far from the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);

// Changing position of the camera
camera.position.z = 5;

// Creating a cube shape and basic material
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

// Creating a mesh, which is made using a shape and a mesh
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Adding the mesh to the scene
scene.add(cubeMesh);
// scene.add(camera);

console.log(scene);
