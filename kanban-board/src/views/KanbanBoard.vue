<template>
  <div>
    <div>
      <b-button v-b-toggle.sidebar-footer>Add Issue</b-button>
      <b-sidebar
        id="sidebar-footer"
        aria-label="Sidebar with custom footer"
        no-header
        shadow
      >
        <template #footer="{ hide }">
          <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
            <strong class="mr-auto">Footer</strong>
            <b-button size="sm" @click="hide">Close</b-button>
          </div>
        </template>
        <div class="px-3 py-2">
          <form @submit.prevent="clickAddIssue">
            <div class="add-issue">
              <label class="label-add"> Title</label>
            </div>
            <div class="add-issue">
              <input
                class="input-issue"
                type="text"
                placeholder="Subject"
                v-model="title"
              />
            </div>
            <div class="add-issue">
              <label class="label-add"> Description</label>
            </div>
            <div class="add-issue">
              <input
                class="description"
                type="text"
                placeholder="Add a description"
                v-model="description"
              />
            </div>
            <div class="add-issue">
              <label class="label-add"> Due Date</label>
            </div>
            <div class="add-issue">
              <DatePicker
                class="input-issue"
                v-model="dueDate"
                valueType="format"
              ></DatePicker>
            </div>
            <button class="btn-add-issue">Add Issue</button>
          </form>
        </div>
      </b-sidebar>
    </div>
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
            <h3>Open</h3>
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
    </div>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import draggable from "vuedraggable";

export default {
  name: "app",
  components: {
    draggable,
    DatePicker,
  },
  data() {
    return {
      title: "",
      description: "",
      dueDate: null,
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

    clickAddIssue() {
      this.$store.dispatch("addIssue", {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
      });
    },
  },
  created() {
    this.$store.dispatch("getCollection");
  },
};
</script>

<style>
.kanban-column {
  min-height: 300px;
}
.add-issue {
  margin: 5px 0px 5px 5px;
}
.description {
  width: 280px;
  height: 300px;
}
.input-issue {
  width: 280px;
}
.btn-add-issue {
  margin: 40px 0px 0px 5px;
  background: darkgrey;
  color: white;
  font-weight: bold;
  width: 200px;
  height: 50px;
}
</style>
