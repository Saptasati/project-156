//Registering components in treasure.js
AFRAME.registerComponent("target-coin", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createCoins(id, position);
      }
    } ,
  
    createCoins: function(id, position) { 
      
        var islandE1 = document.querySelector("#island");
        var coinE1 = document.createElement("a-entity");
        coinE1.setAttribute("id" , id);
        coinE1.setAttribute("position", position);
        coinE1.setAttribute("scale", {x: 500, y:500, z:500});
        coinE1.setAttribute("gltf-model", "assets/stylized_coin/scene.gltf");
        coinE1.setAttribute("animation-mixer", {});
        coinE1El.setAttribute("static-body", {
          shape: "sphere",
          sphereRadius: 2
        });
        coinE1El.setAttribute("game-play", {
          elementId: `#${id}`
        })
        islandE1.appendChild(coinE1)
    }
  });
  
  