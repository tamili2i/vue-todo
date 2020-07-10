<template>
  <b-row>
    <b-col>
      <b-form @submit.prevent="submitForm">
        <b-form-group id="title" label="Title" label-for="title">
          <input
            class="form-control"
            type="text"
            id="title"
            :value="title"
            @input="updateTitle"
          />
        </b-form-group>
        <b-form-group
          id="description"
          label="Description"
          label-for="description"
        >
          <textarea
            class="form-control"
            id="description"
            :value="description"
            @input="updateDescription"
          ></textarea>
        </b-form-group>
        <div v-if="id">
          <input
            type="checkbox"
            id="status"
            :checked="status"
            @input="updateStatus"
          />
          {{ status ? "Completed" : "Open" }}
        </div>
        <b-button type="submit" variant="primary" class="mr-2">{{
          id ? "Update" : "Submit"
        }}</b-button>
        <b-button type="reset" v-if="!id" variant="danger" @click="resetTodo"
          >Reset</b-button
        >
      </b-form>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
@Component
export default class CreateTodo extends Vue {
  @Getter title!: string;
  @Getter description!: string;
  @Getter id!: number;
  @Getter status!: any;
  @Action createOrUpdate!: Function;
  @Action resetTodo!: Function;
  @Action getTodo!: Function;

  updateTitle(e: any) {
    this.$store.commit("updateTitle", e.target.value);
  }
  updateDescription(e: any) {
    this.$store.commit("updateDescription", e.target.value);
  }
  updateStatus(e: any) {
    console.log(e.target.checked);
    this.$store.commit("updateStatus", e.target.checked);
  }

  submitForm() {
    this.createOrUpdate({
      todo: {
        title: this.title,
        description: this.description,
        id: this.id,
        status: this.status
      },
      callback: () => {
        this.resetTodo();
        this.$router.push("/");
      }
    });
  }

  beforeMount() {
    if (this.$route.params.id) {
      this.getTodo(this.$route.params.id);
    }
  }
}
</script>

<style lang="sass" scoped></style>
