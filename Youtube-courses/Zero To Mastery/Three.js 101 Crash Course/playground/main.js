import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Main Variablesb
const aspectRatio = window.innerWidth / window.innerHeight;
const maxPixelRatio = Math.min(window.devicePixelRatio, 2);

// Position of mercury in x axis
let posx = 5;

// Texture Loader
const textureLoader = new THREE.TextureLoader();
const cubeTextureLoader = new THREE.CubeTextureLoader();
cubeTextureLoader.setPath("textures2/cubeMap/");

// Textures
const sunTex = textureLoader.load("textures2/2k_sun.jpg");
sunTex.colorSpace = THREE.SRGBColorSpace;

const mercuryTex = textureLoader.load("textures2/2k_mercury.jpg");
mercuryTex.colorSpace = THREE.SRGBColorSpace;

const venusTex = textureLoader.load("textures2/2k_venus_surface.jpg");
venusTex.colorSpace = THREE.SRGBColorSpace;

const earthTex = textureLoader.load("textures2/2k_earth_daymap.jpg");
earthTex.colorSpace = THREE.SRGBColorSpace;

const marsTex = textureLoader.load("textures2/2k_mars.jpg");
marsTex.colorSpace = THREE.SRGBColorSpace;

const moonTex = textureLoader.load("textures2/2k_moon.jpg");
moonTex.colorSpace = THREE.SRGBColorSpace;


// Geometries
const sphereGeo = new THREE.SphereGeometry(1, 32, 32);

// Planet Materials
const sunMat = new THREE.MeshBasicMaterial({
  map: sunTex,
});

const mercuryMat = new THREE.MeshStandardMaterial({
  map: mercuryTex,
});

const venusMat = new THREE.MeshStandardMaterial({
  map: venusTex,
});

const earthMat = new THREE.MeshStandardMaterial({
  map: earthTex,
});

const marsMat = new THREE.MeshStandardMaterial({
  map: marsTex,
});

// const jupiterMat = new THREE.MeshStandardMaterial({
//   color: "lightbrown",
// });

// const saturnMat = new THREE.MeshStandardMaterial({
//   color: "brown",
// });

// const uranusMat = new THREE.MeshStandardMaterial({
//   color: "lightblue",
// });

// const neptuneMat = new THREE.MeshStandardMaterial({
//   color: "purple",
// });

// Moon Materials
const moonMat = new THREE.MeshStandardMaterial({
  map: moonTex,
});

// Initializing a scene
const scene = new THREE.Scene();

// Initializing Planets Meshes
const sun = new THREE.Mesh(sphereGeo, sunMat);
sun.scale.setScalar(5);

// Planets Array
const planets = [
  {
    name: "Mercury",
    radius: 0.5,
    distance: 10,
    speed: 0.01,
    material: mercuryMat,
    moons: [],
  },
  {
    name: "Venus",
    radius: 0.8,
    distance: 15,
    speed: 0.007,
    material: venusMat,
    moons: [],
  },
  {
    name: "Earth",
    radius: 1,
    distance: 20,
    speed: 0.005,
    material: earthMat,
    moons: [
      {
        name: "Moon",
        radius: 0.3,
        distance: 2,
        speed: 0.015,
      },
    ],
  },
  {
    name: "Mars",
    radius: 0.7,
    distance: 25,
    speed: 0.003,
    material: marsMat,
    moons: [
      {
        name: "Phobos",
        radius: 0.1,
        distance: 2,
        speed: 0.02,
      },
      {
        name: "Deimos",
        radius: 0.2,
        distance: 3,
        speed: 0.015,
        color: "white",
      },
    ],
  },
  // {
  //   name: "Earth",
  //   radius: 1,
  //   distance: 20,
  //   speed: 0.005,
  //   material: earthMaterial,
  //   moons: [
  //     {
  //       name: "Moon",
  //       radius: 0.3,
  //       distance: 3,
  //       speed: 0.015,
  //     }
  //   ]
  // },
  // {
  //   name: "Earth",
  //   radius: 1,
  //   distance: 20,
  //   speed: 0.005,
  //   material: earthMaterial,
  //   moons: [
  //     {
  //       name: "Moon",
  //       radius: 0.3,
  //       distance: 3,
  //       speed: 0.015,
  //     }
  //   ]
  // },
  // {
  //   name: "Earth",
  //   radius: 1,
  //   distance: 20,
  //   speed: 0.005,
  //   material: earthMaterial,
  //   moons: [
  //     {
  //       name: "Moon",
  //       radius: 0.3,
  //       distance: 3,
  //       speed: 0.015,
  //     }
  //   ]
  // },
  // {
  //   name: "Earth",
  //   radius: 1,
  //   distance: 20,
  //   speed: 0.005,
  //   material: earthMaterial,
  //   moons: [
  //     {
  //       name: "Moon",
  //       radius: 0.3,
  //       distance: 3,
  //       speed: 0.015,
  //     }
  //   ]
  // },
];

const planetMeshes = planets.map((planet) => {
  // Create and setting the mesh
  const planetMesh = new THREE.Mesh(sphereGeo, planet.material);
  planetMesh.scale.setScalar(planet.radius);
  planetMesh.position.x = planet.distance;

  // Add it to the scene
  scene.add(planetMesh);

  // Loop through each moon and create the moon
  planet.moons.forEach((moon) => {
    // add the moon to the planet
    const moonMesh = new THREE.Mesh(sphereGeo, moonMat);
    moonMesh.scale.setScalar(moon.radius);
    moonMesh.position.x = moon.distance;
    planetMesh.add(moonMesh);
  });

  return planetMesh;
});

// Adding the meshes
scene.add(sun);
const bgCubeMap = cubeTextureLoader.load([
  "px.png",
  "nx.png",
  "py.png",
  "ny.png",
  "pz.png",
  "nz.png",
]);

scene.background = bgCubeMap;

// Initializing a light
const light = new THREE.AmbientLight("white", 0.08);
const pointLight = new THREE.PointLight("white", 100);

scene.add(light, pointLight);

// Initializing a Camera
const camera = new THREE.PerspectiveCamera(35, aspectRatio, 0.1, 10000);

camera.position.set(0, 0, 100);

// Initializing a Renderer
const canvas = document.querySelector(".threejs");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(maxPixelRatio);

// Applying Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Resize Event Handler
window.addEventListener("resize", () => {
  console.log("Screen Resized!");
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initializing a clock
const clock = new THREE.Clock();

// Rendering the scene
const renderloop = () => {
  const elapsedTime = clock.getElapsedTime();

  planetMeshes.forEach((planMesh, index) => {
    planMesh.rotation.y += planets[index].speed;

    planMesh.position.z =
      Math.sin(planMesh.rotation.y) * planets[index].distance;
    planMesh.position.x =
      Math.cos(planMesh.rotation.y) * planets[index].distance;

    planMesh.children.forEach((moonMesh, mIndex) => {
      moonMesh.rotation.y += planets[index].moons[mIndex].speed;

      moonMesh.position.x =
        Math.sin(moonMesh.rotation.y) * planets[index].moons[mIndex].distance;
      moonMesh.position.z =
        Math.cos(moonMesh.rotation.y) * planets[index].moons[mIndex].distance;
    });
  });

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderloop);
};

renderloop();
