<template>
  <div class="row justify-content-evenly p-3 mx-5">
    <div class="col col-md-5 bg-white p-4 rounded-xl">
      <form class="justify-content-center">
        <div class="form-group mt-2">
          <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Name" />
        </div>
        <div class="form-group mt-3">
          <input type="text" class="form-control" placeholder="Education" />
        </div>
        <div class="form-group mt-3">
          <input type="text" class="form-control" placeholder="Job" />
        </div>
        <div class="form-group mt-3">
          <textarea class="form-control" rows="3" placeholder="Describe yourself here..."></textarea>
        </div>
        <div class="form-group mt-3">
          <select class="form-control">
            <option selected disabled>Sex</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div class="d-flex justify-content-center"><button type="submit" class="btn btn-primary mt-3">Submit</button></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileForm",
};
</script>

<style></style>
