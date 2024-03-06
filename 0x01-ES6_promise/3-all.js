// 3-all.js
import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()])
        .then(([photoResponse, userResponse]) => {
            console.log(`${photoResponse.body.firstName} ${userResponse.body.lastName}`);
        })
        .catch(error => {
            console.error("Signup system offline");
        });
}
