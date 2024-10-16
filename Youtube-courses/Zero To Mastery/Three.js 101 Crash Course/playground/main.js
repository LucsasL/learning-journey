import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Initializing a Scene
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const torusKnotGeometry = new THREE.TorusKnotGeometry(.5, .15, 100, 16);
const sphereGeometry = new THREE.SphereGeometry(.8, 32, 32);
const cylinderGeometry = new THREE.CylinderGeometry(.5, .5, 1, 32);
const planeGeometry = new THREE.PlaneGeometry(1, 1);

const material = new THREE.MeshPhysicalMaterial({
  color: "green",
  metalness: 0,
  roughness: 1,
  reflectivity: .5,
  clearCoat: 1,
});

const cubeMesh = new THREE.Mesh(geometry, material);
const TorusKnot = new THREE.Mesh(torusKnotGeometry, material);
TorusKnot.position.x = 2;

const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.set(0, 2, 0);

const cylinder = new THREE.Mesh(cylinderGeometry, material);
cylinder.position.set(0, -2, 0);

const plane = new THREE.Mesh(planeGeometry, material);
plane.position.x = -2;

material.side = THREE.DoubleSide; // 2

const group = new THREE.Group();
group.add(cubeMesh);
group.add(TorusKnot);
group.add(sphere, cylinder, plane);
scene.add(group);

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
  group.children.forEach(c => {
    c.rotation.y += .01;
    c.rotation.x -= .01;
  });

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
