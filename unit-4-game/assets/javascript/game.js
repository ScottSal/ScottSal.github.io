/* Playable characters */
var MarioPartyRPG = {
    gameStage: "initial",
    characterSelected: "",
    characterObject: "",
    opponentSelected: "",
    opponentObject: "",
    opponentsRemain: 4
};

var Mario = {
    health: 220,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/mario.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#MarioHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Luigi = {
    health: 195,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/luigi.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#LuigiHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var PrincessPeach = {
    health: 200,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/princess_peach.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#PrincessPeachHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
}; 

var Yoshi = {
    health: 205,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/yoshi.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#YoshiHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Bowser = {
    health: 225,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/bowser.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#BowserHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Wario = {
    health: 215,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/wario.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#WarioHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Waluigi = {
    health: 190,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/waluigi.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#WaluigiHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var Goomba = {
    health: 185,
    attack: Math.floor(Math.random()* 40) + 1,
    counterattack: Math.floor(Math.random()* 20) + 1,
    imageUrl: "./assets/images/goomba.png",
    healthUpdate: function(attackDamage) {
        this.health -= attackDamage;
        $("#GoombaHP").text(this.health);
    },
    attackUpdate: function() {
        this.attack *= 1;
    }
};

var MarioDiv = $("#Mario");
var LuigiDiv = $("#Luigi");
var PrincessPeachDiv = $("#PrincessPeach");
var YoshiDiv = $("#Yoshi");
var BowserDiv = $("#Bowser");
var WarioDiv = $("#Wario");
var WaluigiDiv = $("#Waluigi");
var GoombaDiv = $("#Goomba");

var pipe = new Audio('assets/sounds/warp_pipe.mp3');
var death = new Audio('assets/sounds/death_sound.mp3');
var win = new Audio('assets/sounds/win_sound.mp3');
var mario = new Audio('assets/sounds/mario_its_me.mp3');
var bowser = new Audio('assets/sounds/bowser_laugh.mp3');
var luigi = new Audio('assets/sounds/luigi_sound.mp3');
var peach = new Audio('assets/sounds/peach_sound.mp3');
var wario = new Audio('assets/sounds/wario_sound.mp3');
var yoshi = new Audio('assets/sounds/yoshi_sound.mp3');
var waluigi = new Audio('assets/sounds/waluigi_sound.mp3');
var goomba = new Audio('assets/sounds/goomba_sound.mp3');

/*Character selection */
$(".character").on("click", function() {
    pipe.play();

    if (MarioPartyRPG.gameStage == "initial") {
        MarioPartyRPG.characterSelected = $(this).attr("id");
        $("id" + MarioPartyRPG.characterSelected).remove();

        $("#prompts").text("Choose your next oppenent to battle!");

        console.log(MarioPartyRPG.characterSelected);

        if (MarioPartyRPG.characterSelected == "Mario") {
            mario.play();
            MarioPartyRPG.characterObject = Mario;
            $("#character_display").append(MarioDiv);
            $("#Mario").html('<p>Mario</p> <img src="./assets/images/mario.png" height="225"> <p id="MarioHP">220 HP</p>');
        }

        if (MarioPartyRPG.characterSelected == "Luigi") {
            luigi.play();
            MarioPartyRPG.characterObject = Luigi;
            $("#character_display").append(LuigiDiv);
            $("#Luigi").html('<p>Luigi</p> <img src="assets/images/luigi.png" height="225"> <p id="LuigiHP">195 HP</p>');
        }

        if (MarioPartyRPG.characterSelected == "PrincessPeach") {
            peach.play();
            MarioPartyRPG.characterObject = PrincessPeach;
            $("#character_display").append(PrincessPeachDiv);
            $("#PrincessPeach").html('<p>Princess Peach</p> <img src="assets/images/princess_peach.png" height="225"> <p id="PrincessPeachHP">200 HP</p>');
        }

        if (MarioPartyRPG.characterSelected == "Yoshi") {
            yoshi.play();
            MarioPartyRPG.characterObject = Yoshi;
            $("#character_display").append(YoshiDiv);
            $("#Yoshi").html('<p>Yoshi</p> <img src="assets/images/yoshi.png" height="225"> <p id="YoshiHP">205 HP</p>');
        }

        if (MarioPartyRPG.characterSelected == "Bowser") {
            bowser.play();
            MarioPartyRPG.characterObject = Bowser;
            $("#character_display").append(BowserDiv);
            $("#Bowser").html('<p>Bowser</p> <img src="assets/images/bowser.png" height="225"> <p id="BowserHP">225 HP</p>');
        }

        if (MarioPartyRPG.characterSelected == "Wario") {
            wario.play();
            MarioPartyRPG.characterObject = Wario;
            $("#character_display").append(WarioDiv);
            $("#Wario").html('<p>Wario</p> <img src="assets/images/wario.png" height="225"> <p id="WarioHP">215 HP</p>');
        }

        if (MarioPartyRPG.characterSelected == "Waluigi") {
            waluigi.play();
            MarioPartyRPG.characterObject = Waluigi;
            $("#character_display").append(WaluigiDiv);
            $("#Waluigi").html('<p>Waluigi</p> <img src="assets/images/waluigi.png" height="225"> <p id="WaluigiHP">190 HP</p>');
        }

        if (MarioPartyRPG.characterSelected == "Goomba") {
            goomba.play();
            MarioPartyRPG.characterObject = Goomba;
            $("#character_display").append(GoombaDiv);
            $("#Goomba").html('<p>Goomba</p> <img src="assets/images/goomba.png" height="225"> <p id="GoombaHP">185 HP</p>');
        }

        /* Opponent selection */
        MarioPartyRPG.gameStage = "opponents"

    } else if (MarioPartyRPG.gameStage == "opponents"){
        MarioPartyRPG.opponentSelected = $(this).attr("id");
        $("#" + MarioPartyRPG.opponentSelected).remove();
        
        console.log(MarioPartyRPG.opponentSelected);

        if (MarioPartyRPG.opponentSelected == "Mario") {
            mario.play();
            MarioPartyRPG.opponentObject = Mario;
            $("#enemy_display").append(MarioDiv);
            $("#Mario").html('<p>Mario</p> <img src="./assets/images/mario.png" height="225"> <p id="MarioHP">220 HP</p>');
        }

        if (MarioPartyRPG.opponentSelected == "Luigi") {
            luigi.play();
            MarioPartyRPG.opponentObject = Luigi;
            $("#enemy_display").append(LuigiDiv);
            $("#Luigi").html('<p>Luigi</p> <img src="./assets/images/luigi.png" height="225"> <p id="LuigiHP">195 HP</p>');
        }

        if (MarioPartyRPG.opponentSelected == "PrincessPeach") {
            peach.play();
            MarioPartyRPG.opponentObject = PrincessPeach;
            $("#enemy_display").append(PrincessPeachDiv);
            $("#PrincessPeach").html('<p>Princess Peach</p> <img src="assets/images/princess_peach.png" height="225"> <p id="PrincessPeachHP">200 HP</p>');
        }

        if (MarioPartyRPG.opponentSelected == "Yoshi") {
            yoshi.play();
            MarioPartyRPG.opponentObject = Yoshi;
            $("#enemy_display").append(YoshiDiv);
            $("#Yoshi").html('<p>Yoshi</p> <img src="assets/images/yoshi.png" height="225"> <p Yoshi="YoshiHP">205 HP</p>');
        }

        if (MarioPartyRPG.opponentSelected == "Bowser") {
            bowser.play();
            MarioPartyRPG.opponentObject = Bowser;
            $("#enemy_display").append(BowserDiv);
            $("#Bowser").html('<p>Bowser</p> <img src="assets/images/bowser.png" height="225"> <p id="BowserHP">225 HP</p>');
        }

        if (MarioPartyRPG.opponentSelected == "Wario") {
            wario.play();
            MarioPartyRPG.opponentObject = Wario;
            $("#enemy_display").append(WarioDiv);
            $("#Wario").html('<p>Wario</p> <img src="assets/images/wario.png" height="225"> <p id="WarioHP">215 HP</p>');
        }

        if (MarioPartyRPG.opponentSelected == "Waluigi") {
            waluigi.play();
            MarioPartyRPG.opponentObject = Waluigi;
            $("#enemy_display").append(WaluigiDiv);
            $("#Waluigi").html('<p>Waluigi</p> <img src="assets/images/waluigi.png" height="225"> <p id="WaluigiHP">190 HP</p>');
        }

        if (MarioPartyRPG.opponentSelected == "Goomba") {
            goomba.play();
            MarioPartyRPG.opponentObject = Goomba;
            $("#enemy_display").append(GoombaDiv);
            $("#Goomba").html('<p>Goomba</p> <img src="assets/images/goomba.png" height="225"> <p id="GoombaHP">185 HP</p>');
        }

        MarioPartyRPG.gameStage = "fight";
    }

    console.log(MarioPartyRPG.gameStage);
});

/* Attack sequence */
var renderMessage = function(message) {
    var attackMessage = $("#messageLog");
    var newMessage = $("<p>").text(message);
    attackMessage.append(newMessage);

    if (message == 'clearMessage') {
      attackMessage.text('');
    }
  };

$(".attackButton").on("click", function() {

    if (MarioPartyRPG.gameStage == "fight") {
        
        MarioPartyRPG.opponentObject.healthUpdate(MarioPartyRPG.characterObject.attack);
        MarioPartyRPG.characterObject.attackUpdate();
        
        
        if ((MarioPartyRPG.opponentObject.health <= 0) && (MarioPartyRPG.opponentsRemain >= 1)) {
            $("#messageLog").text("Yahoo! You won!");
            $("#" + MarioPartyRPG.opponentSelected).remove();
            MarioPartyRPG.gameStage = "gameOver";
        }

        if ((MarioPartyRPG.opponentObject.health <= 0) && (MarioPartyRPG.opponentsRemain >= 1)) {
            win.play();
            $("#messageLog").text("Yahoo! You won!  Choose another opponent or press restart!");
            $("#" + MarioPartyRPG.opponentSelected).remove();
            MarioPartyRPG.gameStage = "opponents";
            MarioPartyRPG.opponentsRemain = 4;
        }

        if (MarioPartyRPG.gameStage == "fight") {
            
            MarioPartyRPG.characterObject.healthUpdate(MarioPartyRPG.opponentObject.counterattack);
          
            if (MarioPartyRPG.characterObject.health <= 0) {
                death.play();
                $("#messageLog").text("Momma-mia! You lose! Press restart.");
                MarioPartyRPG.gameStage = "gameOver";
            }
        }

    }

});

$("body").on("click", ".restartButton",function(){	
    location.reload();

});