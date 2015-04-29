game.EnemyEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "enemyHero",
                width: 64,
                height: 64,
                spritewidth: "64",
                spriteheight: "64",
                getShape: function() {
                    return(new me.Rect(0, 0, 64, 64)).toPolygon();
                }
            }]);
        this.health = game.data.enemyHeroHealth;
        this.alwaysUpdate = true;
        //this.attacking lets us know if the enemy is currently attacking
        this.attacking = false;
        //keeps track of when our creep last attacked anything
        this.lastAttacking = new Date().getTime();
        //keeps track of the last time our creep hit anything
        this.lastHit = new Date().getTime();
        this.now = new Date().getTime();
        this.body.setVelocity(4, 20);

        this.type = "EnemyEntity";

        this.renderable.addAnimation("walk", [117, 118, 119, 120, 121, 122, 123, 124, 125], 80);
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
        this.body.vel.x -= this.body.accel.x * me.timer.tick;

        me.collision.check(this, true, this.collideHandler.bind(this), true);


        this.body.update(delta);

        this._super(me.Entity, "update", [delta]);

        return true;
    },
    collideHandler: function(response) {
        if (response.b.type === 'PlayerBaseEntity') {
            this.attacking = true;
            this.lastAttacking = this.now;
            this.body.vel.x = 0;
            //keeps moving the creep to the right to maintain its position
            //checks that it has been at least 1 second since this creep hit a base
            if ((this.now - this.lastHit >= 1000)) {
                this.lastHit = this.now;
                //makes the player base call its loseHealth function and passes it a
                //damage of 1
                response.b.loseHealth(game.data.enemyHeroAttack);

            }
        } else if (response.b.type === 'PlayerCreep') {
            var xdif = this.pos.x - response.b.pos.x;

            this.attacking = true;
            this.lastAttacking = this.now;
            if (xdif > 0) {
                //keeps moving the creep to the right to maintain its position           
                this.body.vel.x = 0;
            
            }
            //checks that it has been at least 1 second since this creep hit a base
            if ((this.now - this.lastHit >= 1000) && xdif > 0) {
                this.lastHit = this.now;
                //makes the player call its loseHealth function and passes it a
                //damage of 1
                response.b.loseHealth(game.data.enemyHeroAttack);

            }
        }else if (response.b.type === 'PlayerEntity') {
            var xdif = this.pos.x - response.b.pos.x;

            this.attacking = true;
            this.lastAttacking = this.now;
            if (xdif > 0) {
                //keeps moving the creep to the right to maintain its position           
                this.body.vel.x = 0;
            
            }
            //checks that it has been at least 1 second since this creep hit a base
            if ((this.now - this.lastHit >= 1000) && xdif > 0) {
                this.lastHit = this.now;
                //makes the player call its loseHealth function and passes it a
                //damage of 1
                response.b.loseHealth(game.data.enemyHeroAttack);

            }
        }
        if (response.b.type === 'Jump') {
            this.body.vel.y -= this.body.maxVel.y * me.timer.tick;
            this.body.jumping = true;
            }
    }

});

