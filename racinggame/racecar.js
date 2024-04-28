// RaceCar class
class RaceCar {
    constructor(posx, posy, orientation, imageSrc) {
        this.posx = posx;
        this.posy = posy;
        this.image = new Image();
        this.image.src = imageSrc;
        this.width = 50;
        this.height = 50;
        this.speed = 0;
        this.orientation = orientation;
        this.backWheelSpeedX = this.speed * Math.cos(this.orientation); 
        this.backWheelSpeedY = this.speed * Math.sin(this.orientation);
        this.acceleration = 1;
       

        // Add event listeners in the constructor for moving forward and turning left/right
        document.addEventListener('keydown', (event) => {
            let moveForward = false;
            let rotateLeft = false;
            let rotateRight = false;
            switch(event.key)
            {
                case 'w':
                    moveForward = true;
                    break;
                case 'a':
                    rotateLeft = true;
                    break;
                case 's':
                    // You can add backward movement if needed
                    break;
                case 'd':
                    rotateRight = true;
                    break;
            }

        });


    }

    // Method to draw the race car on the canvas
    draw(ctx) {
        // Save the current transformation state
        ctx.save();
        
        // Translate canvas origin to the center of the front axle
        ctx.translate(this.posx - this.width / 2, this.posy - this.height);
        
        // Rotate the canvas based on the car's orientation angle
        ctx.rotate(this.orientation); 
        
        // Draw the car image
        ctx.drawImage(this.image, -this.width / 2, -this.height, this.width, this.height); 
        
        // Restore the transformation state
        ctx.restore();
    }

    // Function to turn the car left (counter-clockwise)


    // Function to move the car forward
    moveForward() {

        
   
            // Calculate the forward direction vector based on the car's orientation
            
            
            
            let forwardX = Math.cos(this.orientation); // 1 
            let forwardY = Math.sin(this.orientation); // 0
            console.log(forwardX);
            console.log(forwardY);
            console.log(this.orientation);

            var angleinradiant = this.orientation * Math.PI / 180;
         
            console.log(this.posx);
        
            // Move the car forward in the direction it's facing
            if (moveForward) {
                if(this.speed < 12)
                {
                    this.speed+=this.acceleration;
                }
                
                this.posx += this.forwardX * speed;
                this.posyy += this.forwardY * speed;
            }
            if (rotateLeft) {
                this.orientation -= 10;
            }
            if (rotateRight) {
                r += 10;
            }
    
            if (r >= 360) {
                r = 0;
            }
        
        
            // Move the back wheels forward independently
           
           
        
        
    }

    updateForwardVector() {
        this.forwardY = Math.sin(this.orientation);
        this.forwardX = Math.cos(this.orientation);
    }
}

export default RaceCar
