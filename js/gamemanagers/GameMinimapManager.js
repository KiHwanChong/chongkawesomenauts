game.GameMinimapManager = Object.extend({
    init: function(x, y, settings) {
        this.minimap = true;
        
        
    },
    update: function() {
        //add and remove the minimap and miniplayer, dependin on this.minimap
        if (me.input.isKeyPressed("minimap") === true) {  
            if (this.minimap === false) {
                me.game.world.addChild(game.data.minimap, 30);
                me.game.world.addChild(game.data.miniPlayer, 30);
                this.minimap = true;    
                
            } else if (this.minimap === true) {
                me.game.world.removeChild(game.data.minimap, 30);
                me.game.world.removeChild(game.data.miniPlayer, 30);
                this.minimap = false;       
                
            }
       }
        console.log(this.minimap);
                return true;
    },
});