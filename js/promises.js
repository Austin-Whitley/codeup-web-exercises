"use strict";
"use strict";

function getGithubUsernames(userName) {
    return fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': GITHUB_ACCESS_TOKEN}})
        .then(response => response.json().then(data => {
            console.log(data);
            var latestPush = data[0].created_at
            let date = new Date(latestPush);

            console.log(date.toString());
        }))
}
getGithubUsernames("Austin-Whitley")



function wait(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, number);
    });
}
wait(1500)