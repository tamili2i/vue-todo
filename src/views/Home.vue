<template>
  <b-row>
    <b-col class="mt-4">
      <b-row>
        <b-col cols="8">
          <h1>Todo</h1>
        </b-col>
        <b-col class="text-right">
          <b-button variant="primary" @click="moveToCreate()" class="mb-3">Create</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6" v-for="todo in todos" :key="todo.id">
          <b-card
            :bg-variant="getBgVariant(todo.status)"
            :text-variant="getColorVariant(todo.status)"
            class="mb-2"
          >
            <b-card-title class="line-clamp-1">{{todo.title}}</b-card-title>
            <b-card-text class="line-clamp-3">{{todo.description}}</b-card-text>
            <input type="checkbox" :checked="todo.status" @input="(e) => updateStatus(e, todo)" />
            {{todo.status ? "Completed": "Open"}}
            <router-link :to="`/edit/${todo.id}`" class="ml-3">
              <i class="ion ion-md-create mr-1"></i>Edit
            </router-link>
          </b-card>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class Login extends Vue {
  @Getter todos!: Array<any>;
  @Action createOrUpdate!: Function;

  fields: Array<any> = [
    "completed",
    "title",
    "description",
    "status",
    "actions"
  ];
  updateStatus(e: any, todo: any) {
    todo.status = e.target.checked;
    this.createOrUpdate({
      todo
    });
  }
  moveToCreate() {
    this.$router.push("/create");
  }

  getBgVariant(status: any) {
    return status ? "primary" : "";
  }

  getColorVariant(status: any) {
    return status ? "white" : "";
  }
}
</script>

<style lang="scss" scoped>
@mixin line-clamp($row) {
  display: -webkit-box;
  -webkit-line-clamp: $row;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-1 {
  @include line-clamp(1);
}
.line-clamp-3 {
  @include line-clamp(3);
}
.bg-primary {
  a {
    color: #fff;
    text-decoration-color: #fff;
  }
}
</style>