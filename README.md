# p2-iproject-client - DiagnosTool
Individual Project - Client

## This is a required project to pass phase-2 in hacktiv-8

### Project description

> Disclaimer: This app is not intented to be used as a main source to detect diseases, API used in this app have flaws and is not complete. This app use basic symptom checker feature from [api-medic](https://apimedic.com/). In real world cases, you need complex features to diagnose a disease. Also, seek medical assistance if you are not feeling well. The creator of this app is not a doctor, so he don't really know how to diagnose a disease.

This project is called DiagnosTool, it has these features:
1. Diagnose disease based on symptoms
2. Search nearby hospitals
3. Live chat with online doctor

This is client side, using `vue js` and `vue cli` as front-end framework

There are hidden routes in this app, intented to be used by registered doctor, add `/doctor` to main route, to chat as a doctor. You may need to login first, so you may be directed to route `/login`. Use this login detail: 
```
{
  email: dokter@mail.com
  password: 12345
}
```

Packages/libraries used in this app:
- [axios](https://github.com/axios/axios)
- [basic-vue-chat](https://github.com/jmaczan/basic-vue-chat)
- [moment-js](https://momentjs.com/) **deprecated**
- [socket-io](https://www.npmjs.com/package/vue-socket.io-extended)
- [sweetalert2](https://sweetalert2.github.io/)
- [vue-hacktiv8-footer](https://www.npmjs.com/package/vue-hacktiv8-footer)
- [vue-simple-spinner](https://github.com/dzwillia/vue-simple-spinner/)
- [vue-multiselect](https://vue-multiselect.js.org/)
- [boostrap-vue](https://bootstrap-vue.org/docs)

To install necessary packages, simply runs `npm install` on terminal

This app use server from this repository: https://github.com/Jubel13/p2-iproject-server

To preview this app, go to this link:
[DiagnosTool](https://individual-project-hacktiv8.web.app/)

Link 2: https://individual-project-hacktiv8.firebaseapp.com/

*If this app stopped working on diagnose feature, you need to wait for a month, because [api-medic](https://apimedic.com/) limits API calls, 100 calls / month for free user. Or, you can change the code in the project [server](https://github.com/Jubel13/p2-iproject-server) to use dummy data from api-medic, also, set `baseUrl` in `diagnostool/src/apis/server.js` to `localhost:3000`. You need to run the server on your own computer first.*

