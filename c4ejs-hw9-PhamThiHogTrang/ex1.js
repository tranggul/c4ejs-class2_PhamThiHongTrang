

//1
let promise = new Promise(function (resolve, reject) {

    setTimeout(() => resolve("Promise is da best"), 5000);
});
promise.then(function (value) {
    console.log(value);
});

//2





