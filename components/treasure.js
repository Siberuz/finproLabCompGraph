import * as THREE from "../three.js/build/three.module.js";

let treasureGeomtery = new THREE.SphereGeometry(2, 32, 16);
let treasureMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
export let treasureMesh = new THREE.Mesh(treasureGeomtery, treasureMaterial);

treasureMesh.position.set(0, 13, 0);
treasureMesh.castShadow = true;
treasureMesh.receiveShadow = true;
