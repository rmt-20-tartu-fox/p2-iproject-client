import Vue from "vue";
import Vuex from "vuex";
import {
  auth,
  db,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "../../firebase/index";
import router from "../router/index.js";
import Swal from "sweetalert2";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issue: [],
    datailIssue: {},
    dataWeather: {},
    icon: "",
  },
  mutations: {
    SET_ISSUE(state, payload) {
      state.issue = payload;
    },
    SET_DETAIL_ISSUE(state, payload) {
      state.datailIssue = payload;
    },
    SET_WEATHER(state, payload) {
      state.dataWeather = payload;
    },
    SET_ICON(state, payload) {
      state.icon = payload;
    },
  },
  actions: {
    register(context, { email, password }) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((resp) => {
          Swal.fire({
            icon: "success",
            title: "account registration successful",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("access_token", resp.user.accessToken);
          localStorage.setItem("email", resp.user.email);
          router.push("/board");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    login(context, { email, password }) {
      signInWithEmailAndPassword(auth, email, password)
        .then((resp) => {
          Swal.fire({
            icon: "success",
            title: "You have logged in",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("access_token", resp.user.accessToken);
          localStorage.setItem("email", resp.user.email);
          router.push("/board");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCollection(context) {
      const docRef = collection(db, "addedIssue");
      getDocs(docRef)
        .then((data) => {
          const formated = [];
          data.forEach((doc) => {
            formated.push({ ...doc.data(), id: doc.id });
          });
          context.commit("SET_ISSUE", formated);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    addIssue(context, payload) {
      addDoc(collection(db, "addedIssue"), {
        ...payload,
        status: "open",
        icon: context.state.icon,
      })
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "SUCCESS ADD ISSUE",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    getCollectionByid(context, payload) {
      const docRef = doc(db, "addedIssue", payload);
      getDoc(docRef)
        .then((data) => {
          const formated = {
            id: data.id,
            title: data.data().title,
            description: data.data().description,
            dueDate: data.data().dueDate,
          };
          context.commit("SET_DETAIL_ISSUE", formated);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    updateIssue(context, payload) {
      const ref = doc(db, "addedIssue", payload.id);
      updateDoc(ref, payload.data).then((data) => {
        console.log(data);
      });
    },
    deleteIssue(context, payload) {
      deleteDoc(doc(db, "addedIssue", payload))
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Success Delete",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    listenDataBase(context, isUnsubcribe) {
      const unsub = onSnapshot(collection(db, "addedIssue"), (snap) => {
        const formated = [];
        snap.docs.forEach((doc) => {
          formated.push({ ...doc.data(), id: doc.id });
        });
        console.log(formated);
        context.commit("SET_ISSUE", formated);
      });
      if (isUnsubcribe) {
        unsub();
      }
    },
    weather(context) {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?lat=-5.0&lon=120.0&appid=da70b468d4446f0b823148298fd3f2d8"
        )
        .then((data) => {
          const result = {
            negara: data.data.name,
            weather: data.data.weather[0],
          };
          context.commit("SET_WEATHER", result);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getIcon(context) {
      axios
        .get(
          `https://boiling-ravine-28201.herokuapp.com/icon?email=${localStorage.getItem(
            "email"
          )}`,
          "Access-Control-Allow-Origin"
        )
        // https://boiling-ravine-28201.herokuapp.com
        // http://localhost:3000/
        .then(({ data }) => {
          const icon = data.data.embed_url;
          context.commit("SET_ICON", icon);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
