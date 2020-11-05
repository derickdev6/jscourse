const entrance = (time)=>{
    let age = prompt("How old are you?");
    if (age >= 18){
        if (time >= 2 && time < 7 && !free){
            document.write("You can go in! and free!!!");
        }
        else document.write("You can go in!");
    }
    else document.write("You cant go in...");
}
let free = false;
entrance(3);