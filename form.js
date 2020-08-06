class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("Car Racing");
        var input = createInput("name");
        var button = createButton("click me!");

        title.position(130, 0);
        input.position(130, 160);
        button.position(130, 0);

        
        var greeting = createElement("h3");
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();

            playerCount = playerCount+1;
            player.updateCount(playerCount);
            player.updateName(name);

            greeting.html("Welcome "+ name);
            greeting.position(130, 160);

        })


    }
}