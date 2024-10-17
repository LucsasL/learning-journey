import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Initializing a Scene
const scene = new THREE.Scene();

// Initializing the textures loader
const textureLoader = new THREE.TextureLoader();

// Intiializing geometries
const geometry = new THREE.BoxGeometry(1, 1, 1);
const uv2Cube = new THREE.BufferAttribute(geometry.attributes.uv.array, 2);
geometry.setAttribute("uv2", uv2Cube);

const torusKnotGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 100, 16);
const uv2TorusKnot = new THREE.BufferAttribute(
  torusKnotGeometry.attributes.uv.array,
  2
);
torusKnotGeometry.setAttribute("uv2", uv2TorusKnot);

const sphereGeometry = new THREE.SphereGeometry(0.8, 32, 32);
const uv2Sphere = new THREE.BufferAttribute(sphereGeometry.attributes.uv.array, 2);
sphereGeometry.setAttribute("uv2", uv2Sphere);


const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
const uv2Cylinder = new THREE.BufferAttribute(cylinderGeometry.attributes.uv.array, 2);
cylinderGeometry.setAttribute("uv2", uv2Cylinder);


const planeGeometry = new THREE.PlaneGeometry(1, 1);
const uv2Plane = new THREE.BufferAttribute(planeGeometry.attributes.uv.array, 2);
planeGeometry.setAttribute("uv2", uv2Plane);


// Initializing the textures
const grassAlbedo = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png"
);

const grassAo = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png"
);

const grassHeight = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/whispy-grass-meadow-bl/wispy-grass-meadow_height.png"
);

const grassMetalic = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/whispy-grass-meadow-bl/wispy-grass-meadow_metalic.png"
);

const grassNormal = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/whispy-grass-meadow-bl/wispy-grass-meadow_normal.png"
);

const grassRoughness = textureLoader.load(
  "/textures/whispy-grass-meadow-bl/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png"
);

// Basic Material
const material = new THREE.MeshStandardMaterial({
  map: grassAlbedo,
  roughnessMap: grassRoughness,
  roughness: 1,
  metalnessMap: grassMetalic,
  metalness: 1,
  normalMap: grassNormal,
  displacementMap: grassHeight,
});

material.displacementScale = 0.1;

material.AoMap = grassAo;
material.aoMapIntensity = .2;

// Meshes
const cubeMesh = new THREE.Mesh(geometry, material);
const TorusKnot = new THREE.Mesh(torusKnotGeometry, material);
TorusKnot.position.x = 2;

const sphere = new THREE.Mesh(sphereGeometry, material);
sphere.position.set(0, 2, 0);

const cylinder = new THREE.Mesh(cylinderGeometry, material);
cylinder.position.set(0, -2, 0);

const plane = new THREE.Mesh(planeGeometry, material);
plane.position.set(-2, 0, 0);

material.side = THREE.DoubleSide; // 2

// Creating a group
const group = new THREE.Group();
group.add(cubeMesh);
group.add(TorusKnot);
group.add(sphere, cylinder, plane);
scene.add(group);

// Initializing a Camera
const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight,
  0.5,
  2000
);

camera.position.z = 5;
camera.position.y = 3;

// Initializing lights
const light = new THREE.AmbientLight("white", 1);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 200);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

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
  group.children.forEach((c) => {
    c.rotation.y += 0.01;
    c.rotation.x -= 0.01;
  });

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
