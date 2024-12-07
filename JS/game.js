class Game{
    constructor(){
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
        this.Puntuacion = createElement("h2");
    }

    elements(){
        form.hide();
        form.titleImg.position(70,60);
        form.titleImg.class("gameTitleAfterEffect")
        this.resetTitle.html("Reiniciar el Juego");
        this.resetTitle.class("resetText");
        this.resetTitle.position(width,height /2);
        this.resetButton.class("resetButtom");
        this.resetButton.position(width,height /2+50);
        this.Puntuacion.html("Puntuacion");
        this.Puntuacion.class("resetText");
        this.Puntuacion.position(width,height /3)
    }

    addSprites(){
        //mandar a dibujar los objetos
    }

    play(){
        //anexo de formulario player y los elementos a interactuar
    }

    start(){
        //referencia con formulario player y anexo de imagenes para cada participante
    }

    getState(){
        //hacer referencia al la base de datos y se optiene el "State"
    }

    update(){
        //dar de alta el estado del juego "state"
    }

    handlePlayerControls(){
        //agregar condicionales para control de jugador
    }

    gameOver(){
        swal({
            title:"Fin del juego tremendo manco",
            text:"Suerte para la proxima, manco",
            imageUrl:"https://i.postimg.cc/zB5cFhNr/Manos-para-quitar-lo-manco.jpg", imageSise:"100 x 100",
            confirmButtonText:"Asta luago manco"
        });
        sowRank({
            title:"Que pro",
            text:"Eres el mejor",
            imageUrl:"https://i.postimg.cc/qBWZ1W4w/que-pro.jpg", imageSise:"100 x 100",
            confirmButtonText:"Sigue asi papu"
        });
    }
}