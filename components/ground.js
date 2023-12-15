import * as THREE from "../three.js/build/three.module.js";

let groundGeometry = new THREE.PlaneGeometry(100, 100);
let groundTexture = new THREE.TextureLoader().load("./assets/sand.jpg");
let groundMaterial = new THREE.MeshPhongMaterial({
  map: groundTexture,
  side: THREE.DoubleSide,
});
export let groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.rotateX(-Math.PI / 2);
groundMesh.receiveShadow = true;
