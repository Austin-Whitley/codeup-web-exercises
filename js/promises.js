"use strict";
"use strict";

function getGithubUsernames(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_ACCESS_TOKEN}})
        .then(response => response.json().then(data => {
            console.log(data);
            for(var i = 0; i < data.length; i++) {
                if(data[i].type === "PushEvent") {
                    var latestPush = data[i].created_at
                    let date = new Date(latestPush);
                    console.log(date.toString());
                    break;
                }
            }

        }))
}
getGithubUsernames("Austin-Whitley")

const wait = waitTime => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, waitTime)
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// function wait(number) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, number);
//     });
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));