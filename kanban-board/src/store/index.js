import Vue from "vue";
import Vuex from "vuex";
import { auth, db } from "../../firebase/index";
import router from "../router/index.js";
import Swal from "sweetalert2";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issue: [],
  },
  mutations: {
    SET_ISSUE(state, payload) {
      state.issue = payload;
    },
  },
  actions: {
    register(context, { email, password }) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((resp) => {
          Swal.fire({
            icon: "success",
            title: "account registration successful",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("access_token", resp.user._delegate.accessToken);
          router.push("/board");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    login(context, { email, password }) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then((resp) => {
          Swal.fire({
            icon: "success",
            title: "You have logged in",
            showConfirmButton: false,
            timer: 1500,
          });
          localStorage.setItem("access_token", resp.user._delegate.accessToken);
          router.push("/board");
        })
        .catch((error) => {
          alert(error.message, "ajjajaj");
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
      })
        .then((data) => {
          console.log(data);
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
    deleteIssue(context, payload) {
      console.log(payload, "askdnksn");
      deleteDoc(doc(db, "addedIssue", payload));
    },
  },
});
