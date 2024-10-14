import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

console.log(THREE);
console.log(OrbitControls);

// Initializing a Scene
const scene = new THREE.Scene();

// Create custom geometry

// To create a geometrical figure we have to especify it's vertices and pass as an attribute to a Buffer Geometry created down below
const vertices = new Float32Array([0, 0, 0, 0, 2, 0, 2, 0, 0]);
const bufferAttribute = new THREE.BufferAttribute(vertices, 3);

// Setting Buffer Attribute
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", bufferAttribute);

const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "blue",
  wireframe: true,
});

const cubeMesh = new THREE.Mesh(geometry, cubeMaterial);

scene.add(cubeMesh);

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
