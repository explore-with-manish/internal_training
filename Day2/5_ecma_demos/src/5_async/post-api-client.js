const url = "https://jsonplaceholder.typicode.com/posts";

const postApiClient = {
    getAllPostsUsingCallbacks: function (successCB, errorCB) {
        fetch(url).then(response => {
            response.json().then(data => {
                successCB(data);
            }).catch(error => {
                errorCB("Parsing Error")
            });
        }).catch(error => {
            errorCB("Communication Error")
        })
    },
    getAllPostsUsingPromise: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    resolve(data);
                }).catch(error => {
                    reject("Parsing Error")
                });
            }).catch(error => {
                reject("Communication Error")
            })
        });
    },
    getAllPostsAsync: async function () {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data
        } catch (err) {
            throw new Error(err.message);
        }
    }
};

export default postApiClient;