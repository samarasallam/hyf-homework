function sayHello(name) {
    console.log(`hello ${name}, how are you?`);
}

setTimeout(sayHello, 2000, 'virgeen');

sayHello('sam');




function printTime(){
    const time = new Date ();
    const printTheTime = `${time.getDate()}- ${time.getMonth()}- ${time.getFullYear()}- ${time.getHours()}- ${time.getMinutes()}- ${time.getSeconds()}`
    console.log(printTheTime);
    console.log(time);
}
setInterval (printTime, 1000);
