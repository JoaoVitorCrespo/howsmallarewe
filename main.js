import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const cena = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 99999999999999);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(-10);
renderer.render(cena, camera);

const controls = new OrbitControls(camera,renderer.domElement);
const stars = new THREE.TextureLoader().load('images/2k_stars.jpg');
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, -550);
const ambientLight = new THREE.AmbientLight(0xCECECE);
cena.add(pointLight, ambientLight);
cena.background = stars;
const gridHelper = new THREE.GridHelper(46);

cena.add(gridHelper);



let terra;
const loaderEarth = new GLTFLoader();
loaderEarth.load( 'images/earth.glb', function ( gltf ) {
  terra = gltf.scene.children[0];
  terra.scale.set(0.0091491347741797, 0.0091491347741797, 0.0091491347741797);
  terra.position.z = 0;
  cena.add(gltf.scene);
}, undefined, function ( error ) {
	console.error( error );
} );

let sol;
const loaderSun = new GLTFLoader();
loaderSun.load( 'https://solarsystem.nasa.gov/system/resources/gltf_files/2352_Sun_1_1391000.glb', function ( gltf ) {
  sol = gltf.scene.children[0];
  sol.position.z = -550;
	cena.add(gltf.scene);
}, undefined, function ( error ) {
	console.error( error );
} );

let lua;
const loaderMoon = new GLTFLoader();
loaderMoon.load( 'images/moon.glb', function ( gltf ) {
  lua = gltf.scene.children[0];
  lua.scale.set(0.0024944352696202, 0.0024944352696202, 0.0024944352696202);
  lua.position.z = 10;
	cena.add(gltf.scene);
}, undefined, function ( error ) {
	console.error( error );
} );

let marte;
const loaderMars = new GLTFLoader();
loaderMars.load( 'images/mars.glb', function ( gltf ) {
  marte = gltf.scene.children[0];
  marte.scale.set(0.0048675235154735, 0.0048675235154735, 0.0048675235154735);
  marte.position.z = 20;
	cena.add(gltf.scene);
}, undefined, function ( error ) {
	console.error( error );
} );

let jupiter;
const loaderJupiter = new GLTFLoader();
loaderJupiter.load( 'images/jupiter.glb', function ( gltf ) {
  jupiter = gltf.scene.children[0];
  jupiter.scale.set(0.1003949163495369, 0.1003949163495369, 0.1003949163495369);
  jupiter.position.z = 100;
	cena.add(gltf.scene);
}, undefined, function ( error ) {
	console.error( error );
} );

let saturno, aneis1, aneis2;
const loaderSaturn = new GLTFLoader();
loaderSaturn.load( 'images/saturn.glb', function ( gltf ) {
  saturno = gltf.scene.children[2];
  saturno.scale.set(0.083621741940116, 0.083621741940116, 0.083621741940116);
  saturno.position.z = 300;
  aneis1 = gltf.scene.children[0];
  aneis1.scale.set(0.083621741940116, 0.083621741940116, 0.083621741940116);
  aneis1.position.z = 300;
  aneis2 = gltf.scene.children[1];
  aneis2.scale.set(0.083621741940116, 0.083621741940116, 0.083621741940116);
  aneis2.position.z = 300;

	cena.add(gltf.scene);
}, undefined, function ( error ) {
	console.error( error );
} );


function animacao(){
  requestAnimationFrame(animacao);
  terra.rotation.y += 0.001;
  controls.update();
  renderer.render(cena, camera);
}

animacao()
