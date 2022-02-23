<template>
  <section id="signup" class="signup">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-3 align-self-center mb-3">
          <h2 class="text-center fw-bold subtitle">Sign Up</h2>
        </div>
        <div class="row justify-content-evenly p-3 mx-5">
          <div class="col col-md-5 bg-white p-4 rounded-xl">
            <form class="justify-content-center">
              <div class="form-group mt-2">
                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
              </div>
              <div class="form-group mt-2">
                <input type="password" class="form-control" placeholder="Password" />
              </div>
              <div class="form-group mt-2">
                <input type="date" class="form-control" placeholder="Date of Birth" />
              </div>
              <div class="d-flex justify-content-center"><button type="submit" class="btn btn-primary mt-2">Sign Up</button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style></style>
