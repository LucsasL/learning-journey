import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Main Variables
const aspectRatio = window.innerWidth / window.innerHeight;
const maxPixelRatio = Math.min(window.devicePixelRatio, 2);

// Creating a Scene
const scene = new THREE.Scene();

// Texture Loader
const textureLoader = new THREE.TextureLoader();

// Geometries and Materials
const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
const sphereUv = new THREE.BufferAttribute(sphereGeo.attributes.uv.array, 2);
sphereGeo.setAttribute("uv2", sphereUv);

// Grass Texture
const grassTex = textureLoader.load(
  "textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png"
);
grassTex.colorSpace = THREE.SRGBColorSpace;

const grassAo = textureLoader.load(
  "textures/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png"
);

const grassHeight = textureLoader.load(
  "textures/whispy-grass-meadow-bl/wispy-grass-meadow_height.png"
);

const grassMetalic = textureLoader.load(
  "textures/whispy-grass-meadow-bl/wispy-grass-meadow_metalic.png"
);

const grassNormal = textureLoader.load(
  "textures/whispy-grass-meadow-bl/wispy-grass-meadow_normal.png"
);

const grassRoughness = textureLoader.load(
  "textures/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png"
);

// Badlands Texture
const badlandsTex = textureLoader.load(
  "textures/badlands-boulders-bl/badlands-boulders_albedo.png"
);
badlandsTex.colorSpace = THREE.SRGBColorSpace;

const badlandsAo = textureLoader.load(
  "textures/badlands-boulders-bl/badlands-boulders_ao.png"
);

const badlandsHeight = textureLoader.load(
  "textures/badlands-boulders-bl/badlands-boulders_height.png"
);

const badlandsMetalic = textureLoader.load(
  "textures/badlands-boulders-bl/badlands-boulders_metalic.png"
);

const badlandsNormal = textureLoader.load(
  "textures/badlands-boulders-bl/badlands-boulders_normal.png"
);

const badlandsRoughness = textureLoader.load(
  "textures/badlands-boulders-bl/badlands-boulders_roughness.png"
);

// Metal Texture
const metalTex = textureLoader.load(
  "textures/space-cruiser-panels2-bl/space-cruiser-panels2_albedo.png"
);
metalTex.colorSpace = THREE.SRGBColorSpace;

const metalAo = textureLoader.load(
  "textures/space-cruiser-panels2-bl/space-cruiser-panels2_ao.png"
);

const metalHeight = textureLoader.load(
  "textures/space-cruiser-panels2-bl/space-cruiser-panels2_height.png"
);

const metalMetalic = textureLoader.load(
  "textures/space-cruiser-panels2-bl/space-cruiser-panels2_metalic.png"
);

const metalNormal = textureLoader.load(
  "textures/space-cruiser-panels2-bl/space-cruiser-panels2_normal.png"
);

const metalRoughness = textureLoader.load(
  "textures/space-cruiser-panels2-bl/space-cruiser-panels2_roughness.png"
);

// Grass Material
const grassMat = new THREE.MeshStandardMaterial({
  map: grassTex,
  roughnessMap: grassRoughness,
  metalnessMap: grassMetalic,
  normalMap: grassNormal,
  displacementMap: grassHeight,
  displacementScale: 0.1,
});
grassMat.aoMap = grassAo;

// Badlands Material
const badlandsMat = new THREE.MeshStandardMaterial({
  map: badlandsTex,
  roughnessMap: badlandsRoughness,
  metalnessMap: badlandsMetalic,
  normalMap: badlandsNormal,
  displacementMap: badlandsHeight,
  displacementScale: 0.1,
});
badlandsMat.aoMap = badlandsAo;

// Metal Material
const metalMat = new THREE.MeshStandardMaterial({
  map: metalTex,
  roughnessMap: metalRoughness,
  metalnessMap: metalMetalic,
  normalMap: metalNormal,
  displacementMap: metalHeight,
  displacementScale: 0.1,
});
metalMat.aoMap = metalAo;

// Initializing a Group
const sphereGroup = new THREE.Group();

// Initializing the Meshes
const grassSphere = new THREE.Mesh(sphereGeo, grassMat);

const badlandsSphere = new THREE.Mesh(sphereGeo, badlandsMat);
badlandsSphere.position.set(2.5, 0, 0);

const metalSphere = new THREE.Mesh(sphereGeo, metalMat);
metalSphere.position.set(-2.5, 0, 0);

// Adding spheres to the group
sphereGroup.add(grassSphere, badlandsSphere, metalSphere);
scene.add(sphereGroup);

// Initializing lights
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 200);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Initializing a Camera
const camera = new THREE.PerspectiveCamera(35, aspectRatio, .1, 10000);

camera.position.set(0, 5, 10);

// Initializing a Renderer
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(maxPixelRatio);

// Applying controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Resize Event Handler
window.addEventListener("resize", () => {
  console.log("Screen resized!");
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Creating a render loop
const renderloop = () => {
  sphereGroup.children.forEach((c) => {
    c.rotation.y += 0.01;
  });

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
