const admin = require("firebase-admin");
const credentials = require("./credentials.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

// cli comand line interface
const args =  process.argv.slice(2);

const auth = admin.auth();

(async ()=>{
    try {
        const[email,password,displayName]=args;
       const user = await auth.createUser({
            email:email,
            password: password,
            displayName:displayName,
        })

       await auth.setCustomUserClaims(user.uid,{super: true, admin:true})
       console.log("super usuario criado")
    } catch (err) {
      console.log(err)  
    }
})();