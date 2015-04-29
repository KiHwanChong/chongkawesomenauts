game.GameTimerManager = Object.extend({
    init: function(x, y, settings) {
        this.now = new Date().getTime();
        this.lastCreep = new Date().getTime();
        this.paused = false;
        this.alwaysUpdate = true;
        
    },
    update: function() {
        this.now = new Date().getTime();
        this.goldTimerCheck();
        this.creepTimerCheck();
        
        return true;
    },
    
    goldTimerCheck: function(){
      if (Math.round(this.now / 1000) % 20 === 0 && (this.now - this.lastCreep >= 1000)) {
            game.data.gold += (Number(game.data.exp1)+1);
            console.log("Current gold: " + game.data.gold);
            
        }  
    },
    
    creepTimerCheck: function(){
        //respawning enemy creeps, player creeps, and enemy hero
        if (Math.round(this.now / 1000) % 10 === 0 && (this.now - this.lastCreep >= 1000)) {
            this.lastCreep = this.now;
            var creepe = me.pool.pull("EnemyCreep", 4320, 0, {});
            me.game.world.addChild(creepe, 5);
            var creepf = me.pool.pull("PlayerCreep", 0, 0, {});
            me.game.world.addChild(creepf, 5);
            var creepg = me.pool.pull("EnemyEntity", 4320, 0, {});
            me.game.world.addChild(creepg, 5);
        }
    }
});
