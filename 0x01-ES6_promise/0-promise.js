// 0-promise.js
export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // to fetch data from an API
        setTimeout(() => {
            const data = "Sample API response data";
            resolve(data);
        }, 1000);
    });
}
