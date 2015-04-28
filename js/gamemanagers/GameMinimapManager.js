game.GameMinimapManager = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
        this.minimap = true;
        this.now = new Date().getTime();
        this.lastMinimap = this.now;
        
    },
    update: function() {
        if (me.input.isKeyPressed("minimap") === true && (this.now - this.lastMinimap) >= (game.data.spearTimer * 100)) {           
            this.lastMinimap = this.now;
            if (this.minimap === false) {
                me.game.world.addChild(game.data.minimap, 30);
                this.minimap = true;
            } else if (this.minimap === true) {
                me.game.world.removeChild(game.data.minimap, 30);
                this.minimap = false;
            }
       }
        console.log(this.minimap);
                return true;
    },
});