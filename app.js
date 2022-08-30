console.log('hello');

var config = {
    type: Phaser.AUTO,
    width: 1800,
    height: 900,
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:500 },
            debug:true
        }
    },

};
var cursors;
var player;
var game = new Phaser.Game(config);



function preload ()
{
   this.load.image('BG', 'assets/BG.png'); 
   this.load.image('zombie', "male/Idle (1).png");
   this.load.image('zombie1', "male/Walk (1).png");
   this.load.image('zombie2', "male/Walk (2).png");
   this.load.image('zombie3', "male/Walk (3).png");
   this.load.image('zombie4', "male/Walk (4).png");
   this.load.image('zombie5', "male/Walk (5).png");
   this.load.image('zombie6', "male/Walk (6).png");
   this.load.image('zombie7', "male/Walk (7).png");
   this.load.image('zombie8', "male/Walk (8).png");
   this.load.image('zombie9', "male/Walk (9).png");
   this.load.image('zombie10', "male/Walk (10).png");
   this.load.image('sol1', "assets/tiles/Tile (1).png");
   this.load.image('sol2', "assets/tiles/Tile (2).png");
   this.load.image('sol3', "assets/tiles/Tile (3).png");
}

function create ()
{
    cursors = this.input.keyboard.createCursorKeys();
    console.log(cursors);

    this.anims.create ({
        key : 'playerwalk',
        frames: [
          {key : "zombie1"},  
          {key : "zombie2"},  
          {key : "zombie3"},  
          {key : 'zombie4'},  
          {key : 'zombie5'},  
          {key : 'zombie6'},  
          {key : 'zombie7'},  
          {key : 'zombie8'},  
          {key : 'zombie9'},  
          {key : 'zombie10'},  
         
        ],
        frameRate : 10,
        repeat : -1,
    });

    //Animation inutile ci-dessou :
    // this.anims.create ({
    //     key : 'zbn',
    //     frames: [
    //       {key : "zombie"},  
    //     ],
    //     frameRate : 10,
    //     repeat : -1,
    // });

    var background = this.add.image(400, 300, 'BG');
    player = this.physics.add.sprite(400, 200, 'zombie');
    player.body.setSize(250,490);
    // player.anims.play("playerwalk");

    var platforms = this.physics.add.staticGroup();
    var sol1 = this.add.sprite(50, 800, 'sol1');
    var sol2 = this.add.sprite(100, 800, 'sol2');
    var sol4 = this.add.sprite(150, 800, 'sol2');
    var sol5 = this.add.sprite(200, 800, 'sol2');
    var sol6 = this.add.sprite(300, 800, 'sol2');
    var sol7 = this.add.sprite(400, 800, 'sol2');
    var sol8 = this.add.sprite(500, 800, 'sol2');
    var sol9 = this.add.sprite(600, 800, 'sol2');
    var sol3 = this.add.sprite(700, 800, 'sol3');
    var sol10 = this.add.sprite(700, 500, 'sol1');
    var sol11 = this.add.sprite(800, 500, 'sol2');
    var sol12= this.add.sprite(900, 500, 'sol3');
    platforms.add(sol1);
    platforms.add(sol2);
    platforms.add(sol3);
    platforms.add(sol4);
    platforms.add(sol5);
    platforms.add(sol6);
    platforms.add(sol7);
    platforms.add(sol8);
    platforms.add(sol9);
    platforms.add(sol10);
    platforms.add(sol11);
    platforms.add(sol12);

    this.physics.add.collider(platforms,player);
   
}

function update(){
    
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.anims.play("playerwalk",true);
        player.setFlip(true,false);
    
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play("playerwalk",true);
        player.setFlip(false,false);
    }
    else
    {
        player.setVelocityX(0);
        // player.anims.play('zbn')
        player.setTexture('zombie');
        
    }

    if (cursors.space.isDown && player.body.touching.down)
    {
        player.setVelocityY(-555);
    }


}
