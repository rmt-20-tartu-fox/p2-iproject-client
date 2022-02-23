<template>
  <b-container class="overflow-auto" fluid>
    <b-row :currentPage="currentPage" align-h="around">
      <card-item
        v-for="product in products"
        v-bind:key="product.id"
        :product="product"
      ></card-item>
    </b-row>
  </b-container>
</template>

<script>
  export default {};
</script>

<style></style>
