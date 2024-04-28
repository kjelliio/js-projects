// if you look at this code I will personally track you down and steal all your money to buy more bucatti.

class Track {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.dirt = new Image();
        this.dirt.src = 'sprites/stripe.png';
        this.house = new Image();
        this.house.src = 'sprites/bul.png';
        this.spriteSheet = new Image();
        this.spriteSheet.src = 'sprites/sp.png';
        this.grass = new Image();
        this.grass.src = 'sprites/greenshiii.webp';
        this.bush = new Image();
        this.bush.src = 'sprites/bush.png';
        this.decor = new Image();
        this.decor.src = 'sprites/decor.png';
        this.width = 100
        this.sprites = [
            // Define sprite properties here
            { x: 0, y: 0, width: 100, height: 120, positionx:100, positiony:100, rotation: Math.PI}, // this is a tragic solution XD
            { x: 0, y: 0, width: 100, height: 120, positionx:325, positiony:100, rotation: Math.PI}, // I didnt have much time ok ...
            { x: 0, y: 0, width: 100, height: 120, positionx:400, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:475, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:550, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:625, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:700, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:775, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:850, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:925, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:1000, positiony:100, rotation: Math.PI},
            { x: 250, y: 200, width: 100, height: 120, positionx:1070, positiony:89, rotation: Math.PI},
            { x: 250, y: 200, width: 100, height: 120, positionx:1090, positiony:165, rotation: Math.PI*0},
            { x: 250, y: 200, width: 100, height: 120, positionx:1172, positiony:158, rotation: Math.PI},
            { x: 0, y: 0, width:100, height: 120, positionx:1194, positiony:248, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:1194, positiony:248, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:1194, positiony:323, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:1194, positiony:398, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:1194, positiony:473, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:1194, positiony:548, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:1194, positiony:623, rotation: Math.PI/2},
            { x: 250, y: 200, width: 100, height: 120, positionx:1190, positiony:700, rotation: Math.PI/-2},
            { x: 120, y: 0, width: 200, height: 160, positionx:1012, positiony:681, rotation: Math.PI},
            { x: 0, y: 0, width: 100, height: 120, positionx:956, positiony:673, rotation: Math.PI},
            { x: 0, y: 0, width: 100, height: 120, positionx:875, positiony:673, rotation: Math.PI},
            { x: 0, y: 0, width: 100, height: 120, positionx:800, positiony:673, rotation: Math.PI},
            { x: 0, y: 0, width: 100, height: 120, positionx:725, positiony:673, rotation: Math.PI},
            { x: 250, y: 200, width: 100, height: 120, positionx:645, positiony:670, rotation: Math.PI*0},
            { x: 0, y: 0, width:100, height: 120, positionx:637, positiony:560, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:1194, positiony:248, rotation: Math.PI/2},
            { x: 250, y: 200, width: 100, height: 120, positionx:626, positiony:488, rotation: Math.PI/2},
            { x: 0, y: 0, width: 100, height: 120, positionx:736, positiony:480, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:800, positiony:480, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:870, positiony:480, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:950, positiony:480, rotation: Math.PI}, 
            { x: 250, y: 200, width: 100, height: 120, positionx:1041, positiony:459, rotation: -Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:1044, positiony:368, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:1044, positiony:330, rotation: Math.PI/2},
            { x: 250, y: 200, width: 100, height: 120, positionx:1022.5, positiony:239, rotation: Math.PI},
            { x: 0, y: 0, width: 100, height: 120, positionx:951, positiony:250, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:875, positiony:250, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:800, positiony:250, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:725, positiony:250, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:650, positiony:250, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:575, positiony:250, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:500, positiony:250, rotation: Math.PI}, 
            { x: 100, y: 200, width: 100, height: 120, positionx:410, positiony:231, rotation: Math.PI},
            { x: 0, y: 0, width: 100, height: 120, positionx:325, positiony:250, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:400, positiony:250, rotation: Math.PI}, 
            { x: 250, y: 200, width: 100, height: 120, positionx:215, positiony:258, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:225, positiony:330, rotation: Math.PI/2},
            { x: 250, y: 200, width: 100, height: 120, positionx:222, positiony:420, rotation: -Math.PI/2},
            { x: 0, y: 0, width: 100, height: 120, positionx:150, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:230, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:260, positiony:100, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:131, positiony:442, rotation: Math.PI}, 
            { x: 0, y: 0, width: 100, height: 120, positionx:80, positiony:442, rotation: Math.PI}, 
            { x: 250, y: 200, width: 100, height: 120, positionx:10, positiony:440, rotation: Math.PI*0},
            { x: 0, y: 0, width:100, height: 120, positionx:2, positiony:330, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:2, positiony:250, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:2, positiony:200, rotation: Math.PI/2},
            { x: 0, y: 0, width:100, height: 120, positionx:2, positiony:180, rotation: Math.PI/2},
            { x: 250, y: 200, width: 100, height: 120, positionx:-8, positiony:108, rotation: Math.PI/2},
        ];
    }

    loadImages() {
        return Promise.all([
            new Promise(resolve => {
                this.dirt.onload = resolve;
            }),
            new Promise(resolve => {
                this.spriteSheet.onload = resolve;
            })
        ]);
    }

    draw() {
        this.ctx.drawImage(this.grass,0,0,500,500,0,0,1350,900);
        this.ctx.drawImage(this.house, 0, 0, 70, 102, 33, 24, 70, 102);
        this.ctx.drawImage(this.bush,0, 0, 88, 100, 235, 200, 88, 100);
        this.ctx.drawImage(this.bush,0, 0, 88, 100, 650, 420, 88, 100);
        this.ctx.drawImage(this.bush,0, 0, 88, 100, 1150, 200, 88, 100);
        this.ctx.drawImage(this.bush,0, 0, 88, 100, 1100, 300, 88, 100);
        this.ctx.drawImage(this.decor,0, 0, 70, 75, 575, 670, 70, 102);
        
        // Draw the track
        this.sprites.forEach(sprite => {
            this.width = sprite.width; 
            this.height = sprite.height; 
            this.ctx.save();
            this.ctx.translate(sprite.positionx + sprite.width / 2, sprite.positiony + sprite.height / 2);
            this.ctx.rotate(sprite.rotation);
            this.ctx.drawImage(
                this.spriteSheet,
                sprite.x,
                sprite.y,
                sprite.width,
                sprite.height,
                -sprite.width / 2,
                -sprite.height / 2,
                sprite.width,
                sprite.height
            );
            
            this.ctx.restore();
            this.ctx.drawImage(this.dirt, 0, 0, 500, 500, 100, 450, 70, 90);

            
        });
    }
}

export default Track; // finally this nightmare is done holy mother of bucatti gods.
