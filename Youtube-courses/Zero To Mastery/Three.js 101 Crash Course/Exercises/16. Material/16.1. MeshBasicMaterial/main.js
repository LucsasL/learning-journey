// MeshBasicMaterial

import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Initializing a Scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "blue",
  transparent: true,
  opacity: .5,
});

const fog = new THREE.Fog("black", 1, 10);

const cubeMesh = new THREE.Mesh(geometry, cubeMaterial);
const cubeMesh2 = new THREE.Mesh(geometry, cubeMaterial);

scene.add(cubeMesh);
scene.add(cubeMesh2);
scene.fog = fog;

cubeMesh.position.x = 2;

// Initializing a Camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.5,
  200
);

camera.position.z = 5;

cubeMesh.position.distanceTo(camera.position);

// Initializing a Renderer
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

const maxPixelRatio = Math.min(window.devicePixelRatio, 2);
renderer.setPixelRatio(maxPixelRatio);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

// Creating an event listener for resizing the screen
window.addEventListener("resize", () => {
  console.log("Screen Resized!");
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Creating a render loop
const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
