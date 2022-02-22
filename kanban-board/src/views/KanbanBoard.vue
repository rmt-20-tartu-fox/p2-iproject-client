<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col form-inline">
        <b-form-input
          v-model="newTask"
          placeholder="Enter task"
          @keyub.enter="add"
        ></b-form-input>
        <b-button class="ml-2" variant="primary" @click="add">Add</b-button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-md-3">
        <div class="p-2 alert alert-secondary">
          <h3>Backlog</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrBacklog"
            group="task"
          >
            <div
              class="list-group-item"
              v-for="element in arrBacklog"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-md-3">
        <div class="p-2 alert alert-primary">
          <h3>In Progress</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrInProgress"
            group="task"
          >
            <div
              class="list-group-item"
              v-for="element in arrInProgress"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-md-3">
        <div class="p-2 alert alert-warning">
          <h3>Tested</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrTested"
            group="task"
          >
            <div
              class="list-group-item"
              v-for="element in arrTested"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
      <div class="col-md-3">
        <div class="p-2 alert alert-success">
          <h3>Done</h3>
          <draggable
            class="list-group kanban-column"
            :list="arrDone"
            group="task"
          >
            <div
              class="list-group-item"
              v-for="element in arrDone"
              :key="element.name"
            >
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
    <div>
      <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
      <b-sidebar
        id="sidebar-no-header"
        aria-labelledby="sidebar-no-header-title"
        no-header
        shadow
      >
        <template #default="{ hide }">
          <div class="p-3">
            <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item active @click="hide">Active</b-nav-item>
                <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                <b-nav-item href="#link-2" @click="hide"
                  >Another Link</b-nav-item
                >
              </b-nav>
            </nav>
            <b-button variant="primary" block @click="hide"
              >Close Sidebar</b-button
            >
          </div>
        </template>
      </b-sidebar>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "app",
  components: {
    draggable,
  },
  data() {
    return {
      newTask: "",
      arrBacklog: [
        { name: "Test 1" },
        { name: "Test 2" },
        { name: "Test 3" },
        { name: "Test 4" },
      ],
      arrInProgress: [],
      arrTested: [],
      arrDone: [],
    };
  },
  methods: {
    add() {
      if (this.newTask) {
        this.arrBacklog.push({ name: this.newTask });
        this.newTask = "";
      }
    },
  },
};
</script>

<style>
.kanban-column {
  min-height: 300px;
}
</style>
