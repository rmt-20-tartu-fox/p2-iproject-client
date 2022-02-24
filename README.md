# p2-iproject-client - DiagnosTool
Individual Project - Client

## This is a required project to pass phase-2 in hacktiv-8

### Project description

> Disclaimer: This app is not intented as a main source to detect disease, API used in this app has flawed and is not complete. This app use basic symptom checker feature from [api-medic](https://apimedic.com/). In real world cases, you need complex feature to diagnose a disease. Also, seek medical assistance if you are not feeling well. The creator of this app is not a doctor, so he don't really know how to diagnose a disease.

This project is called DiagnosTool, it has these features:
1. Diagnose disease based on symptoms
2. Search nearby hospitals
3. Live chat with online doctor

This is client side, using `vue js` and `vue cli` as front-end framework

There are hidden routes in this app, intented to be used by registered doctor, add `/doctor` to chat as a doctor. You may need to login first, so you may be directed to route `/login`. Use this login detail: ``` {
email: dokter@mail.com
password: 12345
}
