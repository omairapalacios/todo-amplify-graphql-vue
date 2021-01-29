<template>
  <div class="container mt-5">
    <h1>TASK - TODO</h1>
    <b-row class="justify-content-center my-5">
      <b-form inline>
        <b-input v-model="newItem" class="mx-2" placeholder="New item"> </b-input>
        <b-button class="bg-warning" @click.prevent="addListItem">Add</b-button>
      </b-form>
    </b-row>
    <b-row class="mt-4 justify-content-center">
      <b-col md="6" sm="12">
        <b-list-group>
          <b-list-group-item v-for="(item, index) in listItems" :key="index">
            <b-row class="flex-row">
              <b-col class="d-flex justify-coontent-around align-items-center">
                {{ item.itemName }}
                {{ item.id }}
              </b-col>
              <b-button size="sm" variant="danger" @click="deleteListItem(item.id)">
                Delete
              </b-button>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { Auth, API, graphqlOperation } from 'aws-amplify';

import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as subscriptions from '../graphql/subscriptions';

export default {
  name: 'Home',
  data() {
    return {
      listItems: [],
      newItem: '',
    };
  },
  async mounted() {
    const currentUser = await Auth.currentAuthenticatedUser();
    const that = this;
    API.graphql(
      graphqlOperation(subscriptions.onCreateListItem, {
        owner: currentUser.username,
      })
    ).subscribe({
      next: (action) => {
        that.listItems.push(action.value.data.onCreateListItem);
      },
    });
    API.graphql(
      graphqlOperation(subscriptions.onDeleteListItem, {
        owner: currentUser.username,
      })
    ).subscribe({
      next: (action) => {
        const { id } = action.value.data.onDeleteListItem;
        const index = that.listItems.map((x) => x.id).indexOf(id);
        that.listItems.splice(index, 1);
      },
    });
  },
  async created() {
    const { data } = await API.graphql(graphqlOperation(queries.listListItems));
    data.listListItems.items.forEach((item) => {
      this.listItems.push(item);
    });
  },
  methods: {
    async addListItem() {
      await API.graphql(
        graphqlOperation(mutations.createListItem, {
          input: { itemName: this.newItem },
        })
      );
      this.newItem = '';
    },
    async deleteListItem(id) {
      console.log(id);
      await API.graphql(
        graphqlOperation(mutations.deleteListItem, {
          input: { id },
        })
      );
    },
  },
};
</script>
