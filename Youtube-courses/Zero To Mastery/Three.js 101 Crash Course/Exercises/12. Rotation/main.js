import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

console.log(THREE);
console.log(OrbitControls);

// Initializing a Scene
const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "blue", wireframe: true });

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
cubeMesh.position.y = -1;
cubeMesh.scale.setScalar(.5);

const group = new THREE.Group();
group.add(cubeMesh);

group.position.y = 2;
group.scale.setScalar(2);

scene.add(group);

cubeMesh.rotation.reorder("YXZ");

cubeMesh.rotation.y = THREE.MathUtils.degToRad(90);
cubeMesh.rotation.x = THREE.MathUtils.degToRad(45);

const axesHelper = new THREE.AxesHelper(2);
cubeMesh.add(axesHelper);

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

// Creating an event listener for resizing the screen
window.addEventListener("resize", () => {
  console.log("Screen Resized!");
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const renderloop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
}

renderloop();
