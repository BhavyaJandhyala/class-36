class Player{
    constructor(){
        }

    getCount(){
       var playerref = database.ref("playerCount");
       playerref.on("value", function(data){
        playerCount = data.val();  
       });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    
    }
    updateName(name){
        var playerName = "player"+ playerCount;
        database.ref(playerName).set({
            name: name
        })
    }
}