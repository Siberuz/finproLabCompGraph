import * as THREE from "./three.js/build/three.module.js";
import { GLTFLoader } from "./three.js/examples/jsm/loaders/GLTFLoader.js";
import { pilarList } from "./components/pilar.js";
import { treasureMesh } from "./components/treasure.js";
import { spotLightList, spotLightListTrigger } from "./components/spotlight.js";
import { groundMesh } from "./components/ground.js";
import { OrbitControls } from "./three.js/examples/jsm/controls/OrbitControls.js";

// Scene
let scene = new THREE.Scene();

// Renderer
let renderer = new THREE.WebGLRenderer();
renderer.antialis = true;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Camrera
let camera1 = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight
);
camera1.position.set(0, 20, 70);

let orbitCamera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight
);
orbitCamera.position.set(0, 20, 70);
const control = new OrbitControls(orbitCamera, renderer.domElement);

let currentCamera = camera1;

//light
//point light
let pointLight = new THREE.PointLight(0xff0000, 2, 200);
pointLight.position.set(0, 13, 0);
pointLight.castShadow = true;
scene.add(pointLight);

//spot light 1-4
spotLightList.forEach((showLight) => scene.add(showLight));

//Object
//Ground
scene.add(groundMesh);

//altar
//Loader
const loader = new GLTFLoader();
loader.load("./assets/altar_for_diana/scene.gltf", (x) => {
  let altar = x.scene;
  altar.position.set(-0.2, 4.7, -0.2);
  altar.castShadow = true;
  altar.receiveShadow = true;
  scene.add(altar);
});

//pillar
pilarList.forEach((showPillar) => scene.add(showPillar));

//treasure
scene.add(treasureMesh);

//orbit controls
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case " ":
      currentCamera = currentCamera === camera1 ? orbitCamera : camera1;
  }
});

//render
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, currentCamera);
}

render();
