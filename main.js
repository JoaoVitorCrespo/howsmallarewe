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
camera.position.setX(2.160493162539535);
camera.position.setY(-0.16618193036867804);
camera.position.setZ(-11.232669295534476);
const controls = new OrbitControls(camera,renderer.domElement);


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, -550);
const ambientLight = new THREE.AmbientLight(0xffffff);
cena.add(pointLight, ambientLight);
const gridHelper = new THREE.GridHelper(1000);
gridHelper.position.z = -550
cena.add(gridHelper);


var manager = new THREE.LoadingManager(manager);
manager.onLoad = function() {
  console.log( 'Loading complete' );
};

const stars = new THREE.TextureLoader(manager).load('images/milkway.jpg');
const galaxy = new THREE.Mesh(
  new THREE.SphereGeometry(9999),
  new THREE.MeshBasicMaterial({
    map: stars,
    side: THREE.BackSide
  })
);

cena.add(galaxy);


let voyager;
const loaderVoyager = new GLTFLoader(manager);
loaderVoyager.load( 'images/Voyager.glb', function ( gltf ) {
  voyager = gltf.scene.children[0];
  voyager.scale.set(0.01220, 0.01220, 0.01220);
  voyager.position.z = -10;
	cena.add(gltf.scene);
},
undefined, function ( error ) {
	console.error( error );
} );

cena.add(voyager);



let iss;
const loaderISS = new GLTFLoader(manager);
loaderISS.load( 'images/ISS.glb', function ( gltf ) {
  iss = gltf.scene.children[0];
  iss.scale.set(0.01220, 0.01220, 0.01220);
  iss.position.z = -10;
	cena.add(iss);
},
undefined, function ( error ) {
	console.error( error );
} );


let terra;
const loaderEarth = new GLTFLoader(manager);
loaderEarth.load( 'images/earth.glb', function ( gltf ) {
  terra = gltf.scene.children[0];
  terra.scale.set(0.0091491347741797, 0.0091491347741797, 0.0091491347741797);
  terra.position.z = 0;
  cena.add(gltf.scene);
},
  undefined, function ( error ) {
	console.error( error );
} );

let sol;
const loaderSun = new GLTFLoader(manager);
loaderSun.load( 'images/sun.glb', function ( gltf ) {
  sol = gltf.scene.children[0];
  sol.position.z = -550;
	cena.add(gltf.scene);
},
 undefined, function ( error ) {
	console.error( error );
} );

let lua;
const loaderMoon = new GLTFLoader(manager);
loaderMoon.load( 'images/moon.glb', function ( gltf ) {
  lua = gltf.scene.children[0];
  lua.scale.set(0.0024944352696202, 0.0024944352696202, 0.0024944352696202);
  lua.position.z = 10;
	cena.add(gltf.scene);
},
 undefined, function ( error ) {
	console.error( error );
} );


let marte;
const loaderMars = new GLTFLoader(manager);
loaderMars.load( 'images/mars.glb', function ( gltf ) {
  marte = gltf.scene.children[0];
  marte.scale.set(0.0048675235154735, 0.0048675235154735, 0.0048675235154735);
  marte.position.z = 20;
	cena.add(gltf.scene);
},
 undefined, function ( error ) {
	console.error( error );
} );

let jupiter;
const loaderJupiter = new GLTFLoader(manager);
loaderJupiter.load( 'images/jupiter.glb', function ( gltf ) {
  jupiter = gltf.scene.children[0];
  jupiter.scale.set(0.1003949163495369, 0.1003949163495369, 0.1003949163495369);
  jupiter.position.z = 100;
	cena.add(gltf.scene);
},
undefined, function ( error ) {
	console.error( error );
} );


let saturno, aneis1, aneis2;
const loaderSaturn = new GLTFLoader(manager);
loaderSaturn.load( 'images/saturn.glb', function ( gltf ) {
  saturno = gltf.scene.children[2];
  saturno.scale.set(0.083621741940116, 0.083621741940116, 0.083621741940116);
  saturno.position.z = 300;
  saturno.rotation.x = 0.27;
  aneis1 = gltf.scene.children[0];
  aneis1.scale.set(0.083621741940116, 0.083621741940116, 0.083621741940116);
  aneis1.position.z = 300;
  aneis1.rotation.x = 0.27;
  aneis2 = gltf.scene.children[1];
  aneis2.scale.set(0.083621741940116, 0.083621741940116, 0.083621741940116);
  aneis2.position.z = 300;
  aneis2.rotation.x = 0.27;

	cena.add(gltf.scene);
},
 undefined, function ( error ) {
	console.error( error );
} );


var telaLoading = document.getElementById("loading");
function animacao(){

  requestAnimationFrame(animacao);
  
  terra.rotation.y += 0.001;
  iss.rotation.y += 0.001;
  iss.rotation.x += 0.001;
  
  controls.update();
  console.log('posicao x: ' + camera.position.x+ ' posicao y: ' + camera.position.y + ' posicao z: ' + camera.position.z);
  renderer.render(cena, camera);
  telaLoading.remove();
}

animacao()
