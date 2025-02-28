import * as THREE from "three";
import { OrbitControl } from "three/addons/controls/OrbitControls.js";

// Initializing a Scene
const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "blue" });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cubeMesh);

// Initializing a Camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.5,
  200
);

camera.position.z = 5;

// Initializing a Renderer
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControl(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

// Creating a render loop
const renderloop = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame();
}

renderloop();