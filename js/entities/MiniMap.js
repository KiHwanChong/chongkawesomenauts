game.MiniMap = me.Entity.extend({
    init: function(x, y, settings) {
        this.now = new Date().getTime();
        this.lastBuy = new Date().getTime();
        this.minimap = false;
    },
    update: function() {
        this.now = new Date().getTime();
console.log(this.minimap);
        if (me.input.isKeyPressed("minimap") && this.now - this.lastBuy >= 500) {
            this.lastBuy = this.now;
            if (!this.minimap) {
                this.startMinimap();
            } else {
                this.stopMinimap();
            }
        }

        return true;
    },
    
    startMinimap: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "minimap",
                width: 673,
                height: 96,
                spritewidth: "673",
                spriteheight: "96",
                getShape: function() {
                    return(new me.Rect(0, 0, 673, 96)).toPolygon();
                }
            }]);
        this.floating = true;
        this.minimap = true;
    },
    
    stopMinimap: function() {
        me.game.world.removeChild(game.data.miniMap);        
        this.minimap = false;
    }
});