<template>
  <div class="container forget-password">
    <div class="row">
      <div class="col-md-12 col-md-offset-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <div class="text-center">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_351450.png"
                alt="car-key"
                border="0"
              />
              <h2 class="text-center">Form Order</h2>
              <p>You can reset your password here.</p>
              <form
                @submit.prevent="pay"
                id="register-form"
                role="form"
                autocomplete="off"
                class="form"
                method="post"
              >
                <div class="form-group">
                  <div class="input-group">
                    <select v-model="form.price" class="form-control" id="sel1">
                      <option selected="true" disabled="disabled">
                        Select Price
                      </option>
                      <option value="50000">Anime : 50.000</option>
                      <option value="35000">Manga: 35.000</option>
                    </select>
                  </div>
                </div>
                <div class="form-group p-1">
                  <div class="input-group">
                    <span class="input-group-addon"
                      ><i class="glyphicon glyphicon-envelope color-blue"></i
                    ></span>
                    <input
                      v-model="form.email"
                      id="forgetAnswer"
                      name="forgetAnswer"
                      placeholder="Your Email"
                      class="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group p-3">
                  <input
                    name="btnForget"
                    class="btn btn-lg btn-primary btn-block btnForget"
                    value="Order Now"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderForm",
  data() {
    return {
      form: {
        email: '',
        price: ''
      }
    }
  },
  methods: {
    pay() {
      this.$store.dispatch('payment', this.form)
    }
  }
};
</script>

<style scoped>
body {
  background: #f3c538;
}
.forget-pwd > a {
  color: #dc3545;
  font-weight: 500;
}
.forget-password .panel-default {
  padding: 31%;
  margin-top: -27%;
}
.forget-password .panel-body {
  padding: 15%;
  margin-bottom: -50%;
  background: #fff;
  border-radius: 5px;
  /* -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19); */
}
img {
  width: 40%;
  margin-bottom: 10%;
}
.btnForget {
  background: #c0392b;
  border: none;
}
.forget-password .dropdown {
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
.forget-password .dropdown button {
  width: 100%;
}
.forget-password .dropdown ul {
  width: 100%;
}
</style>