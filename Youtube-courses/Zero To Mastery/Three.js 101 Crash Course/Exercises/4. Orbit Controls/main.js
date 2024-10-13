// Importing everything in three.js as "THREE"
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Printing the three.js module into the console
console.log(THREE);
console.log(OrbitControls);

// Declaring a scene
const scene = new THREE.Scene();

// Creating a cube shape and basic material
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });

// Creating a mesh, which is made using a shape and a mesh
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Adding the mesh to the scene
scene.add(cubeMesh);
console.log(scene);

// Initializing a camera

// You provide the Method with the following arguments: The field of view of the perspective camera, an aspect ratio of the scene and a definition of what can't be seen when it's too close or too far from the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.5,
  200
);

// Changing position of the camera
camera.position.z = 5;

// Initializing a Renderer
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({ canvas });

// sets the size of the 3D environment
renderer.setSize(window.innerWidth, window.innerHeight);

// Making an instance of OrbitControls Object
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

// To make the 3D environment feel alive and interactive, you'll need to create a loop that requests the frame rate and updates the scene continuously as the user browses through the app
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
}

renderloop();