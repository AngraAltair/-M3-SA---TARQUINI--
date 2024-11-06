import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);
let snows, snowGeo;
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

//particles
particles()
function particles() {
  const points = [];

  for (let i = 0; i < 600; i++) {
    let snow = new THREE.Vector3(
      Math.random() * 60 - 30,
      Math.random() * 60 - 30,
      Math.random() * 60 - 30
    );
    points.push(snow);
  }

  snowGeo = new THREE.BufferGeometry().setFromPoints(points);

  let sprite = new THREE.TextureLoader().load("assets/textures/snow.png");
  let snowMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    map: sprite,
  });

  snows = new THREE.Points(snowGeo, snowMaterial);
  scene.add(snows);
}
//particles
animateParticles()
function animateParticles() {
    snowGeo.verticesNeedUpdate = true;
    if (snows.position.y < -5) {
      snows.position.y = 5;
    } else {
      snows.position.y -= 0.9;
    }
  }

//Lights
generalLights()
function generalLights() {
const light = new THREE.HemisphereLight(0xfff4d6, 0x999999, 2);
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffe599, 2);
scene.add(directionalLight);
}
pointlights()
function pointlights() {
  

  const pointLight = new THREE.PointLight(0xe69138, 55, 25);
  pointLight.position.set(5.5, 7, 8);
  pointLight.castShadow = true; 
  scene.add(pointLight);
  
  const pointLight2 = new THREE.PointLight(0xe69138, 55, 25);
  pointLight2.position.set(-5.5, 7, 8);
  pointLight2.castShadow = true; 
  scene.add(pointLight2);
  
  const pointLight3 = new THREE.PointLight(0xe69138, 55, 25);
  pointLight3.position.set(-5.5, 7, -8);
  pointLight3.castShadow = true; 
  scene.add(pointLight3);
  
  const pointLight4 = new THREE.PointLight(0xe69138, 55, 25);
  pointLight4.position.set(5.5, 7, -8);
  pointLight4.castShadow = true; 
  scene.add(pointLight4);
  
 
  //const sphereSize = 1;
  //const pointLightHelper = new THREE.PointLightHelper(pointLight, sphereSize);
  //scene.add(pointLightHelper);
  
}
spotlights()
function spotlights() {
const spotLight = new THREE.SpotLight( 0xffffff,  100 );
spotLight.position.set( 12, -2, 15 );
scene.add( spotLight );

const spotLightmid = new THREE.SpotLight( 0xffffff,  100 );
spotLightmid.position.set( 12, -2, 0 );
scene.add( spotLightmid );

const spotLight2 = new THREE.SpotLight( 0xffffff,  100 );
spotLight2.position.set( 12, -2, -15 );
scene.add( spotLight2 );

const spotLight3 = new THREE.SpotLight( 0xffffff,  100 );
spotLight3.position.set( -12, -2, 15 );
scene.add( spotLight3 );

const spotLightmid2 = new THREE.SpotLight( 0xffffff,  100 );
spotLightmid2.position.set( -12, -2, 0 );
scene.add( spotLightmid2 );

const spotLight4 = new THREE.SpotLight( 0xffffff,  100 );
spotLight4.position.set( -12, -2, -15 );
scene.add( spotLight4 );

const spotLightside1 = new THREE.SpotLight( 0xffffff,  100 );
spotLightside1.position.set( 0, -2, 15 );
scene.add( spotLightside1 );

const spotLightside2 = new THREE.SpotLight( 0xffffff,  100 );
spotLightside2.position.set( 0, -2, -15 );
scene.add( spotLightside2 );

const spotLight5 = new THREE.SpotLight( 0xffffff,  100 );
spotLight5.position.set( 12, 15, 15 );
scene.add( spotLight5 );

const spotLight6 = new THREE.SpotLight( 0xffffff,  100 );
spotLight6.position.set( 12, 15, -15 );
scene.add( spotLight6 );

const spotLight7 = new THREE.SpotLight( 0xffffff,  100 );
spotLight7.position.set( -12, 15, -15 );
scene.add( spotLight7 );

const spotLight8 = new THREE.SpotLight( 0xffffff,  100 );
spotLight8.position.set( -12, 15, 15 );
scene.add( spotLight8 );

//const spotLightHelper = new THREE.SpotLightHelper( spotLight8 );
//scene.add( spotLightHelper );
}

//texutres
const textureLoader = new THREE.TextureLoader();
const floorWood = textureLoader.load('assets/textures/floorWood.jpg');
const brkwll = textureLoader.load('assets/textures/brickWall.jpg');
const brkwllsml = textureLoader.load('assets/textures/brickWallsmall.jpg');
const brkwlltll = textureLoader.load('assets/textures/brickWalltall.jpg');
const brkwlltll2 = textureLoader.load('assets/textures/brickWalltall2.jpg');
const brkwllgry = textureLoader.load('assets/textures/brickWalltallgre.jpg');
const brkwllgryL = textureLoader.load('assets/textures/brickWalltallgreL.jpg');
const wndw = textureLoader.load('assets/textures/window.jpg');
const snw = textureLoader.load('assets/textures/snowground.jpg');
const rky = textureLoader.load('assets/textures/rocky.jpg');
const gndrky = textureLoader.load('assets/textures/groundrk.jpg');
const brkflr = textureLoader.load('assets/textures/brickfloor.jpg');
const couchw = textureLoader.load('assets/textures/couch.jpg');
const furni = textureLoader.load('assets/textures/furnWood.jpg');
const roofe = textureLoader.load('assets/textures/roof.jpg');

//1st floor
base()  
function base(){
const snowGeometry = new THREE.BoxGeometry(30, 0.75, 40);
const snowMaterial = new THREE.MeshLambertMaterial({ color: 0x84c2ff, map: snw });  // Apply texture as map
const snow = new THREE.Mesh(snowGeometry, snowMaterial);
snow.position.set(0, -0.55, 0);
scene.add(snow);


const floorGeometry = new THREE.BoxGeometry(11, 0.25, 30);
const floorMaterial = new THREE.MeshLambertMaterial({ color: 0x84c2ff, map: gndrky });  // Apply texture as map
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.set(10, -0.25, 5.5);
scene.add(floor);

const groundGeometry = new THREE.BoxGeometry(13, 1.5, 18);
const groundMaterial = new THREE.MeshLambertMaterial({map: floorWood });  // Apply texture as map
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.position.set(0, 0, 0);
scene.add(ground);

const secondGeometry = new THREE.BoxGeometry(13, 0.25, 18);
const secondMaterial = new THREE.MeshLambertMaterial({map: brkflr });  // Apply texture as map
const second = new THREE.Mesh(secondGeometry, secondMaterial);
second.position.set(0, 7, 0);
scene.add(second);

///////SIDE-TEXTURE//////////

const outerfrntGeometry = new THREE.BoxGeometry(0.55, 0.55, 9);
const outerfrntMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerfrnt = new THREE.Mesh(outerfrntGeometry, outerfrntMaterial);
outerfrnt.position.set(6.75, 0, 4.65);
scene.add(outerfrnt);

const outerfrnt2Geometry = new THREE.BoxGeometry(0.55, 0.55, 9);
const outerfrnt2Material = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerfrnt2 = new THREE.Mesh(outerfrnt2Geometry, outerfrnt2Material);
outerfrnt2.position.set(6.75, 0, -4.65);
scene.add(outerfrnt2);

const outerbkGeometry = new THREE.BoxGeometry(0.55, 0.55, 9.68);
const outerbkMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerbk = new THREE.Mesh(outerbkGeometry, outerbkMaterial);
outerbk.position.set(-6.75, 0, 4.70);
scene.add(outerbk);

const outerbk2Geometry = new THREE.BoxGeometry(0.55, 0.55, 9.68);
const outerbk2Material = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerbk2 = new THREE.Mesh(outerbk2Geometry, outerbk2Material);
outerbk2.position.set(-6.75, 0, -4.70);
scene.add(outerbk2);

////////TOP-TEXTURE//////////

const outerfrntUGeometry = new THREE.BoxGeometry(0.50, 0.59, 9);
const outerfrntUMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const outerUfrnt = new THREE.Mesh(outerfrntUGeometry, outerfrntUMaterial);
outerUfrnt.position.set(6.75, 0, 4.65);
scene.add(outerUfrnt);

const outerfrntU2Geometry = new THREE.BoxGeometry(0.50, 0.59, 9);
const outerfrntU2Material = new THREE.MeshPhongMaterial({map: brkwllgry });
const outerfrntU2 = new THREE.Mesh(outerfrntU2Geometry, outerfrntU2Material);
outerfrntU2.position.set(6.75, 0, -4.65);
scene.add(outerfrntU2);

const outerbkUGeometry = new THREE.BoxGeometry(0.50, 0.59, 9.68);
const outerbkUMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const outerbkU = new THREE.Mesh(outerbkUGeometry, outerbkUMaterial);
outerbkU.position.set(-6.75, 0, 4.70);
scene.add(outerbkU);

const outerbkU2Geometry = new THREE.BoxGeometry(0.50, 0.59, 9.68);
const outerbkU2Material = new THREE.MeshPhongMaterial({map: brkwllgry });
const outerbkU2 = new THREE.Mesh(outerbkU2Geometry, outerbkU2Material);
outerbkU2.position.set(-6.75, 0, -4.70);
scene.add(outerbkU2);

///////OUTER-LEFT////////

const outerLGeometry = new THREE.BoxGeometry(14, 0.55, 0.55);
const outerLMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerL = new THREE.Mesh(outerLGeometry, outerLMaterial);
outerL.position.set(0, 0, 9.25);
scene.add(outerL);

const outerL2Geometry = new THREE.BoxGeometry(14, 0.55, 0.55);
const outerL2Material = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerL2 = new THREE.Mesh(outerL2Geometry, outerL2Material);
outerL2.position.set(0, 0, -9.25);
scene.add(outerL2);

const stepGeometry = new THREE.BoxGeometry(1.5, 1.5, 4);
const stepMaterial = new THREE.MeshLambertMaterial({ map: rky });
const step = new THREE.Mesh(stepGeometry, stepMaterial);
step.position.set(7.25, 0, 0);
scene.add(step);
}

wall1stflr()
function wall1stflr(){
const rightWall2Geometry = new THREE.BoxGeometry(5, 8, 0.35);
const rightWall2Material = new THREE.MeshPhongMaterial({map: brkwll });
const rightWall2 = new THREE.Mesh(rightWall2Geometry, rightWall2Material);
rightWall2.position.set(-4, 3, -9);
scene.add(rightWall2);

const rightWall3Geometry = new THREE.BoxGeometry(3, 8, 0.35);
const rightWall3Material = new THREE.MeshPhongMaterial({map: brkwlltll });
const rightWall3 = new THREE.Mesh(rightWall3Geometry, rightWall3Material);
rightWall3.position.set(0, 3, -9);
scene.add(rightWall3);

const rightWallGeometry = new THREE.BoxGeometry(5, 8, 0.35);
const rightWallMaterial = new THREE.MeshPhongMaterial({map: brkwll });
const rightWall = new THREE.Mesh(rightWallGeometry, rightWallMaterial);
rightWall.position.set(4, 3, -9);
scene.add(rightWall);

const leftWall2Geometry = new THREE.BoxGeometry(5, 8, 0.35);
const leftWall2Material = new THREE.MeshPhongMaterial({map: brkwll });
const leftWall2 = new THREE.Mesh(leftWall2Geometry, leftWall2Material);
leftWall2.position.set(-4, 3, 9);
scene.add(leftWall2);

const leftWall3Geometry = new THREE.BoxGeometry(3, 8, 0.35);
const leftWall3Material = new THREE.MeshPhongMaterial({map: brkwlltll });
const leftWall3 = new THREE.Mesh(leftWall3Geometry, leftWall3Material);
leftWall3.position.set(0, 3, 9);
scene.add(leftWall3);

const leftWallGeometry = new THREE.BoxGeometry(5, 8, 0.35);
const leftWallMaterial = new THREE.MeshPhongMaterial({map: brkwll });
const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial);
leftWall.position.set(4, 3, 9);
scene.add(leftWall);

const backWall1Geometry = new THREE.BoxGeometry(0.35, 8, 5);
const backWall1Material = new THREE.MeshPhongMaterial({map: brkwll });
const backWall1 = new THREE.Mesh(backWall1Geometry, backWall1Material);
backWall1.position.set(-6.5, 3, 6.5);
scene.add(backWall1);

const backWallsmlGeometry = new THREE.BoxGeometry(0.35, 8, 2);
const backWallsmlMaterial = new THREE.MeshPhongMaterial({map: brkwlltll2 });
const backWallsml = new THREE.Mesh(backWallsmlGeometry, backWallsmlMaterial);
backWallsml.position.set(-6.5, 3, 3);
scene.add(backWallsml);

const backWall2Geometry = new THREE.BoxGeometry(0.35, 8, 4);
const backWall2Material = new THREE.MeshPhongMaterial({map: brkwll });
const backWall2 = new THREE.Mesh(backWall2Geometry, backWall2Material);
backWall2.position.set(-6.5, 3, 0);
scene.add(backWall2);

const backWallsml2Geometry = new THREE.BoxGeometry(0.35, 8, 2);
const backWallsml2Material = new THREE.MeshPhongMaterial({map: brkwlltll2 });
const backWallsml2 = new THREE.Mesh(backWallsml2Geometry, backWallsml2Material);
backWallsml2.position.set(-6.5, 3, -3);
scene.add(backWallsml2);

const backWall3Geometry = new THREE.BoxGeometry(0.35, 8, 5);
const backWall3Material = new THREE.MeshPhongMaterial({map: brkwll });
const backWall3 = new THREE.Mesh(backWall3Geometry, backWall3Material);
backWall3.position.set(-6.5, 3, -6.5);
scene.add(backWall3);

const front1WallGeometry = new THREE.BoxGeometry(0.35, 8, 8);
const front1WallMaterial = new THREE.MeshPhongMaterial({map: brkwll });
const front1Wall = new THREE.Mesh(front1WallGeometry, front1WallMaterial);
front1Wall.position.set(6.5, 3, -5.25);
scene.add(front1Wall);

const frontmidWallGeometry = new THREE.BoxGeometry(0.35, 2, 2.5);
const frontmidWallMaterial = new THREE.MeshPhongMaterial({map: brkwllsml });
const frontmidWall = new THREE.Mesh(frontmidWallGeometry, frontmidWallMaterial);
frontmidWall.position.set(6.5, 6, 0);
scene.add(frontmidWall);

const front2WallGeometry = new THREE.BoxGeometry(0.35, 8, 8);
const front2WallMaterial = new THREE.MeshPhongMaterial({map: brkwll });
const front2Wall = new THREE.Mesh(front2WallGeometry, front2WallMaterial);
front2Wall.position.set(6.5, 3, 5.25);
scene.add(front2Wall);
}

wallplr1st()
function wallplr1st(){
const bkRplrGeometry = new THREE.BoxGeometry(0.55, 8, 0.55);
const bkRplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const bkRplr = new THREE.Mesh(bkRplrGeometry, bkRplrMaterial);
bkRplr.position.set(-6.45, 3, -8.95);
scene.add(bkRplr);

const bkLplrGeometry = new THREE.BoxGeometry(0.55, 8, 0.55);
const bkLplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const bkLplr = new THREE.Mesh(bkLplrGeometry, bkLplrMaterial);
bkLplr.position.set(-6.45, 3, 8.95);
scene.add(bkLplr);

const frntRplrGeometry = new THREE.BoxGeometry(0.55, 8, 0.55);
const frntRplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const frntRplr = new THREE.Mesh(frntRplrGeometry, frntRplrMaterial);
frntRplr.position.set(6.45, 3, -8.95);
scene.add(frntRplr);

const frntLplrGeometry = new THREE.BoxGeometry(0.55, 8, 0.55);
const frntLplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const frntLplr = new THREE.Mesh(frntLplrGeometry, frntLplrMaterial);
frntLplr.position.set(6.45, 3, 8.95);
scene.add(frntLplr);

const frntplrGeometry = new THREE.BoxGeometry(0.85, 8, 0.35);
const frntplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const frntplr = new THREE.Mesh(frntplrGeometry, frntplrMaterial);
frntplr.position.set(6.5, 3, -2.5);
scene.add(frntplr);

const doorGeometry = new THREE.BoxGeometry(0.85, 8, 0.35);
const doorMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const door = new THREE.Mesh(doorGeometry, doorMaterial);
door.position.set(6.5, 1.15, -1.25);
scene.add(door);

const midDoorGeometry = new THREE.BoxGeometry(0.85, 0.35, 2.25);
const midDoorMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const midDoor = new THREE.Mesh(midDoorGeometry, midDoorMaterial);
midDoor.position.set(6.5, 5, 0);
scene.add(midDoor);

const doorGeometry2 = new THREE.BoxGeometry(0.85, 8, 0.35);
const doorMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const door2 = new THREE.Mesh(doorGeometry2, doorMaterial2);
door2.position.set(6.5, 1.15, 1.25);
scene.add(door2);

const frntplrGeometry2 = new THREE.BoxGeometry(0.85, 8, 0.35);
const frntplrMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const frntplr2 = new THREE.Mesh(frntplrGeometry2, frntplrMaterial2);
frntplr2.position.set(6.5, 3, 2.5);
scene.add(frntplr2);

const bkplrGeometry = new THREE.BoxGeometry(0.85, 8, 0.35);
const bkplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const bkplr = new THREE.Mesh(bkplrGeometry, bkplrMaterial);
bkplr.position.set(-6.5, 3, -2.5);
scene.add(bkplr);

const bkplrGeometry2 = new THREE.BoxGeometry(0.85, 8, 0.35);
const bkplrMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const bkplr2 = new THREE.Mesh(bkplrGeometry2, bkplrMaterial2);
bkplr2.position.set(-6.5, 3, 2.5);
scene.add(bkplr2);

const LplrGeometry = new THREE.BoxGeometry(0.35, 8, 0.85);
const LplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const Lplr = new THREE.Mesh(LplrGeometry, LplrMaterial);
Lplr.position.set(-2, 3, 9);
scene.add(Lplr);

const RplrGeometry2 = new THREE.BoxGeometry(0.35, 8, 0.85);
const RplrMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const Rplr2 = new THREE.Mesh(RplrGeometry2, RplrMaterial2);
Rplr2.position.set(2, 3, -9);
scene.add(Rplr2);

const RplrGeometry = new THREE.BoxGeometry(0.35, 8, 0.85);
const RplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const Rplr = new THREE.Mesh(RplrGeometry, RplrMaterial);
Rplr.position.set(-2, 3, -9);
scene.add(Rplr);

const LplrGeometry2 = new THREE.BoxGeometry(0.35, 8, 0.85);
const LplrMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const Lplr2 = new THREE.Mesh(LplrGeometry2, LplrMaterial2);
Lplr2.position.set(2, 3, 9);
scene.add(Lplr2);

}

windows()
function windows(){
const frontWndFrameGeometry1 = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial1 = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame1 = new THREE.Mesh(frontWndFrameGeometry1, frontWndFrameMaterial1);
frontWndFrame1.position.set(6.5, 4, 5);
scene.add(frontWndFrame1);

const frontWndFrameGeometry2 = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame2 = new THREE.Mesh(frontWndFrameGeometry2, frontWndFrameMaterial2);
frontWndFrame2.position.set(6.5, 4, 6.5);
scene.add(frontWndFrame2);

const frontWndFrameGeometry1U = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const frontWndFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame1U = new THREE.Mesh(frontWndFrameGeometry1U, frontWndFrameMaterial1U);
frontWndFrame1U.position.set(6.5, 2.25, 5.75);
scene.add(frontWndFrame1U);

const frontWndFrameGeometry2U = new THREE.BoxGeometry(0.7, 0.3, 1.85 );
const frontWndFrameMaterial2U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame2U = new THREE.Mesh(frontWndFrameGeometry2U, frontWndFrameMaterial2U);
frontWndFrame2U.position.set(6.5, 5.75, 5.75);
scene.add(frontWndFrame2U);

const bRACEFrameGeometry1U = new THREE.BoxGeometry(1, 0.45, 2.75);
const bRACEFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const bRACEFrame1U = new THREE.Mesh(bRACEFrameGeometry1U, bRACEFrameMaterial1U);
bRACEFrame1U.position.set(6.5, 1.85, 5.75);
scene.add(bRACEFrame1U);

const wINDOWFrameGeometry1 = new THREE.BoxGeometry(0.5, 3.5, 1.5 );
const wINDOWFrameMaterial1 = new THREE.MeshPhongMaterial({map: wndw });
const wINDOWFrame1 = new THREE.Mesh(wINDOWFrameGeometry1, wINDOWFrameMaterial1);
wINDOWFrame1.position.set(6.5, 3.85, 5.75);
scene.add(wINDOWFrame1);

//////////////////////////////
const frontWndFrameGeometry1R = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial1R = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame1R = new THREE.Mesh(frontWndFrameGeometry1R, frontWndFrameMaterial1R);
frontWndFrame1R.position.set(6.5, 4, -5);
scene.add(frontWndFrame1R);

const frontWndFrameGeometry2R = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial2R = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame2R = new THREE.Mesh(frontWndFrameGeometry2R, frontWndFrameMaterial2R);
frontWndFrame2R.position.set(6.5, 4, -6.5);
scene.add(frontWndFrame2R);

const frontWndFrameGeometry1UR = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const frontWndFrameMaterial1UR = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame1UR = new THREE.Mesh(frontWndFrameGeometry1UR, frontWndFrameMaterial1UR);
frontWndFrame1UR.position.set(6.5, 2.25, -5.75);
scene.add(frontWndFrame1UR);

const frontWndFrameGeometry2UR = new THREE.BoxGeometry(0.7, 0.3, 1.85 );
const frontWndFrameMaterial2UR = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame2UR = new THREE.Mesh(frontWndFrameGeometry2UR, frontWndFrameMaterial2UR);
frontWndFrame2UR.position.set(6.5, 5.75, -5.75);
scene.add(frontWndFrame2UR);

const bRACEFrameGeometry1UR = new THREE.BoxGeometry(1, 0.45, 2.75);
const bRACEFrameMaterial1UR = new THREE.MeshPhongMaterial({map: brkwllgryL });
const bRACEFrame1UR = new THREE.Mesh(bRACEFrameGeometry1UR, bRACEFrameMaterial1UR);
bRACEFrame1UR.position.set(6.5, 1.85, -5.75);
scene.add(bRACEFrame1UR);

const wINDOWFrameGeometry1R = new THREE.BoxGeometry(0.5, 3.5, 1.5 );
const wINDOWFrameMaterial1R = new THREE.MeshPhongMaterial({map: wndw });
const wINDOWFrame1R = new THREE.Mesh(wINDOWFrameGeometry1R, wINDOWFrameMaterial1R);
wINDOWFrame1R.position.set(6.5, 3.85, -5.75);
scene.add(wINDOWFrame1R);
////////////////////////////
///////////////////////////
//////////////////////////
const frontWndFrameGeometry1B = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial1B = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame1B = new THREE.Mesh(frontWndFrameGeometry1B, frontWndFrameMaterial1B);
frontWndFrame1B.position.set(-6.5, 4, 5);
scene.add(frontWndFrame1B);

const frontWndFrameGeometry2B = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial2B = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame2B = new THREE.Mesh(frontWndFrameGeometry2B, frontWndFrameMaterial2B);
frontWndFrame2B.position.set(-6.5, 4, 6.5);
scene.add(frontWndFrame2B);

const frontWndFrameGeometry1UB = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const frontWndFrameMaterial1UB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame1UB = new THREE.Mesh(frontWndFrameGeometry1UB, frontWndFrameMaterial1UB);
frontWndFrame1UB.position.set(-6.5, 2.25, 5.75);
scene.add(frontWndFrame1UB);

const frontWndFrameGeometry2UB = new THREE.BoxGeometry(0.7, 0.3, 1.85 );
const frontWndFrameMaterial2UB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame2UB = new THREE.Mesh(frontWndFrameGeometry2UB, frontWndFrameMaterial2UB);
frontWndFrame2UB.position.set(-6.5, 5.75, 5.75);
scene.add(frontWndFrame2UB);

const bRACEFrameGeometry1UB = new THREE.BoxGeometry(1, 0.45, 2.75);
const bRACEFrameMaterial1UB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const bRACEFrame1UB = new THREE.Mesh(bRACEFrameGeometry1UB, bRACEFrameMaterial1UB);
bRACEFrame1UB.position.set(-6.5, 1.85, 5.75);
scene.add(bRACEFrame1UB);

const wINDOWFrameGeometry1UB = new THREE.BoxGeometry(0.5, 3.5, 1.5 );
const wINDOWFrameMaterial1UB = new THREE.MeshPhongMaterial({map: wndw });
const wINDOWFrame1UB = new THREE.Mesh(wINDOWFrameGeometry1UB, wINDOWFrameMaterial1UB);
wINDOWFrame1UB.position.set(-6.5, 3.85, 5.75);
scene.add(wINDOWFrame1UB);
//////////////////////////////
const frontWndFrameGeometry1RB = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial1RB = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame1RB = new THREE.Mesh(frontWndFrameGeometry1RB, frontWndFrameMaterial1RB);
frontWndFrame1RB.position.set(-6.5, 4, -5);
scene.add(frontWndFrame1RB);

const frontWndFrameGeometry2RB = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial2RB = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame2RB = new THREE.Mesh(frontWndFrameGeometry2RB, frontWndFrameMaterial2RB);
frontWndFrame2RB.position.set(-6.5, 4, -6.5);
scene.add(frontWndFrame2RB);

const frontWndFrameGeometry1URB = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const frontWndFrameMaterial1URB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame1URB = new THREE.Mesh(frontWndFrameGeometry1URB, frontWndFrameMaterial1URB);
frontWndFrame1URB.position.set(-6.5, 2.25, -5.75);
scene.add(frontWndFrame1URB);

const frontWndFrameGeometry2URB = new THREE.BoxGeometry(0.7, 0.3, 1.85 );
const frontWndFrameMaterial2URB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame2URB = new THREE.Mesh(frontWndFrameGeometry2URB, frontWndFrameMaterial2URB);
frontWndFrame2URB.position.set(-6.5, 5.75, -5.75);
scene.add(frontWndFrame2URB);

const bRACEFrameGeometry1URB = new THREE.BoxGeometry(1, 0.45, 2.75);
const bRACEFrameMaterial1URB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const bRACEFrame1URB = new THREE.Mesh(bRACEFrameGeometry1URB, bRACEFrameMaterial1URB);
bRACEFrame1URB.position.set(-6.5, 1.85, -5.75);
scene.add(bRACEFrame1URB);

const wINDOWFrameGeometry1RB = new THREE.BoxGeometry(0.5, 3.5, 1.5 );
const wINDOWFrameMaterial1RB = new THREE.MeshPhongMaterial({map: wndw });
const wINDOWFrame1RB = new THREE.Mesh(wINDOWFrameGeometry1RB, wINDOWFrameMaterial1RB);
wINDOWFrame1RB.position.set(-6.5, 3.85, -5.75);
scene.add(wINDOWFrame1RB);
////////////////////////
////////////////////////
///////////////////////
////////////////////////

const SfrontWndFrameGeometry1 = new THREE.BoxGeometry(0.3, 3.25, 0.7 );
const SfrontWndFrameMaterial1 = new THREE.MeshPhongMaterial({map: brkwllgry });
const SfrontWndFrame1 = new THREE.Mesh(SfrontWndFrameGeometry1, SfrontWndFrameMaterial1);
SfrontWndFrame1.position.set(0.75, 4, 9);
scene.add(SfrontWndFrame1);

const SfrontWndFrameGeometry2 = new THREE.BoxGeometry(0.3, 3.25, 0.7 );
const SfrontWndFrameMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const SfrontWndFrame2 = new THREE.Mesh(SfrontWndFrameGeometry2, SfrontWndFrameMaterial2);
SfrontWndFrame2.position.set(-0.75, 4, 9);
scene.add(SfrontWndFrame2);

const SfrontWndFrameGeometry1U = new THREE.BoxGeometry(1.85, 0.3, 0.7);
const SfrontWndFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const SfrontWndFrame1U = new THREE.Mesh(SfrontWndFrameGeometry1U, SfrontWndFrameMaterial1U);
SfrontWndFrame1U.position.set(0, 2.25, 9);
scene.add(SfrontWndFrame1U);

const SfrontWndFrameGeometry2U = new THREE.BoxGeometry(1.85, 0.3, 0.7 );
const SfrontWndFrameMaterial2U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const SfrontWndFrame2U = new THREE.Mesh(SfrontWndFrameGeometry2U, SfrontWndFrameMaterial2U);
SfrontWndFrame2U.position.set(0, 5.75, 9);
scene.add(SfrontWndFrame2U);

const SbRACEFrameGeometry1U = new THREE.BoxGeometry(2.75, 0.45, 1);
const SbRACEFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const SbRACEFrame1U = new THREE.Mesh(SbRACEFrameGeometry1U, SbRACEFrameMaterial1U);
SbRACEFrame1U.position.set(0, 1.85, 9);
scene.add(SbRACEFrame1U);

const SwINDOWFrameGeometry1 = new THREE.BoxGeometry(1.5, 3.5, 0.5 );
const SwINDOWFrameMaterial1 = new THREE.MeshPhongMaterial({map: wndw });
const SwINDOWFrame1 = new THREE.Mesh(SwINDOWFrameGeometry1, SwINDOWFrameMaterial1);
SwINDOWFrame1.position.set(0, 3.85, 9);
scene.add(SwINDOWFrame1);
///////////////////////
const S2frontWndFrameGeometry1 = new THREE.BoxGeometry(0.3, 3.25, 0.7 );
const S2frontWndFrameMaterial1 = new THREE.MeshPhongMaterial({map: brkwllgry });
const S2frontWndFrame1 = new THREE.Mesh(S2frontWndFrameGeometry1, S2frontWndFrameMaterial1);
S2frontWndFrame1.position.set(0.75, 4, -9);
scene.add(S2frontWndFrame1);

const S2frontWndFrameGeometry2 = new THREE.BoxGeometry(0.3, 3.25, 0.7 );
const S2frontWndFrameMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const S2frontWndFrame2 = new THREE.Mesh(S2frontWndFrameGeometry2, S2frontWndFrameMaterial2);
S2frontWndFrame2.position.set(-0.75, 4, -9);
scene.add(S2frontWndFrame2);

const S2frontWndFrameGeometry1U = new THREE.BoxGeometry(1.85, 0.3, 0.7);
const S2frontWndFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const S2frontWndFrame1U = new THREE.Mesh(S2frontWndFrameGeometry1U, S2frontWndFrameMaterial1U);
S2frontWndFrame1U.position.set(0, 2.25, -9);
scene.add(S2frontWndFrame1U);

const S2frontWndFrameGeometry2U = new THREE.BoxGeometry(1.85, 0.3, 0.7 );
const S2frontWndFrameMaterial2U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const S2frontWndFrame2U = new THREE.Mesh(S2frontWndFrameGeometry2U, S2frontWndFrameMaterial2U);
S2frontWndFrame2U.position.set(0, 5.75, -9);
scene.add(S2frontWndFrame2U);

const S2bRACEFrameGeometry1U = new THREE.BoxGeometry(2.75, 0.45, 1);
const S2bRACEFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const S2bRACEFrame1U = new THREE.Mesh(S2bRACEFrameGeometry1U, S2bRACEFrameMaterial1U);
S2bRACEFrame1U.position.set(0, 1.85, -9);
scene.add(S2bRACEFrame1U);

const S2wINDOWFrameGeometry1 = new THREE.BoxGeometry(1.5, 3.5, 0.5 );
const S2wINDOWFrameMaterial1 = new THREE.MeshPhongMaterial({map: wndw });
const S2wINDOWFrame1 = new THREE.Mesh(S2wINDOWFrameGeometry1, S2wINDOWFrameMaterial1);
S2wINDOWFrame1.position.set(0, 3.85, -9);
scene.add(S2wINDOWFrame1);
}
couch1()
function couch1(){
const seatGeometry = new THREE.BoxGeometry(1.25, 0.15, 1.25);
const seatMaterial = new THREE.MeshLambertMaterial({ map: couchw });
const seat = new THREE.Mesh(seatGeometry, seatMaterial);
seat.position.set(-4.5, 1.5, 7.25);
seat.rotation.y = 1;
scene.add(seat);
/////////////////
const myLeftrestGeometry = new THREE.BoxGeometry(0.75, 0.15, 0.75);
const myLeftrestMaterial = new THREE.MeshLambertMaterial({ map: couchw });
const myLeftrest = new THREE.Mesh(myLeftrestGeometry, myLeftrestMaterial);
myLeftrest.position.set(-3.8, 1.75, 7.3);
myLeftrest.rotation.y = -0.58;
myLeftrest.rotation.z = 1.25;
scene.add(myLeftrest);
/////////////
const backRestGeometry = new THREE.BoxGeometry(1.25, 0.15, 1.25);
const backRestMaterial = new THREE.MeshLambertMaterial({ map: couchw });
const backRest = new THREE.Mesh(backRestGeometry, backRestMaterial);
backRest.position.set(-4.67, 2, 7.5);
backRest.rotation.y = 1;
backRest.rotation.z = -1.25;
scene.add(backRest);
////////////////
const myRightrestGeometry = new THREE.BoxGeometry(0.75, 0.15, 0.75);
const myRightrestMaterial = new THREE.MeshLambertMaterial({ map: couchw });
const myRightrest = new THREE.Mesh(myRightrestGeometry, myRightrestMaterial);
myRightrest.position.set(-4.86, 1.75, 6.65);
myRightrest.rotation.y = -0.58;
myRightrest.rotation.z = -1.25;
scene.add(myRightrest);
//////////////////
///////////////
///////////////
const FRlegGeometry = new THREE.CylinderGeometry( 0.1, 0.1, 0.75, 32 ); 
const FRlegMaterial = new THREE.MeshLambertMaterial( {map: furni} ); 
const FRleg = new THREE.Mesh( FRlegGeometry, FRlegMaterial );
FRleg.position.set(-4.55, 1.05, 6.75);
scene.add( FRleg );

const FLlegGeometry2 = new THREE.CylinderGeometry( 0.1, 0.1, 0.75, 32 ); 
const FLlegMaterial2 = new THREE.MeshLambertMaterial( {map: furni} ); 
const FLleg2 = new THREE.Mesh( FLlegGeometry2, FLlegMaterial2 );
FLleg2.position.set(-3.95, 1.05, 7.15);
scene.add( FLleg2 );

const BLlegGeometry3 = new THREE.CylinderGeometry( 0.1, 0.1, 0.75, 32 ); 
const BLlegMaterial3 = new THREE.MeshLambertMaterial( {map: furni} ); 
const BLleg3 = new THREE.Mesh( BLlegGeometry3, BLlegMaterial3 );
BLleg3.position.set(-4.25, 1.05, 7.75);
scene.add( BLleg3 );

const BRlegGeometry4 = new THREE.CylinderGeometry( 0.1, 0.1, 0.75, 32 ); 
const BRlegMaterial4 = new THREE.MeshLambertMaterial( {map: furni} ); 
const BRleg4 = new THREE.Mesh( BRlegGeometry4, BRlegMaterial4 );
BRleg4.position.set(-4.95, 1.05, 7.55);
scene.add( BRleg4 );

}

couch2()
function couch2() {
const seatGeometry = new THREE.BoxGeometry(1.25, 0.15, 1.25);
const seatMaterial = new THREE.MeshPhongMaterial({ map: couchw });
const seat = new THREE.Mesh(seatGeometry, seatMaterial);
seat.position.set(-4.5, 1.5, 3.75);
seat.rotation.y = 2;
scene.add(seat);
/////////////////
const myLeftrestGeometry = new THREE.BoxGeometry(0.75, 0.15, 0.75);
const myLeftrestMaterial = new THREE.MeshPhongMaterial({ map: couchw });
const myLeftrest = new THREE.Mesh(myLeftrestGeometry, myLeftrestMaterial);
myLeftrest.position.set(-3.8, 1.75, 3.8);
myLeftrest.rotation.y = 0.48;
myLeftrest.rotation.z = 1.25;
scene.add(myLeftrest);
/////////////
const backRestGeometry = new THREE.BoxGeometry(1.25, 0.15, 1.25);
const backRestMaterial = new THREE.MeshPhongMaterial({ map: couchw });
const backRest = new THREE.Mesh(backRestGeometry, backRestMaterial);
backRest.position.set(-4.67, 2, 3.5);
backRest.rotation.y = -1.20;
backRest.rotation.z = -1.25;
scene.add(backRest);
////////////////
const myRightrestGeometry = new THREE.BoxGeometry(0.75, 0.15, 0.75);
const myRightrestMaterial = new THREE.MeshPhongMaterial({ map: couchw });
const myRightrest = new THREE.Mesh(myRightrestGeometry, myRightrestMaterial);
myRightrest.position.set(-4.86, 1.75, 4.25);
myRightrest.rotation.y = 0.48;
myRightrest.rotation.z = -1.25;
scene.add(myRightrest);
//////////////////
///////////////
///////////////
const FRlegGeometry = new THREE.CylinderGeometry( 0.1, 0.1, 0.75, 32 ); 
const FRlegMaterial = new THREE.MeshPhongMaterial( {map: furni} ); 
const FRleg = new THREE.Mesh( FRlegGeometry, FRlegMaterial );
FRleg.position.set(-4.35, 1.05, 3.25);
scene.add( FRleg );

const FLlegGeometry2 = new THREE.CylinderGeometry( 0.1, 0.1, 0.75, 32 ); 
const FLlegMaterial2 = new THREE.MeshPhongMaterial( {map: furni} ); 
const FLleg2 = new THREE.Mesh( FLlegGeometry2, FLlegMaterial2 );
FLleg2.position.set(-3.95, 1.05, 4.05);
scene.add( FLleg2 );

const BLlegGeometry3 = new THREE.CylinderGeometry( 0.1, 0.1, 0.75, 32 ); 
const BLlegMaterial3 = new THREE.MeshPhongMaterial( {map: furni} ); 
const BLleg3 = new THREE.Mesh( BLlegGeometry3, BLlegMaterial3 );
BLleg3.position.set(-4.55, 1.05, 4.35);
scene.add( BLleg3 );

const BRlegGeometry4 = new THREE.CylinderGeometry( 0.1, 0.1, 0.75, 32 ); 
const BRlegMaterial4 = new THREE.MeshPhongMaterial( {map: furni} ); 
const BRleg4 = new THREE.Mesh( BRlegGeometry4, BRlegMaterial4 );
BRleg4.position.set(-4.95, 1.05, 3.65);
scene.add( BRleg4 );
}

table()
function table() {
const standGeometry = new THREE.CylinderGeometry( 0.25, 0.25, 1.25, 32 ); 
const standMaterial = new THREE.MeshPhongMaterial( {map: furni} ); 
const stand = new THREE.Mesh( standGeometry, standMaterial );
stand.position.set(-3.25, 1.4, 5.45);
scene.add( stand );

const headGeometry = new THREE.CylinderGeometry( 1.2, 1.2, 0.09, 32 ); 
const headMaterial = new THREE.MeshPhongMaterial( {map: furni} ); 
const head = new THREE.Mesh( headGeometry, headMaterial );
head.position.set(-3.25, 2, 5.45);
scene.add( head );
}

bookShelf()
function bookShelf() {
const LshlfGeometry = new THREE.BoxGeometry(1, 7.5, 0.5);
const LshlfMaterial = new THREE.MeshPhongMaterial({map: furni });
const Lshlf = new THREE.Mesh(LshlfGeometry, LshlfMaterial);
Lshlf.position.set(6, 1.15, 2);
scene.add(Lshlf);

const RshlfGeometry = new THREE.BoxGeometry(1, 7.5, 0.5);
const RshlfMaterial = new THREE.MeshPhongMaterial({map: furni });
const Rshlf = new THREE.Mesh(RshlfGeometry, RshlfMaterial);
Rshlf.position.set(6, 1.15, 4);
scene.add(Rshlf);

const BkShlfGeometry = new THREE.BoxGeometry(0.02, 7.5, 2);
const BkShlfMaterial = new THREE.MeshPhongMaterial({map: furni });
const BkShlf = new THREE.Mesh(BkShlfGeometry, BkShlfMaterial);
BkShlf.position.set(6, 1.15, 3);
scene.add(BkShlf);

const UShlfGeometry = new THREE.BoxGeometry(1, 0.4, 2.5);
const UShlfMaterial = new THREE.MeshPhongMaterial({map: furni });
const U = new THREE.Mesh(UShlfGeometry, UShlfMaterial);
U.position.set(6, 5, 3);
scene.add(U);

const DShlfGeometry = new THREE.BoxGeometry(1, 0.4, 2.5);
const DShlfMaterial = new THREE.MeshPhongMaterial({map: furni });
const D = new THREE.Mesh(DShlfGeometry, DShlfMaterial);
D.position.set(6, 0.95, 3);
scene.add(D);

const DUShlfGeometry = new THREE.BoxGeometry(1, 0.4, 2.5);
const DUShlfMaterial = new THREE.MeshPhongMaterial({map: furni });
const DU = new THREE.Mesh(DUShlfGeometry, DUShlfMaterial);
DU.position.set(6, 2.6, 3);
scene.add(DU);

const DUDShlfGeometry = new THREE.BoxGeometry(1, 0.4, 2.5);
const DUDShlfMaterial = new THREE.MeshPhongMaterial({map: furni });
const DUD = new THREE.Mesh(DUDShlfGeometry, DUDShlfMaterial);
DUD.position.set(6, 3.75, 3);
scene.add(DUD);


const rdBookGeometry = new THREE.BoxGeometry(1, 0.7, 0.25);
const rdBookMaterial = new THREE.MeshPhongMaterial({color: 0x920b0b });
const rdBook = new THREE.Mesh(rdBookGeometry, rdBookMaterial);
rdBook.position.set(6, 4.3, 2.5);
scene.add(rdBook);

const wtBookGeometry = new THREE.BoxGeometry(1, 0.7, 0.25);
const wtBookMaterial = new THREE.MeshPhongMaterial({color: 0xffeeda });
const wtBook = new THREE.Mesh(wtBookGeometry, wtBookMaterial);
wtBook.position.set(6, 4.32, 2.85);
wtBook.rotation.x = -0.25;
scene.add(wtBook);

const prplBookGeometry = new THREE.BoxGeometry(1, 0.7, 0.25);
const prplBookMaterial = new THREE.MeshPhongMaterial({color: 0x6a329f });
const prplBook = new THREE.Mesh(prplBookGeometry, prplBookMaterial);
prplBook.position.set(6, 4.3, 3.47);
prplBook.rotation.x = 0.5;
scene.add(prplBook);

const brwnBookGeometry = new THREE.BoxGeometry(1, 0.7, 0.25);
const brwnBookMaterial = new THREE.MeshPhongMaterial({color: 0x3b2809 });
const brwnBook = new THREE.Mesh(brwnBookGeometry, brwnBookMaterial);
brwnBook.position.set(6, 3.15, 3.15);
scene.add(brwnBook);

const yllwBookGeometry = new THREE.BoxGeometry(1, 0.7, 0.25);
const yllwBookMaterial = new THREE.MeshPhongMaterial({color: 0xf8b81a });
const yllwBook = new THREE.Mesh(yllwBookGeometry, yllwBookMaterial);
yllwBook.position.set(6, 3.15, 3.55);
scene.add(yllwBook);

}

//2nd Floor to roof
wall2ndflr()
function wall2ndflr(){
const rightWall2Geometry = new THREE.BoxGeometry(5, 8, 0.35);
const rightWall2Material = new THREE.MeshPhongMaterial({map: brkwll });
const rightWall2 = new THREE.Mesh(rightWall2Geometry, rightWall2Material);
rightWall2.position.set(-4, 11, -9);
scene.add(rightWall2);

const rightWall3Geometry = new THREE.BoxGeometry(3, 8, 0.35);
const rightWall3Material = new THREE.MeshPhongMaterial({map: brkwlltll });
const rightWall3 = new THREE.Mesh(rightWall3Geometry, rightWall3Material);
rightWall3.position.set(0, 11, -9);
scene.add(rightWall3);

const rightWallGeometry = new THREE.BoxGeometry(5, 8, 0.35);
const rightWallMaterial = new THREE.MeshPhongMaterial({map: brkwll });
const rightWall = new THREE.Mesh(rightWallGeometry, rightWallMaterial);
rightWall.position.set(4, 11, -9);
scene.add(rightWall);

const leftWall2Geometry = new THREE.BoxGeometry(5, 8, 0.35);
const leftWall2Material = new THREE.MeshPhongMaterial({map: brkwll });
const leftWall2 = new THREE.Mesh(leftWall2Geometry, leftWall2Material);
leftWall2.position.set(-4, 11, 9);
scene.add(leftWall2);

const leftWall3Geometry = new THREE.BoxGeometry(3, 8, 0.35);
const leftWall3Material = new THREE.MeshPhongMaterial({map: brkwlltll });
const leftWall3 = new THREE.Mesh(leftWall3Geometry, leftWall3Material);
leftWall3.position.set(0, 11, 9);
scene.add(leftWall3);

const leftWallGeometry = new THREE.BoxGeometry(5, 8, 0.35);
const leftWallMaterial = new THREE.MeshPhongMaterial({map: brkwll });
const leftWall = new THREE.Mesh(leftWallGeometry, leftWallMaterial);
leftWall.position.set(4, 11, 9);
scene.add(leftWall);

const backWall1Geometry = new THREE.BoxGeometry(0.35, 8, 5);
const backWall1Material = new THREE.MeshPhongMaterial({map: brkwll });
const backWall1 = new THREE.Mesh(backWall1Geometry, backWall1Material);
backWall1.position.set(-6.5, 11, 6.5);
scene.add(backWall1);

const backWallsmlGeometry = new THREE.BoxGeometry(0.35, 8, 2);
const backWallsmlMaterial = new THREE.MeshPhongMaterial({map: brkwlltll2 });
const backWallsml = new THREE.Mesh(backWallsmlGeometry, backWallsmlMaterial);
backWallsml.position.set(-6.5, 11, 3);
scene.add(backWallsml);

const backWall2Geometry = new THREE.BoxGeometry(0.35, 8, 4);
const backWall2Material = new THREE.MeshPhongMaterial({map: brkwll });
const backWall2 = new THREE.Mesh(backWall2Geometry, backWall2Material);
backWall2.position.set(-6.5, 11, 0);
scene.add(backWall2);

const backWallsml2Geometry = new THREE.BoxGeometry(0.35, 8, 2);
const backWallsml2Material = new THREE.MeshPhongMaterial({map: brkwlltll2 });
const backWallsml2 = new THREE.Mesh(backWallsml2Geometry, backWallsml2Material);
backWallsml2.position.set(-6.5, 11, -3);
scene.add(backWallsml2);

const backWall3Geometry = new THREE.BoxGeometry(0.35, 8, 5);
const backWall3Material = new THREE.MeshPhongMaterial({map: brkwll });
const backWall3 = new THREE.Mesh(backWall3Geometry, backWall3Material);
backWall3.position.set(-6.5, 11, -6.5);
scene.add(backWall3);

const front1WallGeometry = new THREE.BoxGeometry(0.35, 8, 8);
const front1WallMaterial = new THREE.MeshPhongMaterial({map: brkwll });
const front1Wall = new THREE.Mesh(front1WallGeometry, front1WallMaterial);
front1Wall.position.set(6.5, 11, -5.25);
scene.add(front1Wall);

const frontmidWallGeometry = new THREE.BoxGeometry(0.35, 8, 2.5);
const frontmidWallMaterial = new THREE.MeshPhongMaterial({map: brkwlltll });
const frontmidWall = new THREE.Mesh(frontmidWallGeometry, frontmidWallMaterial);
frontmidWall.position.set(6.5, 11, 0);
scene.add(frontmidWall);

const front2WallGeometry = new THREE.BoxGeometry(0.35, 8, 8);
const front2WallMaterial = new THREE.MeshPhongMaterial({map: brkwll });
const front2Wall = new THREE.Mesh(front2WallGeometry, front2WallMaterial);
front2Wall.position.set(6.5, 11, 5.25);
scene.add(front2Wall);
}

wallplr2nd()
function wallplr2nd(){
const bkRplrGeometry = new THREE.BoxGeometry(0.55, 8, 0.55);
const bkRplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const bkRplr = new THREE.Mesh(bkRplrGeometry, bkRplrMaterial);
bkRplr.position.set(-6.45, 11, -8.95);
scene.add(bkRplr);

const bkLplrGeometry = new THREE.BoxGeometry(0.55, 8, 0.55);
const bkLplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const bkLplr = new THREE.Mesh(bkLplrGeometry, bkLplrMaterial);
bkLplr.position.set(-6.45, 11, 8.95);
scene.add(bkLplr);

const frntRplrGeometry = new THREE.BoxGeometry(0.55, 8, 0.55);
const frntRplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const frntRplr = new THREE.Mesh(frntRplrGeometry, frntRplrMaterial);
frntRplr.position.set(6.45, 11, -8.95);
scene.add(frntRplr);

const frntLplrGeometry = new THREE.BoxGeometry(0.55, 8, 0.55);
const frntLplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const frntLplr = new THREE.Mesh(frntLplrGeometry, frntLplrMaterial);
frntLplr.position.set(6.45, 11, 8.95);
scene.add(frntLplr);

const frntplrGeometry = new THREE.BoxGeometry(0.85, 8, 0.35);
const frntplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const frntplr = new THREE.Mesh(frntplrGeometry, frntplrMaterial);
frntplr.position.set(6.5, 11, -2.5);
scene.add(frntplr);

const frntplrGeometry2 = new THREE.BoxGeometry(0.85, 8, 0.35);
const frntplrMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const frntplr2 = new THREE.Mesh(frntplrGeometry2, frntplrMaterial2);
frntplr2.position.set(6.5, 11, 2.5);
scene.add(frntplr2);

const bkplrGeometry = new THREE.BoxGeometry(0.85, 8, 0.35);
const bkplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const bkplr = new THREE.Mesh(bkplrGeometry, bkplrMaterial);
bkplr.position.set(-6.5, 11, -2.5);
scene.add(bkplr);

const bkplrGeometry2 = new THREE.BoxGeometry(0.85, 8, 0.35);
const bkplrMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const bkplr2 = new THREE.Mesh(bkplrGeometry2, bkplrMaterial2);
bkplr2.position.set(-6.5, 11, 2.5);
scene.add(bkplr2);

const LplrGeometry = new THREE.BoxGeometry(0.35, 8, 0.85);
const LplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const Lplr = new THREE.Mesh(LplrGeometry, LplrMaterial);
Lplr.position.set(-2, 11, 9);
scene.add(Lplr);

const RplrGeometry2 = new THREE.BoxGeometry(0.35, 8, 0.85);
const RplrMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const Rplr2 = new THREE.Mesh(RplrGeometry2, RplrMaterial2);
Rplr2.position.set(2, 11, -9);
scene.add(Rplr2);

const RplrGeometry = new THREE.BoxGeometry(0.35, 8, 0.85);
const RplrMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const Rplr = new THREE.Mesh(RplrGeometry, RplrMaterial);
Rplr.position.set(-2, 11, -9);
scene.add(Rplr);

const LplrGeometry2 = new THREE.BoxGeometry(0.35, 8, 0.85);
const LplrMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const Lplr2 = new THREE.Mesh(LplrGeometry2, LplrMaterial2);
Lplr2.position.set(2, 11, 9);
scene.add(Lplr2);
}

base2()  
function base2(){
///////SIDE-TEXTURE//////////

const outerfrntGeometry = new THREE.BoxGeometry(0.55, 0.55, 9.25);
const outerfrntMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerfrnt = new THREE.Mesh(outerfrntGeometry, outerfrntMaterial);
outerfrnt.position.set(6.75, 8, 4.6);
scene.add(outerfrnt);

const outerfrnt2Geometry = new THREE.BoxGeometry(0.55, 0.55, 9.25);
const outerfrnt2Material = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerfrnt2 = new THREE.Mesh(outerfrnt2Geometry, outerfrnt2Material);
outerfrnt2.position.set(6.75, 8, -4.6);
scene.add(outerfrnt2);

const outerbkGeometry = new THREE.BoxGeometry(0.55, 0.55, 9.68);
const outerbkMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerbk = new THREE.Mesh(outerbkGeometry, outerbkMaterial);
outerbk.position.set(-6.75, 8, 4.70);
scene.add(outerbk);

const outerbk2Geometry = new THREE.BoxGeometry(0.55, 0.55, 9.68);
const outerbk2Material = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerbk2 = new THREE.Mesh(outerbk2Geometry, outerbk2Material);
outerbk2.position.set(-6.75, 8, -4.70);
scene.add(outerbk2);

////////TOP-TEXTURE//////////

const outerfrntUGeometry = new THREE.BoxGeometry(0.50, 0.59, 9.25);
const outerfrntUMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const outerUfrnt = new THREE.Mesh(outerfrntUGeometry, outerfrntUMaterial);
outerUfrnt.position.set(6.75, 8, 4.6);
scene.add(outerUfrnt);

const outerfrntU2Geometry = new THREE.BoxGeometry(0.50, 0.59, 9.25);
const outerfrntU2Material = new THREE.MeshPhongMaterial({map: brkwllgry });
const outerfrntU2 = new THREE.Mesh(outerfrntU2Geometry, outerfrntU2Material);
outerfrntU2.position.set(6.75, 8, -4.6);
scene.add(outerfrntU2);

const outerbkUGeometry = new THREE.BoxGeometry(0.50, 0.59, 9.68);
const outerbkUMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const outerbkU = new THREE.Mesh(outerbkUGeometry, outerbkUMaterial);
outerbkU.position.set(-6.75, 8, 4.70);
scene.add(outerbkU);

const outerbkU2Geometry = new THREE.BoxGeometry(0.50, 0.59, 9.68);
const outerbkU2Material = new THREE.MeshPhongMaterial({map: brkwllgry });
const outerbkU2 = new THREE.Mesh(outerbkU2Geometry, outerbkU2Material);
outerbkU2.position.set(-6.75, 8, -4.70);
scene.add(outerbkU2);

///////OUTER-LEFT////////

const outerLGeometry = new THREE.BoxGeometry(14, 0.55, 0.55);
const outerLMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerL = new THREE.Mesh(outerLGeometry, outerLMaterial);
outerL.position.set(0, 8, 9.25);
scene.add(outerL);

const outerL2Geometry = new THREE.BoxGeometry(14, 0.55, 0.55);
const outerL2Material = new THREE.MeshPhongMaterial({map: brkwllgryL });
const outerL2 = new THREE.Mesh(outerL2Geometry, outerL2Material);
outerL2.position.set(0, 8, -9.25);
scene.add(outerL2);

///////SIDE-TEXTURE//////////

const UouterfrntGeometry = new THREE.BoxGeometry(0.55, 0.55, 9.25);
const UouterfrntMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const Uouterfrnt = new THREE.Mesh(UouterfrntGeometry, UouterfrntMaterial);
Uouterfrnt.position.set(6.75, 15, 4.6);
scene.add(Uouterfrnt);

const Uouterfrnt2Geometry = new THREE.BoxGeometry(0.55, 0.55, 9.25);
const Uouterfrnt2Material = new THREE.MeshPhongMaterial({map: brkwllgryL });
const Uouterfrnt2 = new THREE.Mesh(Uouterfrnt2Geometry, Uouterfrnt2Material);
Uouterfrnt2.position.set(6.75, 15, -4.6);
scene.add(Uouterfrnt2);

const UouterbkGeometry = new THREE.BoxGeometry(0.55, 0.55, 9.68);
const UouterbkMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const Uouterbk = new THREE.Mesh(UouterbkGeometry, UouterbkMaterial);
Uouterbk.position.set(-6.75, 15, 4.70);
scene.add(Uouterbk);

const Uouterbk2Geometry = new THREE.BoxGeometry(0.55, 0.55, 9.68);
const Uouterbk2Material = new THREE.MeshPhongMaterial({map: brkwllgryL });
const Uouterbk2 = new THREE.Mesh(Uouterbk2Geometry, Uouterbk2Material);
Uouterbk2.position.set(-6.75, 15, -4.70);
scene.add(Uouterbk2);

////////3rdTOP-TEXTURE//////////

const UouterfrntUGeometry = new THREE.BoxGeometry(0.50, 0.59, 9.25);
const UouterfrntUMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const UouterUfrnt = new THREE.Mesh(UouterfrntUGeometry, UouterfrntUMaterial);
UouterUfrnt.position.set(6.75, 15, 4.6);
scene.add(UouterUfrnt);

const UouterfrntU2Geometry = new THREE.BoxGeometry(0.50, 0.59, 9.25);
const UouterfrntU2Material = new THREE.MeshPhongMaterial({map: brkwllgry });
const UouterfrntU2 = new THREE.Mesh(UouterfrntU2Geometry, UouterfrntU2Material);
UouterfrntU2.position.set(6.75, 15, -4.6);
scene.add(UouterfrntU2);

const UouterbkUGeometry = new THREE.BoxGeometry(0.50, 0.59, 9.68);
const UouterbkUMaterial = new THREE.MeshPhongMaterial({map: brkwllgry });
const UouterbkU = new THREE.Mesh(UouterbkUGeometry, UouterbkUMaterial);
UouterbkU.position.set(-6.75, 15, 4.70);
scene.add(UouterbkU);

const UouterbkU2Geometry = new THREE.BoxGeometry(0.50, 0.59, 9.68);
const UouterbkU2Material = new THREE.MeshPhongMaterial({map: brkwllgry });
const UouterbkU2 = new THREE.Mesh(UouterbkU2Geometry, UouterbkU2Material);
UouterbkU2.position.set(-6.75, 15, -4.70);
scene.add(UouterbkU2);

///////3rdOUTER-LEFT////////

const UouterLGeometry = new THREE.BoxGeometry(14, 0.55, 0.55);
const UouterLMaterial = new THREE.MeshPhongMaterial({map: brkwllgryL });
const UouterL = new THREE.Mesh(UouterLGeometry, UouterLMaterial);
UouterL.position.set(0, 15, 9.25);
scene.add(UouterL);

const UouterL2Geometry = new THREE.BoxGeometry(14, 0.55, 0.55);
const UouterL2Material = new THREE.MeshPhongMaterial({map: brkwllgryL });
const UouterL2 = new THREE.Mesh(UouterL2Geometry, UouterL2Material);
UouterL2.position.set(0, 15, -9.25);
scene.add(UouterL2);
}

windows2()
function windows2(){
const frontWndFrameGeometry1 = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial1 = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame1 = new THREE.Mesh(frontWndFrameGeometry1, frontWndFrameMaterial1);
frontWndFrame1.position.set(6.5, 12, 5);
scene.add(frontWndFrame1);

const frontWndFrameGeometry2 = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame2 = new THREE.Mesh(frontWndFrameGeometry2, frontWndFrameMaterial2);
frontWndFrame2.position.set(6.5, 12, 6.5);
scene.add(frontWndFrame2);

const frontWndFrameGeometry1U = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const frontWndFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame1U = new THREE.Mesh(frontWndFrameGeometry1U, frontWndFrameMaterial1U);
frontWndFrame1U.position.set(6.5, 10.25, 5.75);
scene.add(frontWndFrame1U);

const frontWndFrameGeometry2U = new THREE.BoxGeometry(0.7, 0.3, 1.85 );
const frontWndFrameMaterial2U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame2U = new THREE.Mesh(frontWndFrameGeometry2U, frontWndFrameMaterial2U);
frontWndFrame2U.position.set(6.5, 13.75, 5.75);
scene.add(frontWndFrame2U);

const bRACEFrameGeometry1U = new THREE.BoxGeometry(1, 0.45, 2.75);
const bRACEFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const bRACEFrame1U = new THREE.Mesh(bRACEFrameGeometry1U, bRACEFrameMaterial1U);
bRACEFrame1U.position.set(6.5, 9.85, 5.75);
scene.add(bRACEFrame1U);

const wINDOWFrameGeometry1 = new THREE.BoxGeometry(0.5, 3.5, 1.5 );
const wINDOWFrameMaterial1 = new THREE.MeshPhongMaterial({map: wndw });
const wINDOWFrame1 = new THREE.Mesh(wINDOWFrameGeometry1, wINDOWFrameMaterial1);
wINDOWFrame1.position.set(6.5, 11.85, 5.75);
scene.add(wINDOWFrame1);
//////////////////////////////
/////////////////////////////
const MfrontWndFrameGeometry1 = new THREE.BoxGeometry(0.7, 3.25, 0.3);
const MfrontWndFrameMaterial1 = new THREE.MeshPhongMaterial({map: brkwllgry});
const MfrontWndFrame1 = new THREE.Mesh(MfrontWndFrameGeometry1, MfrontWndFrameMaterial1);
MfrontWndFrame1.position.set(6.5, 12, -0.75);
scene.add(MfrontWndFrame1);

const MfrontWndFrameGeometry2 = new THREE.BoxGeometry(0.7, 3.25, 0.3);
const MfrontWndFrameMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry});
const MfrontWndFrame2 = new THREE.Mesh(MfrontWndFrameGeometry2, MfrontWndFrameMaterial2);
MfrontWndFrame2.position.set(6.5, 12, 0.75);
scene.add(MfrontWndFrame2);

const MfrontWndFrameGeometry1U = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const MfrontWndFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL});
const MfrontWndFrame1U = new THREE.Mesh(MfrontWndFrameGeometry1U, MfrontWndFrameMaterial1U);
MfrontWndFrame1U.position.set(6.5, 10.25, 0);
scene.add(MfrontWndFrame1U);

const MfrontWndFrameGeometry2U = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const MfrontWndFrameMaterial2U = new THREE.MeshPhongMaterial({map: brkwllgryL});
const MfrontWndFrame2U = new THREE.Mesh(MfrontWndFrameGeometry2U, MfrontWndFrameMaterial2U);
MfrontWndFrame2U.position.set(6.5, 13.75, 0);
scene.add(MfrontWndFrame2U);

const MbRACEFrameGeometry1U = new THREE.BoxGeometry(1, 0.45, 2.75);
const MbRACEFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL});
const MbRACEFrame1U = new THREE.Mesh(MbRACEFrameGeometry1U, MbRACEFrameMaterial1U);
MbRACEFrame1U.position.set(6.5, 9.85, 0);
scene.add(MbRACEFrame1U);

const MwINDOWFrameGeometry1 = new THREE.BoxGeometry(0.5, 3.5, 1.5);
const MwINDOWFrameMaterial1 = new THREE.MeshPhongMaterial({map: wndw});
const MwINDOWFrame1 = new THREE.Mesh(MwINDOWFrameGeometry1, MwINDOWFrameMaterial1);
MwINDOWFrame1.position.set(6.5, 11.85, 0);
scene.add(MwINDOWFrame1);
//////////////////////////////
//////////////////////////////
const frontWndFrameGeometry1R = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial1R = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame1R = new THREE.Mesh(frontWndFrameGeometry1R, frontWndFrameMaterial1R);
frontWndFrame1R.position.set(6.5, 12, -5);
scene.add(frontWndFrame1R);

const frontWndFrameGeometry2R = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial2R = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame2R = new THREE.Mesh(frontWndFrameGeometry2R, frontWndFrameMaterial2R);
frontWndFrame2R.position.set(6.5, 12, -6.5);
scene.add(frontWndFrame2R);

const frontWndFrameGeometry1UR = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const frontWndFrameMaterial1UR = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame1UR = new THREE.Mesh(frontWndFrameGeometry1UR, frontWndFrameMaterial1UR);
frontWndFrame1UR.position.set(6.5, 10.25, -5.75);
scene.add(frontWndFrame1UR);

const frontWndFrameGeometry2UR = new THREE.BoxGeometry(0.7, 0.3, 1.85 );
const frontWndFrameMaterial2UR = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame2UR = new THREE.Mesh(frontWndFrameGeometry2UR, frontWndFrameMaterial2UR);
frontWndFrame2UR.position.set(6.5, 13.75, -5.75);
scene.add(frontWndFrame2UR);

const bRACEFrameGeometry1UR = new THREE.BoxGeometry(1, 0.45, 2.75);
const bRACEFrameMaterial1UR = new THREE.MeshPhongMaterial({map: brkwllgryL });
const bRACEFrame1UR = new THREE.Mesh(bRACEFrameGeometry1UR, bRACEFrameMaterial1UR);
bRACEFrame1UR.position.set(6.5, 9.85, -5.75);
scene.add(bRACEFrame1UR);

const wINDOWFrameGeometry1R = new THREE.BoxGeometry(0.5, 3.5, 1.5 );
const wINDOWFrameMaterial1R = new THREE.MeshPhongMaterial({map: wndw });
const wINDOWFrame1R = new THREE.Mesh(wINDOWFrameGeometry1R, wINDOWFrameMaterial1R);
wINDOWFrame1R.position.set(6.5, 11.85, -5.75);
scene.add(wINDOWFrame1R);
////////////////////////////
///////////////////////////
//////////////////////////
const frontWndFrameGeometry1B = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial1B = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame1B = new THREE.Mesh(frontWndFrameGeometry1B, frontWndFrameMaterial1B);
frontWndFrame1B.position.set(-6.5, 12, 5);
scene.add(frontWndFrame1B);

const frontWndFrameGeometry2B = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial2B = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame2B = new THREE.Mesh(frontWndFrameGeometry2B, frontWndFrameMaterial2B);
frontWndFrame2B.position.set(-6.5, 12, 6.5);
scene.add(frontWndFrame2B);

const frontWndFrameGeometry1UB = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const frontWndFrameMaterial1UB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame1UB = new THREE.Mesh(frontWndFrameGeometry1UB, frontWndFrameMaterial1UB);
frontWndFrame1UB.position.set(-6.5, 10.25, 5.75);
scene.add(frontWndFrame1UB);

const frontWndFrameGeometry2UB = new THREE.BoxGeometry(0.7, 0.3, 1.85 );
const frontWndFrameMaterial2UB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame2UB = new THREE.Mesh(frontWndFrameGeometry2UB, frontWndFrameMaterial2UB);
frontWndFrame2UB.position.set(-6.5, 13.75, 5.75);
scene.add(frontWndFrame2UB);

const bRACEFrameGeometry1UB = new THREE.BoxGeometry(1, 0.45, 2.75);
const bRACEFrameMaterial1UB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const bRACEFrame1UB = new THREE.Mesh(bRACEFrameGeometry1UB, bRACEFrameMaterial1UB);
bRACEFrame1UB.position.set(-6.5, 9.85, 5.75);
scene.add(bRACEFrame1UB);

const wINDOWFrameGeometry1UB = new THREE.BoxGeometry(0.5, 3.5, 1.5 );
const wINDOWFrameMaterial1UB = new THREE.MeshPhongMaterial({map: wndw });
const wINDOWFrame1UB = new THREE.Mesh(wINDOWFrameGeometry1UB, wINDOWFrameMaterial1UB);
wINDOWFrame1UB.position.set(-6.5, 11.85, 5.75);
scene.add(wINDOWFrame1UB);
//////////////////////////////
const frontWndFrameGeometry1RB = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial1RB = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame1RB = new THREE.Mesh(frontWndFrameGeometry1RB, frontWndFrameMaterial1RB);
frontWndFrame1RB.position.set(-6.5, 12, -5);
scene.add(frontWndFrame1RB);

const frontWndFrameGeometry2RB = new THREE.BoxGeometry(0.7, 3.25, 0.3 );
const frontWndFrameMaterial2RB = new THREE.MeshPhongMaterial({map: brkwllgry });
const frontWndFrame2RB = new THREE.Mesh(frontWndFrameGeometry2RB, frontWndFrameMaterial2RB);
frontWndFrame2RB.position.set(-6.5, 12, -6.5);
scene.add(frontWndFrame2RB);

const frontWndFrameGeometry1URB = new THREE.BoxGeometry(0.7, 0.3, 1.85);
const frontWndFrameMaterial1URB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame1URB = new THREE.Mesh(frontWndFrameGeometry1URB, frontWndFrameMaterial1URB);
frontWndFrame1URB.position.set(-6.5, 10.25, -5.75);
scene.add(frontWndFrame1URB);

const frontWndFrameGeometry2URB = new THREE.BoxGeometry(0.7, 0.3, 1.85 );
const frontWndFrameMaterial2URB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const frontWndFrame2URB = new THREE.Mesh(frontWndFrameGeometry2URB, frontWndFrameMaterial2URB);
frontWndFrame2URB.position.set(-6.5, 13.75, -5.75);
scene.add(frontWndFrame2URB);

const bRACEFrameGeometry1URB = new THREE.BoxGeometry(1, 0.45, 2.75);
const bRACEFrameMaterial1URB = new THREE.MeshPhongMaterial({map: brkwllgryL });
const bRACEFrame1URB = new THREE.Mesh(bRACEFrameGeometry1URB, bRACEFrameMaterial1URB);
bRACEFrame1URB.position.set(-6.5, 9.85, -5.75);
scene.add(bRACEFrame1URB);

const wINDOWFrameGeometry1RB = new THREE.BoxGeometry(0.5, 3.5, 1.5 );
const wINDOWFrameMaterial1RB = new THREE.MeshPhongMaterial({map: wndw });
const wINDOWFrame1RB = new THREE.Mesh(wINDOWFrameGeometry1RB, wINDOWFrameMaterial1RB);
wINDOWFrame1RB.position.set(-6.5, 11.85, -5.75);
scene.add(wINDOWFrame1RB);
////////////////////////
////////////////////////
///////////////////////
////////////////////////

const SfrontWndFrameGeometry1 = new THREE.BoxGeometry(0.3, 3.25, 0.7 );
const SfrontWndFrameMaterial1 = new THREE.MeshPhongMaterial({map: brkwllgry });
const SfrontWndFrame1 = new THREE.Mesh(SfrontWndFrameGeometry1, SfrontWndFrameMaterial1);
SfrontWndFrame1.position.set(0.75, 12, 9);
scene.add(SfrontWndFrame1);

const SfrontWndFrameGeometry2 = new THREE.BoxGeometry(0.3, 3.25, 0.7 );
const SfrontWndFrameMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const SfrontWndFrame2 = new THREE.Mesh(SfrontWndFrameGeometry2, SfrontWndFrameMaterial2);
SfrontWndFrame2.position.set(-0.75, 12, 9);
scene.add(SfrontWndFrame2);

const SfrontWndFrameGeometry1U = new THREE.BoxGeometry(1.85, 0.3, 0.7);
const SfrontWndFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const SfrontWndFrame1U = new THREE.Mesh(SfrontWndFrameGeometry1U, SfrontWndFrameMaterial1U);
SfrontWndFrame1U.position.set(0, 10.25, 9);
scene.add(SfrontWndFrame1U);

const SfrontWndFrameGeometry2U = new THREE.BoxGeometry(1.85, 0.3, 0.7 );
const SfrontWndFrameMaterial2U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const SfrontWndFrame2U = new THREE.Mesh(SfrontWndFrameGeometry2U, SfrontWndFrameMaterial2U);
SfrontWndFrame2U.position.set(0, 13.75, 9);
scene.add(SfrontWndFrame2U);

const SbRACEFrameGeometry1U = new THREE.BoxGeometry(2.75, 0.45, 1);
const SbRACEFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const SbRACEFrame1U = new THREE.Mesh(SbRACEFrameGeometry1U, SbRACEFrameMaterial1U);
SbRACEFrame1U.position.set(0, 9.85, 9);
scene.add(SbRACEFrame1U);

const SwINDOWFrameGeometry1 = new THREE.BoxGeometry(1.5, 3.5, 0.5 );
const SwINDOWFrameMaterial1 = new THREE.MeshPhongMaterial({map: wndw });
const SwINDOWFrame1 = new THREE.Mesh(SwINDOWFrameGeometry1, SwINDOWFrameMaterial1);
SwINDOWFrame1.position.set(0, 11.85, 9);
scene.add(SwINDOWFrame1);
///////////////////////
const S2frontWndFrameGeometry1 = new THREE.BoxGeometry(0.3, 3.25, 0.7 );
const S2frontWndFrameMaterial1 = new THREE.MeshPhongMaterial({map: brkwllgry });
const S2frontWndFrame1 = new THREE.Mesh(S2frontWndFrameGeometry1, S2frontWndFrameMaterial1);
S2frontWndFrame1.position.set(0.75, 12, -9);
scene.add(S2frontWndFrame1);

const S2frontWndFrameGeometry2 = new THREE.BoxGeometry(0.3, 3.25, 0.7 );
const S2frontWndFrameMaterial2 = new THREE.MeshPhongMaterial({map: brkwllgry });
const S2frontWndFrame2 = new THREE.Mesh(S2frontWndFrameGeometry2, S2frontWndFrameMaterial2);
S2frontWndFrame2.position.set(-0.75, 12, -9);
scene.add(S2frontWndFrame2);

const S2frontWndFrameGeometry1U = new THREE.BoxGeometry(1.85, 0.3, 0.7);
const S2frontWndFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const S2frontWndFrame1U = new THREE.Mesh(S2frontWndFrameGeometry1U, S2frontWndFrameMaterial1U);
S2frontWndFrame1U.position.set(0, 10.25, -9);
scene.add(S2frontWndFrame1U);

const S2frontWndFrameGeometry2U = new THREE.BoxGeometry(1.85, 0.3, 0.7 );
const S2frontWndFrameMaterial2U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const S2frontWndFrame2U = new THREE.Mesh(S2frontWndFrameGeometry2U, S2frontWndFrameMaterial2U);
S2frontWndFrame2U.position.set(0, 13.75, -9);
scene.add(S2frontWndFrame2U);

const S2bRACEFrameGeometry1U = new THREE.BoxGeometry(2.75, 0.45, 1);
const S2bRACEFrameMaterial1U = new THREE.MeshPhongMaterial({map: brkwllgryL });
const S2bRACEFrame1U = new THREE.Mesh(S2bRACEFrameGeometry1U, S2bRACEFrameMaterial1U);
S2bRACEFrame1U.position.set(0, 9.85, -9);
scene.add(S2bRACEFrame1U);

const S2wINDOWFrameGeometry1 = new THREE.BoxGeometry(1.5, 3.5, 0.5 );
const S2wINDOWFrameMaterial1 = new THREE.MeshPhongMaterial({map: wndw });
const S2wINDOWFrame1 = new THREE.Mesh(S2wINDOWFrameGeometry1, S2wINDOWFrameMaterial1);
S2wINDOWFrame1.position.set(0, 11.85, -9);
scene.add(S2wINDOWFrame1);
}

roofsides()
function roofsides() {
const brkRoofGeometry = new THREE.BoxGeometry(6, 8, 0.1);
const brkRoofMaterial = new THREE.MeshLambertMaterial({map: brkwll });
const brkRoof = new THREE.Mesh(brkRoofGeometry, brkRoofMaterial);
brkRoof.position.set(1.77, 15, -9);
brkRoof.rotation.z = 1;
scene.add(brkRoof);

const brkRoofGeometry2 = new THREE.BoxGeometry(6, 8, 0.09);
const brkRoofMaterial2 = new THREE.MeshLambertMaterial({map: brkwll });
const brkRoof2 = new THREE.Mesh(brkRoofGeometry2, brkRoofMaterial2);
brkRoof2.position.set(-1.77, 15, -9);
brkRoof2.rotation.z = -1;
scene.add(brkRoof2);

const brkRoofGeometry3 = new THREE.BoxGeometry(6, 8, 0.1);
const brkRoofMaterial3 = new THREE.MeshLambertMaterial({map: brkwll });
const brkRoof3 = new THREE.Mesh(brkRoofGeometry3, brkRoofMaterial3);
brkRoof3.position.set(1.77, 15, 9);
brkRoof3.rotation.z = 1;
scene.add(brkRoof3);

const brkRoofGeometry4 = new THREE.BoxGeometry(6, 8, 0.09);
const brkRoofMaterial4 = new THREE.MeshLambertMaterial({map: brkwll });
const brkRoof4 = new THREE.Mesh(brkRoofGeometry4, brkRoofMaterial4);
brkRoof4.position.set(-1.77, 15, 9);
brkRoof4.rotation.z = -1;
scene.add(brkRoof4);
}

roof()
function roof() {
const roofGeometry = new THREE.BoxGeometry(9.1, 0.5, 20);
const roofMaterial = new THREE.MeshLambertMaterial({ color: 0x84c2ff, map: roofe });  // Apply texture as map
const roof = new THREE.Mesh(roofGeometry, roofMaterial);
roof.position.set(3.75, 17.5, 0);
roof.rotation.z = -0.55;
scene.add(roof);

const roofGeometry2 = new THREE.BoxGeometry(9.1, 0.5, 20);
const roofMaterial2 = new THREE.MeshLambertMaterial({ color: 0x84c2ff, map: roofe });  // Apply texture as map
const roof2 = new THREE.Mesh(roofGeometry2, roofMaterial2);
roof2.position.set(-3.75, 17.5, 0);
roof2.rotation.z = 0.55;
scene.add(roof2);
}

// Camera position
camera.position.set(30, 20, 0);
camera.lookAt(0, 0, 0);

// Animate and render
function animate() {
  requestAnimationFrame(animate);
  animateParticles();
  
  controls.update();
  
  renderer.render(scene, camera);
}

animate();
