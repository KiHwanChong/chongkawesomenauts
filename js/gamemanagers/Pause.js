game.Pause = Object.extend({
    //basically same codes with SpendGold screen.
    //I only changed text and the binding keys
    init: function(x, y, settings){
        this.now = new Date().getTime();
        this.lastPause = new Date().getTime();
        this.paused = false;
        this.alwaysUpdate = true;
        this.updateWhenPaused = true;
        this.pausing = false;
    },
    
    update: function(){
        this.now = new Date().getTime();
        
        if(me.input.isKeyPressed("pause") && this.now-this.lastPause >=1000){
            this.lastPause = this.now;
            if(!this.pausing){
                this.startPausing();
            }else{
                this.stopPausing();
            }
        }
        
        return true;
    },
    
    startPausing: function() {
        this.pausing = true;
        me.state.pause(me.state.PLAY);
        game.data.pausePos = me.game.viewport.localToWorld(0, 0);
        game.data.buyscreen = new me.Sprite(game.data.pausePos.x, game.data.pausePos.y, me.loader.getImage('gold-screen'));
        game.data.buyscreen.updateWhenPaused = true;
        game.data.buyscreen.setOpacity(0.8);
        me.game.world.addChild(game.data.buyscreen, 34);
        game.data.player.body.setVelocity(0, 0);
        this.setBuyText();
    },
    
    setBuyText: function(){
        game.data.buytext = new (me.Renderable.extend({
                init: function(){
                    this._super(me.Renderable, 'init', [game.data.pausePos.x, game.data.pausePos.y, 300, 50])
                    this.font = new me.Font("Arial", 45, "white");
                    this.updateWhenPaused = true;
                    this.alwaysUpdate = true;
                },
                //drawing text and adjusting its position with width and height
                draw: function(renderer){
                    this.font.draw(renderer.getContext(), "PRESS P to resume", this.pos.x, this.pos.y);
                   
                    },
                
                              
            }));
            
      me.game.world.addChild(game.data.buytext, 35);
  
    },
    
    stopPausing: function() {
        this.pausing = false;
        me.state.resume(me.state.PLAY);
        game.data.player.body.setVelocity(game.data.playerMoveSpeed, 20);
        me.game.world.removeChild(game.data.buyscreen);
        me.game.world.removeChild(game.data.buytext);
    },
});