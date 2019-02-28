var initGame=function(){
var canvas = document.getElementById("renderCanvas");
canvas.style.display="block";
var quitButton=document.getElementById("quit");
var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
var createScene = function(){
    var scene = new BABYLON.Scene(engine);
    var cameraLocation=new BABYLON.Vector3(0, 5, -10);
	var camera = new BABYLON.FreeCamera('camera1', cameraLocation, scene);
	camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
	light.intensity= 0.5;
    var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene, false, BABYLON.Mesh.FRONTSIDE);
    sphere.position.y = 1;
    var ground = BABYLON.Mesh.CreateGround('ground1', 6000, 6000, 2, scene, false);
    return scene;
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
