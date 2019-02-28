var initGame=function(){
var canvas = document.getElementById("renderCanvas");
canvas.style.display="block";
var quitButton=document.getElementById("quit");
var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
var createScene = function(){
	var scene = new BABYLON.Scene(engine);
	// The player eyes height
	this.height = 2;
	// The player speed
	this.speed = 1;
	// The player inertia
	this.inertia = 0.9;
	// The mouse sensibility (lower is most sensible)
	this.angularSensibility = 1000;
	// The player camera
	this.camera = this._initCamera();
	var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
	light.intensity= 0.5;
	var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);
	sphere.position.y = 1;
	var ground = BABYLON.Mesh.CreateGround('ground1', 6000, 6000, 2, scene, false);
	return scene;
}
_initCamera : function() {
	var cam = new BABYLON.FreeCamera("camera", this.spawnPoint, this.scene);
	cam.attachControl(this.scene.getEngine().getRenderingCanvas());
	cam.ellipsoid = new BABYLON.Vector3(2, this.height, 2);
	cam.checkCollisions = true;
	cam.applyGravity = true;
	cam.keysUp = [90]; // Z
	cam.keysDown = [83]; // S
	cam.keysLeft = [81]; // Q
	cam.keysRight = [68]; // D
	cam.speed = this.speed;
	cam.inertia = this.inertia;
	cam.angularSensibility = this.angularSensibility;
	return cam;
}
quitButton.addEventListener("click", function(){
	engine.dispose();
	canvas.style.display="none";
});
var scene = createScene();
engine.runRenderLoop(function(){
    scene.render();
});
window.addEventListener('resize', function(){
    engine.resize();
});
};
