/**
 * 執行結果：
 * success 78
 * error City not found
 *
 * 缺點：
 * 1. 要多去寫判斷式 (if(err)...)
 * 2. callback 可以被呼叫兩次讓成功與失敗的case同時發生
 */

function getTempCallback (location, callback) {
    callback(undefined, 78);
    callback("City not found");
}

getTempCallback("Philadelphia", function (err, temp) {
    if (err) {
        console.log("error", err);
    } else {
        console.log("success", temp);
    }
});

/**
 * Use Promise
 *
 * 優點：
 * 1. resolve and reject can only fired one of tham.
 * 2. success and fail function is write in separate function
 *    and be executed when resolve or reject is executed.
 */
function getTempPromise (location) {
    return new Promise (function (resolve, reject) { 
        setTimeout(function () {
            resolve(78);
            reject("City not found");
        }, 1000);
    });
}

getTempPromise("Philadelphia").then(function (temp) {
    console.log("promise success", temp);
}, function (err) {
    console.log("promise error", err);
});


// Challange Area
function addPromise(a, b) {
    return new Promise (function (resolve, reject) {
        if (typeof a === "number" && typeof b === "number") {
            resolve(a + b);
        } else {
            reject("a & b need to be numbers");
        }
    });
}

addPromise(2, 3).then(function (sum) {
    console.log("success", sum);
}, function (err) {
    console.log("error", err);
});

addPromise("andrew", 9).then(function (sum) {
    console.log("this should not show up");
}, function (err) {
    console.log("this should appear", err);
});