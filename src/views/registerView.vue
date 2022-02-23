<template>
  <div class="image">
    <div class="container-fluid" style="margin-top: 5%">
      <div class="row main-content bg-success text-center">
        <div class="col-md-4 text-center company__info">
          <span class="company__logo"
            ><h2><span class="fa fa-android"></span></h2
          ></span>
          <h4
            class="company_title"
            style="color: black; font-family: 'Oswald', sans-serif"
          ></h4>
        </div>
        <div class="col-md-8 col-xs-12 col-sm-12 login_form">
          <div class="container-fluid">
            <div class="col" style="margin-top: 5%; color: black">
              <h2>Log In</h2>
            </div>
            <div class="col">
              <form control="" class="form-group" @submit.prevent="register">
                <div class="row">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form__input"
                    placeholder="Username"
                    v-model="registerBox.email"
                  />
                </div>
                <div class="row">
                  <!-- <span class="fa fa-lock"></span> -->
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="form__input"
                    placeholder="Password"
                    v-model="registerBox.password"
                  />
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="form-control btn btn-primary rounded submit px-3"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div class="col">
              <p>
                Already have an account?
                <a href="#"
                  ><router-link to="/login">Login Here</router-link></a
                >
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterView",
  data() {
    return {
      registerBox: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      // console.log(this.registerBox, "><><><><><>><");
      this.$store.dispatch("register", this.registerBox);
    },
  },
};
</script>

<style>
.backgroundImage {
  background-image: url("https://scontent.fcgk6-2.fna.fbcdn.net/v/t1.6435-9/118816034_191136675781186_5216271724774487243_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=ik3Yc0f9MM0AX_kc5Xy&_nc_ht=scontent.fcgk6-2.fna&oh=00_AT_DSI0rzaigOw2m47_hMBEsW0tytjwZdn6eCv6-NEdyaQ&oe=623BA190");
}
.main-content {
  width: 50%;
  border-radius: 20px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
  margin: 5em auto;
  display: flex;
}
.company__info {
  background-image: url("https://i.pinimg.com/originals/d3/6a/01/d36a01bcfe615476aff5373fcf78f4c2.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: #008080;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
.fa-android {
  font-size: 3em;
}
@media screen and (max-width: 640px) {
  .main-content {
    width: 90%;
  }
  .company__info {
    display: none;
  }
  .login_form {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
}
@media screen and (min-width: 642px) and (max-width: 800px) {
  .main-content {
    width: 70%;
  }
}
.row > h2 {
  color: #0f1a1a;
}
.login_form {
  background-color: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
form {
  padding: 0 2em;
}
.form__input {
  width: 100%;
  border: 0px solid transparent;
  border-radius: 0;
  border-bottom: 1px solid #aaa;
  padding: 1em 0.5em 0.5em;
  padding-left: 2em;
  outline: none;
  margin: 1.5em auto;
  transition: all 0.5s ease;
}
.form__input:focus {
  border-bottom-color: #008080;
  box-shadow: 0 0 5px rgba(0, 80, 80, 0.4);
  border-radius: 4px;
}
</style>
