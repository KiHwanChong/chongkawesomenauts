game.LoadProfile = me.ScreenObject.extend({
        /**	
         *  action to perform on state change
         */
        onResetEvent: function() {	
            me.game.world.addChild( new me.Sprite (0, 0, me.loader.getImage('load-screen')), -10); 

            me.input.unbindKey(me.input.KEY.B);
            me.input.unbindKey(me.input.KEY.Q);
            me.input.unbindKey(me.input.KEY.E);
            me.input.unbindKey(me.input.KEY.W);
            me.input.unbindKey(me.input.KEY.A);

            me.game.world.addChild(new (me.Renderable.extend({
                init: function(){
                    this._super(me.Renderable, 'init', [10, 10, 300, 50])
                    this.font = new me.Font("Arial", 26, "white");
                },
                //drawing text and adjusting its position with width and height
                draw: function(renderer){
                    this.font.draw(renderer.getContext(), "ENTER YOUR USERNAME AND PASSWORD", this.pos.x, this.pos.y);
                },


            })));


        },


        /**	
         *  action to perform when leaving this screen (state change)
         */
        onDestroyEvent: function() {

        }
});
