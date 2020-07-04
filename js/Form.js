class Form {

    constructor() {
      this.button = createButton('Click here to play');
      this.reset = createButton('reset');
    }
  
    display(){
      this.button.position(510,500);
      this.reset.position(785,20);

      this.button.mousePressed(()=>{
        gameState = 1;        

      }); 

      this.reset.mousePressed(()=>{
        this.button.display();
        gameState = 0;
        
      });

    }

    hide(){
        this.button.hide();
    }
}
  