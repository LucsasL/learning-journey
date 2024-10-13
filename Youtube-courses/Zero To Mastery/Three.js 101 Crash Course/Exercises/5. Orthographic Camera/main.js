import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Main Variables
const aspectRatio = window.innerWidth / window.innerHeight;

// Models and Materials
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "blue" });

// Mesh
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Creating a Scene
const scene = new THREE.Scene();

scene.add(cubeMesh);

// Initializing an Orthographic Camera
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  .5,
  200
);

camera.position.z = 5;

// Initializing a Renderer
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

// Creating a render loop
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
}

renderloop();