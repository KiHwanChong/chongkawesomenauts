game.Jump = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "tower",
                width: 1,
                height: 1,
                spritewidth: "1",
                spriteheight: "1",
                getShape: function() {
                    return(new me.Rect(0, 0, 1, 1)).toPolygon();
                }
            }]);
        this.type = "Jump";
    },
    update: function() {
        
    },

});
