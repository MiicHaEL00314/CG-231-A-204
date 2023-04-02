var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.setClearColor(0xDDDDDD, 1);
    document.body.appendChild(renderer.domElement);
    var scene = new THREE.Scene();

//Camara
var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 20;
camera.position.y = 5;
scene.add(camera);

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

const color = [0x990000, 0x0048BA, 0xF2B400];   //Color cubos

/**
 * cubo: Construye la geometria del objeto
 * ENTRADAS: base= base del objeto
 *           altura= altura del objeto
 *           ancho= ancho del objeto
 *           col= color que se le aplica al objeto
 * SALIDAS: Objeto adquirido apartir de la geometria y el material
 */
function cubo(base, altura, ancho, col) {
  const geometry = new THREE.BoxGeometry(base, altura, ancho);
  const material = new THREE.MeshPhongMaterial({ color: col });
  return new THREE.Mesh(geometry, material);
}

var ArCub = [];
var n = color.length;

//Ciclo generación de cubos
for (var i = 0; i < n; i++) {
  var keyVar=1;         // Variable global
  var lado = i+keyVar;

  ArCub[i] = cubo(lado, lado, lado, color[i]);
  ArCub[i].position.x = 0;                //Posición X
  ArCub[i].position.y = 0;                //Posición Y
  ArCub[i].position.z= 0;                 //Posición Z
}

//Translación cubo 1 (pequeño)
ArCub[0].position.x=lado/2;           
ArCub[0].position.y=lado*(1.8);
ArCub[0].position.z=lado/2;

//Translación cubo 2 (mediano)
ArCub[1].position.x=lado/2;
ArCub[1].position.y=lado*(1.3);
ArCub[1].position.z=lado/2;

//Translación cubo 3 (grande)
ArCub[2].position.x=lado/2;
ArCub[2].position.y=lado/2;
ArCub[2].position.z=lado/2;



//Agrupamiento cubos
const group = new THREE.Group();
for (i = 0; i < n; i++) {
  group.add(ArCub[i]);
}
scene.add(group);




const controls = new THREE.OrbitControls(camera, renderer.domElement);

/**
 * animate: Renderizado del programa
 * ENTRADAS: 
 * SALIDAS: 
 */
function animate() {

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera)
}
animate();