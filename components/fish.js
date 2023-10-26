// Registering components in fish.js
AFRAME.registerComponent("moving-fish", {
    init: function() {
        for (i = 1; i <=20; i++) {
            // id
            var id = `fish${i}`;
            // position variables
            var posX = (Math.random() *3000 + (-1000));
            var posY = (Math.random() *2 + (-1));
            var posZ = (Math.random() *3000 + -1000);
            var position = {x: posX, y: posY, z: posZ};

            //call the function
            this.movingFish(id, position)


        }
    },
    movingFish: function(id, position) {
        var islandE1 = document.querySelector("#island");
        var fishE1 = document.createElement("a-entity");
        fishE1.setAttribute("id" , id);
        fishE1.setAttribute("position", position);
        fishE1.setAttribute("scale", {x: 500, y:500, z:500});
        fishE1.setAttribute("gltf-model", "assets/small_fish/scene.gltf");
        fishE1.setAttribute("animation-mixer", {});
        fishEl.setAttribute("static-body", {
            shape:"sphere",
            sphereRadius: 5
          });
        fishEl.setAttribute("game-play", {
            elementId: `#${id}`
          })
        islandE1.appendChild(fishE1)
    }
})