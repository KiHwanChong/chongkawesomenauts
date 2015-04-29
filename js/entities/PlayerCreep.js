game.PlayerCreep = me.Entity.extend({
    //same thing with enemy creep
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "creep2",
                width: 100,
                height: 85,
                spritewidth: "100",
                spriteheight: "85",
                getShape: function() {
                    return(new me.Rect(0, 0, 100, 85)).toPolygon();
                }
            }]);
        this.health = game.data.playerCreepHealth;
        this.alwaysUpdate = true;
        //this.attacking lets us know if the enemy is currently attacking
        this.attacking = false;
        //keeps track of when our creep last attacked anything
        this.lastAttacking = new Date().getTime();
        //keeps track of the last time our creep hit anything
        this.lastHit = new Date().getTime();
        this.now = new Date().getTime();
        this.body.setVelocity(3, 20);
        
        this.flipX(true);

        this.type = "PlayerCreep";

        this.renderable.addAnimation("walk", [0, 1, 2, 3, 4], 80);
        this.renderable.setCurrentAnimation("walk");

    },
    loseHealth: function(damage) {
        this.health = this.health - damage;
        
    },
    
    update: function(delta) {
        if(this.health <= 0){
            me.game.world.removeChild(this);
        }
        
        this.now = new Date().getTime();
        this.body.vel.x += this.body.accel.x * me.timer.tick;

        me.collision.check(this, true, this.collideHandler.bind(this), true);


        this.body.update(delta);

        this._super(me.Entity, "update", [delta]);

        return true;
    },
    collideHandler: function(response) {
        if (response.b.type === 'EnemyBaseEntity') {
            this.attacking = true;
            this.lastAttacking = this.now;
            this.body.vel.x = 0;
            //keeps moving the creep to the right to maintain its position
            //checks that it has been at least 1 second since this creep hit a base
            if ((this.now - this.lastHit >= 1000)) {
                this.lastHit = this.now;
                //makes the player base call its loseHealth function and passes it a
                //damage of 1
                response.b.loseHealth(game.data.playerCreepAttack);

            }
        } else if (response.b.type === 'EnemyCreep') {
            this.attacking = true;
            this.lastAttacking = this.now;
            this.body.vel.x = 0;
            //keeps moving the creep to the right to maintain its position
            //checks that it has been at least 1 second since this creep hit a base
            if ((this.now - this.lastHit >= 1000)) {
                this.lastHit = this.now;
                //makes the player base call its loseHealth function and passes it a
                //damage of 1
                response.b.loseHealth(game.data.enemyCreepAttack);

            }
        } else if (response.b.type === 'EnemyEntity') {
            this.attacking = true;
            this.lastAttacking = this.now;
            this.body.vel.x = 0;
            //keeps moving the creep to the right to maintain its position
            //checks that it has been at least 1 second since this creep hit a base
            if ((this.now - this.lastHit >= 1000)) {
                this.lastHit = this.now;
                //makes the player base call its loseHealth function and passes it a
                //damage of 1
                response.b.loseHealth(game.data.enemyCreepAttack);

            
            }
        }
        if (response.b.type === 'Jump') {
            this.body.vel.y -= this.body.maxVel.y * me.timer.tick;
            this.body.jumping = true;
            }
    }

});

