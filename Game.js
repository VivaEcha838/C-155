AFRAME.registerComponent("game-play", {
   schema: {elementID:{type: 'string', default: '#ring1'}},

   isCollided:function(elementID){
       var element = document.querySelector(elementID)
       element.addEventListener("collide", (e)=>{
           if(elementID.includes("#ring")){
               console.log("collision with " + elementId)
           }else if(elementID.includes('#hurdle')){
               console.log("collision with" + elementID)
           }
       })
   },

   update: function(){
       console.log("inside update")
       this.isCollided(this.data.elementID)
   }
})