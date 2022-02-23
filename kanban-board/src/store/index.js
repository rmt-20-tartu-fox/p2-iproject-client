import Vue from "vue";
import Vuex from "vuex";
import { auth, db, signInWithEmailAndPassword } from "../../firebase/index";
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
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    issue: [],
    datailIssue: {},
  },
  mutations: {
    SET_ISSUE(state, payload) {
      state.issue = payload;
    },
    SET_DETAIL_ISSUE(state, payload) {
      console.log(payload, "indiadkakjdnkasjd");
      state.datailIssue = payload;
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
      signInWithEmailAndPassword(auth, email, password)
        .then((resp) => {
          Swal.fire({
            icon: "success",
            title: "You have logged in",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(resp);
          localStorage.setItem("access_token", resp.user.accessToken);
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
      })
        .then((data) => {
          // const newData = {
          //   ...payload,
          //   status: "open",
          //   id: data.id,
          // };
          // const newIssue = [newData, ...context.state.issue];
          // context.commit("SET_ISSUE", newIssue);
          // context.dispatch("getCollection");
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
          // const data = context.state.issue;
          // const newData = data.filter((el) => {
          //   return el.id !== payload;
          // });
          // context.commit("SET_ISSUE", newData);
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
        context.commit("SET_ISSUE", formated);
      });
      if (isUnsubcribe) {
        unsub();
      }
    },
  },
});
