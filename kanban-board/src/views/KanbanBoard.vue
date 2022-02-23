<template>
  <div>
    <div class="btn-add">
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
                required
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
                required
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
                required
                class="input-issue"
                v-model="dueDate"
                valueType="format"
              ></DatePicker>
            </div>
            <button class="btn-add-issue">Add Issue</button>
            <button class="btn-logout" @click="logout">Logout</button>
          </form>
        </div>
      </b-sidebar>
      <div class="weather">
        <div class="weather-data">
          <h2>{{ weather.negara }}</h2>
          <img
            v-if="weather.weather"
            :src="`http://openweathermap.org/img/w/${weather.weather.icon}.png`"
          />
          <h4 v-if="weather.weather">{{ weather.weather.main }}</h4>
        </div>
        <div></div>
      </div>
    </div>
    <div class="container mt-5">
      <div class="row"></div>
      <div class="row mt-3">
        <div class="col-md-3">
          <div class="p-2 alert alert-secondary">
            <h3>Open</h3>
            <draggable
              class="list-group kanban-column"
              :list="arrBacklog"
              group="task"
              @change="handleIssueOpen"
            >
              <div
                class="list-group-item"
                v-for="element in arrBacklog"
                :key="element.id"
                @click.stop="seeDetailById(element.id)"
              >
                <Card :element="element"> </Card>
                <!-- <details close>
                  <summary>
                    <div class="wrapper-card">
                      {{ element.title }}
                      <iframe :src="element.icon" />
                    </div>
                  </summary>

                  <p>Description:</p>
                  <p>{{ element.description }}</p>
                  <p>{{ element.dueDate }}</p>
                </details> -->
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
              @change="handleIssueInProgres"
            >
              <div
                class="list-group-item"
                v-for="element in arrInProgress"
                :key="element.id"
                @click="seeDetailById(element.id)"
              >
                <Card :element="element"> </Card>
                <!-- <details close>
                  <summary>
                    <div class="wrapper-card">
                      {{ element.title }}
                      <iframe :src="element.icon" />
                    </div>
                  </summary>

                  <p>Description:</p>
                  <p>{{ element.description }}</p>
                  <p>{{ element.dueDate }}</p>
                </details> -->
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
              @change="handleIssueTested"
            >
              <div
                class="list-group-item"
                v-for="element in arrTested"
                :key="element.id"
                @click="seeDetailById(element.id)"
              >
                <Card :element="element"> </Card>
                <!-- <details close>
                  <summary>
                    <div class="wrapper-card">
                      {{ element.title }}
                      <iframe :src="element.icon" />
                    </div>
                  </summary>

                  <p>Description:</p>
                  <p>{{ element.description }}</p>
                  <p>{{ element.dueDate }}</p>
                </details> -->
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
              @change="handleIssueDone"
            >
              <div
                class="list-group-item"
                v-for="element in arrDone"
                :key="element.id"
                @click="seeDetailById(element.id)"
              >
                <Card :element="element"> </Card>
                <!-- <details close>
                  <summary>
                    <div class="wrapper-card">
                      {{ element.title }}
                      <iframe :src="element.icon" />
                    </div>
                  </summary>

                  <p>Description:</p>
                  <p>{{ element.description }}</p>
                  <p>{{ element.dueDate }}</p>
                </details> -->
                <img
                  class="img-delete"
                  @click="idIssue(element.id)"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiAd0d4Bc1TkUFUy558kC2YaQbXX30klLFg&usqp=CAU"
                  alt=""
                />
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
import Card from "../components/Card.vue";

export default {
  name: "app",
  components: {
    draggable,
    DatePicker,
    Card,
  },
  data() {
    return {
      title: "",
      description: "",
      dueDate: null,
      newTask: "",
      arrBacklog: [],
      arrInProgress: [],
      arrTested: [],
      arrDone: [],
    };
  },
  computed: {
    myIcon() {
      return this.$store.state.icon;
    },
    weather() {
      return this.$store.state.dataWeather;
    },
    addIssueData() {
      const data = this.$store.state.issue;
      const arrTemp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].status === "open") {
          arrTemp.push(data[i]);
        }
      }
      return arrTemp;
    },
    issueInProgress() {
      const data = this.$store.state.issue;
      const arrTemp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].status === "progres") {
          arrTemp.push(data[i]);
        }
      }
      return arrTemp;
    },
    issueDone() {
      const data = this.$store.state.issue;
      const arrTemp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].status === "done") {
          arrTemp.push(data[i]);
        }
      }
      return arrTemp;
    },
    issueTested() {
      const data = this.$store.state.issue;
      const arrTemp = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].status === "tested") {
          arrTemp.push(data[i]);
        }
      }
      return arrTemp;
    },
  },

  watch: {
    issueDone: function (newVal) {
      this.arrDone = newVal;
    },
    addIssueData: function (newVal) {
      this.arrBacklog = newVal;
    },
    issueInProgress: function (newVal) {
      this.arrInProgress = newVal;
    },
    issueTested: function (newVal) {
      this.arrTested = newVal;
    },
  },
  methods: {
    handleIssueDone(e) {
      if (e.added) {
        const data = e.added.element;
        const payload = {
          id: data.id,
          data: {
            status: "done",
          },
        };
        this.$store.dispatch("updateIssue", payload);
      }
    },
    handleIssueInProgres(e) {
      if (e.added) {
        const data = e.added.element;
        const payload = {
          id: data.id,
          data: {
            status: "progres",
          },
        };
        this.$store.dispatch("updateIssue", payload);
      }
    },
    handleIssueTested(e) {
      if (e.added) {
        const data = e.added.element;
        const payload = {
          id: data.id,
          data: {
            status: "tested",
          },
        };
        this.$store.dispatch("updateIssue", payload);
      }
    },
    handleIssueOpen(e) {
      if (e.added) {
        const data = e.added.element;
        const payload = {
          id: data.id,
          data: {
            status: "open",
          },
        };
        this.$store.dispatch("updateIssue", payload);
      }
    },

    clickAddIssue() {
      this.$store.dispatch("addIssue", {
        title: this.title,
        description: this.description,
        dueDate: this.dueDate,
      });
      this.title = "";
      this.description = "";
      this.dueDate = "";
    },
    idIssue(id) {
      this.$store.dispatch("deleteIssue", id);
    },
    seeDetailById(id) {
      this.$store.dispatch("getCollectionByid", id);
    },

    editStatus() {
      const data = this.arrInProgress;
      data.array.forEach((el) => {
        el.status = "progres";
      });
      this.arrInProgress = data;
    },
    logout() {
      localStorage.clear("access_token");
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this.$store.dispatch("weather");
    this.$store.dispatch("listenDataBase");
    this.$store.dispatch("getIcon");
  },
  beforeDestroy() {
    this.$store.dispatch("listenDataBase", true);
  },
};
</script>

<style>
.wrapper-card {
  display: flex;
  justify-content: space-between;
}
iframe {
  height: 20px;
  width: 20px;
  border: none;
}
.kanban-column {
  min-height: 300px;
}
.add-issue {
  margin: 5px 0px 5px 5px;
}
.description {
  width: 100%;
  height: 300px;
}
.input-issue {
  width: 100%;
}
.btn-add-issue {
  margin: 40px 0px 0px 0px;
  background: darkgrey;
  color: white;
  font-weight: bold;
  width: 100%;
  height: 30px;
}
.img-delete {
  width: 20px;
  float: right;
  cursor: pointer;
}
.list-group-item {
  cursor: pointer;
}
.weather {
  display: flex;
  justify-content: center;
}
.weather-data {
  padding: 30px;
  width: fit-content;
  border: solid 1px rgb(116, 108, 108);
}
.btn-logout {
  margin: 200px 0px 0px 0px;
  width: 100%;
  height: 30px;
  font-weight: bold;
  background: darkgray;
  color: white;
}
</style>
