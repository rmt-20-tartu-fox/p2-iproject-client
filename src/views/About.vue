<template>
  <div>
    <div class="row"></div>
    <h1 class="text-center">New Campground</h1>
    <div class="col-md-6 offset-md-3">
      <form
        action="/campgrounds"
        method="POST"
        novalidate
        class="validated-form"
        enctype="multipart/form-data"
      >
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            name="campground[title]"
            id="title"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="mb-3">
          <label class="form-label" for="location">Location</label>
          <input
            class="form-control"
            type="text"
            id="location"
            name="campground[location]"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>

        <div class="input-group mb-3">
          <label for="price" class="form-label">Campground Price</label>
          <div class="input-group">
            <span class="input-group-text" id="price-label">$</span>
            <input
              type="text"
              class="form-control"
              name="campground[price]"
              placeholder="0.00"
              id="price"
              aria-describedby="price-label"
              required
            />
            <div class="valid-feedback">Looks good!</div>
          </div>
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            type="text"
            class="form-control"
            name="campground[description]"
            id="description"
            required
          ></textarea>
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">Upload Images</label>
          <input
            type="file"
            class="form-file-input form-control"
            id="image"
            name="image"
            multiple
          />
        </div>
        <div class="mb-3">
          <button class="btn btn-success">add campground</button>
        </div>
      </form>
    </div>
  </div>
</template>
