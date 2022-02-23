import Vue from "vue";
import Vuex from "vuex";
import url from "../../apis/url";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false,
    page: "",
    books: [],
    isLoginPage: false,
    currentPage: 1,
    totalBooks: "",
    book: "",
    token: "",
    myBook: "",
    title: "",
  },
  mutations: {
    SET_IS_LOGIN(state, payload) {
      state.isLogin = payload;
    },
    SET_PAGE(state, payload) {
      state.page = payload;
    },
    SET_BOOKS(state, payload) {
      state.totalBooks = payload.count;
      state.books = payload.rows;
    },
    SET_IS_LOGIN_PAGE(state, payload) {
      state.isLoginPage = payload;
    },
    SET_CURRENT_PAGE(state, payload) {
      state.currentPage = payload;
    },
    SET_BOOK(state, payload) {
      state.book = payload;
    },
    SET_TOKEN(state, payload) {
      state.token = payload.token;
    },
    SET_MY_BOOK(state, payload) {
      state.myBook = payload;
    },
    SET_TITLE(state, payload) {
      state.title = payload;
    },
  },
  actions: {
    async onSuccess(context, payload) {
      try {
        let id_token = payload.getAuthResponse().id_token;
        const resp = await url.post("/customers/login-google", {
          token: id_token,
        });
        localStorage.setItem("access_token", resp.data.access_token);
        if (resp.status == 200) {
          context.commit("SET_IS_LOGIN", true);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async login(context, payload) {
      try {
        const resp = await url.post("/customers/login", {
          email: payload.email,
          password: payload.password,
        });
        localStorage.setItem("access_token", resp.data.access_token);
        if (resp.status == 200) {
          context.commit("SET_IS_LOGIN", true);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async register(context, payload) {
      try {
        const resp = await url.post("/customers/register", {
          email: payload.email,
          password: payload.password,
        });
        if (resp.status == 201) {
          context.commit("SET_PAGE", "Login");
        }
      } catch (error) {
        context.commit("SET_PAGE", "");
        console.log(error);
      }
    },

    async fetchBooks(context, payload) {
      try {
        let baseUrl;
        if (payload.title) {
          baseUrl = `/customers/books?page=${payload.page}&title=${payload.title}`;
        } else {
          baseUrl = `/customers/books?page=${payload.page}`;
        }

        const resp = await url.get(baseUrl);
        context.commit("SET_BOOKS", resp.data);
        // context.commit("SET_CURRENT_PAGE", payload);
      } catch (error) {
        console.log(error);
      }
    },

    async detailBook(context, payload) {
      try {
        const resp = await url.get(`/customers/books/${payload.id}`, {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        if (resp.status == 200) {
          context.commit("SET_BOOK", resp.data);
        }
      } catch (error) {
        console.log(error);
      }
    },

    async payment(context, payload) {
      try {
        const resp = await url.post(
          "/customers/payment",
          {
            price: payload.price,
            first_name: payload.first_name,
            last_name: payload.last_name,
            quantity: payload.quantity,
            itemName: payload.itemName,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        context.commit("SET_TOKEN", resp.data);
      } catch (error) {
        console.log(error);
      }
    },

    async createTransaction(context, payload) {
      try {
        const resp = await url.post(
          "/customers/transactions",
          {
            BookId: payload.BookId,
            order_id: payload.order_id,
            transaction_status: payload.transaction_status,
          },
          {
            headers: {
              access_token: localStorage.access_token,
            },
          }
        );
        if (resp.status == 201) {
          context.commit("SET_PAGE", "Home");
        }
      } catch (error) {
        console.log(error);
      }
    },

    async fetchMyBook(context) {
      try {
        const resp = await url.get("/customers/transactions", {
          headers: {
            access_token: localStorage.access_token,
          },
        });
        context.commit("SET_MY_BOOK", resp.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
