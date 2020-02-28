//Functions returning promises...
function doHomework() {
    return new Promise(function(resolve, reject) {
        //code to do homework...
        let homeWorkDone = false;
        if (homeWorkDone)
            resolve('HOMEWORK DONE!!');
        else
            reject('NO CAN DO!');
    });
}

function playGame() {
    return new Promise(function(resolve, reject){
        //Play LoL or anything else....
        let donePlaying = true;
        if (donePlaying)
            resolve('DONE PLAYING!');
        else
            reject('SOMETHING WENT WRONG!');
    });
}

function readBook() {
    return new Promise(function(resolve, reject) {
        //Read a book...
        let doneReading = true;
        if (doneReading)
            resolve('DONE READING!');
        else
            reject('CANT READ!');
    });
}

//Running promises in sequence (and treating errors)...
doHomework().catch(function(error_msg){
    console.log("#### ERROR DOING HOMEWORK! ####");
    console.log("ERROR MSG from doHomework: "+ error_msg);
    
}).then(function(msg) {
    console.log("MSG from doHomework: " + msg);
    return playGame();

}).catch(function(error_msg){
    console.log("#### ERROR PLAY GAME! ####");
    console.log("ERROR MSG from playGame: "+ error_msg);

}).then(function(msg) {
    console.log("MSG from playGame: " + msg);
    return readBook();

}).then(function(msg){
    console.log("MSG from readBook: " + msg);
    console.log("All done!");

}).catch(function(error_msg){
    console.log("#### ERROR READING BOOK! ####");
    console.log("ERROR MSG from readBook: "+ error_msg);

});