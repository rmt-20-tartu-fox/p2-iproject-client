<template>
  <details close>
    <summary>
      <div class="wrapper-card">
        {{ element.title }}
        <iframe :src="element.icon" />
      </div>
    </summary>

    <p>Description:</p>
    <p>{{ element.description }}</p>
    <p>{{ element.dueDate }}</p>
  </details>
</template>

<script>
export default {
  name: "Card",
  props: ["element"],
};
</script>

<style></style>
