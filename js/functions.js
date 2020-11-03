document.write("The function is a saluter");

function sayhello(){
    answer = prompt("Hi, how are you?")

    if (answer == "good"){
        document.write("<br>That's good!");
    }
    else if (answer == "bad"){
        document.write("<br>That's bad");
    }
}
sayhello();

//functions can be defined this way also

const sayhi = function(name){
    document.write(`<br>Hi ${name}, how are you?`)
}
sayhi("Derick");


const salute = name => document.write(`<br>Hey ${name}, salute!`)

salute("Derick");