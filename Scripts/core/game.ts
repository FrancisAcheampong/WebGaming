//IIFE - Immediately Invoked Function Expression
(function(){

    //Game variables 
    let canvas = document.getElementById("canvas")
    let stage = createjs.Stage;
    let helloLabel:createjs.Text;

    function Init():void {
     console.log("Initialization Started");
     Start();

    }
    function Start():void {
        console.log("Starting Application ...");

        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate =60; // 60 frames per second
        createjs.Ticker.on("tick",Update)

        Main();
    }
    function Update():void{
     helloLabel.rotation-= 5;
     stage.update() // redraws the stage
    }
    function Main():void{

    console.log("Game started ...");
     helloLabel = new createjs.Text("Hello, World!","50px Consolas","#000000")
     helloLabel.x =100;
     helloLabel.y=100;

    stage.addChild(helloLabel);

    }

    window.onload =Init;

})();
