import * as THREE from "../three.js/build/three.module.js";

function pillar(radiusTop, radiusBottom, height, x, y, z) {
  let pilarGeometry = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height
  );
  let pilarTexture = new THREE.TextureLoader().load("./assets/pillar.jpg");
  let pilarMaterial = new THREE.MeshPhongMaterial({ map: pilarTexture });
  let pilarMesh = new THREE.Mesh(pilarGeometry, pilarMaterial);
  pilarMesh.position.set(x, y, z);
  pilarMesh.castShadow = true;
  pilarMesh.receiveShadow = true;
  return pilarMesh;
}

export let pilarList = [
  pillar(3, 3, 30, 15, 15, 15),
  pillar(3, 3, 30, -15, 15, 15),
  pillar(3, 3, 30, 15, 15, -15),
  pillar(3, 3, 30, -15, 15, -15),
];
