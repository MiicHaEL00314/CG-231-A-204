var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);
    
var scene = new THREE.Scene();

//Camara
var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 5;
camera.position.y = 1;
camera.position.x= 3;

scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);


//Luz
const light = new THREE.AmbientLight(0x404040, 5);
scene.add(light);

//Creación de malla
const size = 1000;
const divisions = 1000;
const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

//Creación de ejes X,Y,Z
const axesHelper = new THREE.AxesHelper( 50 );
scene.add( axesHelper );



//Variable global
var altura=3;

//Creación de la geometria
var geometry = new THREE.ConeGeometry(1, altura, 12);
var material = new THREE.MeshNormalMaterial({ color: 0xFFFFFF });
var cone = new THREE.Mesh(geometry, material);
cone.position.x = altura/2;
cone.rotation.z = 270*Math.PI/180;
scene.add(cone)


//Transformación para forma 2
cone.position.y = 0.5;
cone.position.x = (altura/2)+0.25;
cone.rotation.z = 252*Math.PI/180;



function render() {

  requestAnimationFrame(render);
  renderer.render(scene, camera)
}
render();