game.ExperienceManager = Object.extend({
    init: function(x, y, settings) {
        this.alwaysUpdate = true;
        this.gameover = false;
    },
    update: function() {
        //you lose or win with alert messages
        if (game.data.win === true && !game.data.gameover) {
            this.gameOver(true);
            alert("YOU WIN!");
        } else if (game.data.win === false && !game.data.gameover) {
            this.gameOver(false);
            alert("YOU LOSE!");
        }

        return true;
    },
    gameOver: function(win) {
        if (win) {
            game.data.exp += 10;
        } else {
            game.data.exp += 1;

        }
        game.data.gameover = true;
        me.save.exp = game.data.exp;

            //save exp data into php
            $.ajax({
                type: "POST",
                url: "php/controller/save-user.php",
                data: {
                    exp: game.data.exp,
                    exp1: game.data.exp1,
                    exp2: game.data.exp2,
                    exp3: game.data.exp3,
                    exp4: game.data.exp4,
                },
                dataType: "text"
            })
                    .success(function(response) {
                        if (response === "true") {
                            me.state.change(me.state.MENU);
                        } else {
                            alert(response);
                        }
                    })
                    .fail(function(response) {
                        alfer("Fail");
                  });
    }

});

