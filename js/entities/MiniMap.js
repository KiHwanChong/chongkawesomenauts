game.MiniMap = me.Entity.extend({
    init: function(x, y, settings) {
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
       }
});