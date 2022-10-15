const listDrum = document.querySelectorAll('.btn');
listDrum.forEach( (drum, index) => {
    drum.onclick = () => {
        // let sound1 = new Audio("./sounds/tom1.mp3")
        //         sound1.play();
        switch (index) {
            case 0:
                let sound = new Audio("./sounds/tom-1.mp3")
                sound.play();
                break;
            case 1:
                let sound1 = new Audio("./sounds/tom-2.mp3")
                sound1.play();
                break;
            case 2:
                let sound2 = new Audio("./sounds/tom-3.mp3")
                sound2.play();
                break;
            case 3:
                let sound3 = new Audio("./sounds/tom-4.mp3")
                sound3.play();
                break;
            case 4:
                let sound4 = new Audio("./sounds/snare.mp3")
                sound4.play();
                break;
            case 5:
                let sound5 = new Audio("./sounds/crash.mp3")
                sound5.play();
                break;
            case 6:
                let sound6 = new Audio("./sounds/kick-bass.mp3")
                sound6.play();
                break;
        }
    }
});
