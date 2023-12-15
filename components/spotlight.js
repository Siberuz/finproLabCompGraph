import * as THREE from "../three.js/build/three.module.js";

function spotlightCreate(color, intensity, distance, x, y, z) {
  let spotLight = new THREE.SpotLight(color, intensity, distance);
  spotLight.castShadow = true;
  spotLight.position.set(x, y, z);

  return spotLight;
}

export let spotLightList = [
  spotlightCreate(0xffffff, 0.6, 50, 13, 2, 13),
  spotlightCreate(0xffffff, 0.6, 50, 13, 2, -13),
  spotlightCreate(0xffffff, 0.6, 50, -13, 2, 13),
  spotlightCreate(0xffffff, 0.6, 50, -13, 2, -13),
];

export let spotLightListTrigger = [
  spotlightCreate(0xff0000, 0.8, 50, 50, 0, 0),
  spotlightCreate(0xff0000, 0.8, 50, -50, 0, 0),
];
