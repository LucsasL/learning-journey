import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Initializing a Scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const torusKnotGeometry = new THREE.TorusKnotGeometry(.5, .15, 100, 16);
const material = new THREE.MeshPhysicalMaterial({
  color: "green",
  metalness: 0,
  roughness: 1,
  reflectivity: .5,
  clearCoat: 1,
});

const cubeMesh = new THREE.Mesh(geometry, material);
const cubeMesh2 = new THREE.Mesh(torusKnotGeometry, material);

const planeGeometry = new THREE.PlaneGeometry(1, 1);
const plane = new THREE.Mesh(planeGeometry, material);
plane.position.x = -2;
material.side = THREE.DoubleSide; // 2

scene.add(cubeMesh);
scene.add(cubeMesh2);
scene.add(plane);

cubeMesh2.position.x = 2;

// Initializing the Light
const light = new THREE.AmbientLight(0xffffff, .5);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 50);
pointLight.position.set(2, 1, 2);
scene.add(pointLight);

// Initializing a Camera
const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.5,
  200
);

camera.position.z = 5;

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
