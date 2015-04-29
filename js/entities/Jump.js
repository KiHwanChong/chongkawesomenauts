game.Jump = me.Entity.extend({
    //making a jump entity, which lets creeps jump over it.
    //i made this jump entity with the same image of the yellow box, so it seems they just jump over it, without colliding with anything.
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "jump",
                width: 71,
                height: 72,
                spritewidth: "71",
                spriteheight: "72",
                getShape: function() {
                    return(new me.Rect(0, 0, 75, 72)).toPolygon();
                }
            }]);
        this.alwaysUpdate = true;
        this.body.onCollision = this.onCollision.bind(this);
        this.type = "Jump";
    },
    update: function(delta) {
        this.body.update(delta);

        this._super(me.Entity, "update", [delta]);
        return true;
    },
    onCollision: function() {

    },
 
});
