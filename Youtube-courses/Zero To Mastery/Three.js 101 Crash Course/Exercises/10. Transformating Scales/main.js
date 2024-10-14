import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Main Variables
const aspectRatio = window.innerWidth / window.innerHeight;
const maxPixelRatio = Math.min(window.devicePixelRatio, 2);

// Elements variable
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "blue" });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Creating a Scene
const scene = new THREE.Scene();

cubeMesh.scale.set(2, 2);

scene.add(cubeMesh);

// Initializing a Camera
const camera = new THREE.PerspectiveCamera(
  35,
  aspectRatio,
  .5,
  200
);

camera.position.z = 5;

// Initializing a Renderer
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(maxPixelRatio);

// Resize Event Handler
window.addEventListener("resize", () => {
  console.log("Screen Resized!");
  camera.aspect = aspectRatio;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Creating a render loop
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
}

renderloop();