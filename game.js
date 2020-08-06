class Game{
    constructor(){

    }
    getData(){
        var dataref = database.ref("gameState");
        dataref.on("value", function(data){
            gameState = data.val();
        })
    }
    updateData(data){
        database.ref("gameState").update({
            gameState: data
        })
    }
    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
             player = new Player();
             player.getCount();
        }
    }
}