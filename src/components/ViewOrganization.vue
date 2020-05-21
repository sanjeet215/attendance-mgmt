<template>
  <!-- <b-table striped hover :items="items" :fields="fields"></b-table> -->
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <table class="table table-bordered table-hover dt-responsive table-style">
          <!-- <caption class="text-center">An example of a responsive table based on <a href="https://datatables.net/extensions/responsive/" target="_blank">DataTables</a>:</caption> -->
          <thead>
            <tr>
              <th class="th-style">Organization Id</th>
              <th class="th-style">Name</th>
              <th class="th-style">Description</th>
              <th class="th-style">Image Url</th>
              <th class="th-style">status</th>
              <!-- <th class="th-style">View Details</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="org in organizations" :key="org.orgId">
              <td class="td-style"><a class="text-primary pointer" v-on:click="testClick(org.orgId)">{{org.orgRefName}}</a></td>
              <td class="td-style">{{org.orgName}}</td>
              <td class="td-style">{{org.description}}</td>
              <td class="td-style">{{org.imaeUrl}}</td>
              <td class="td-style">{{org.status ? "Active" : "Disabled" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import TutorialDataService from '../service/TutorialDataService';

export default {
  name: "ViewOrganization",
  props: ["clickedNext", "currentStep"],

  data() {
    return {
      organizations: []
    };
  },

  methods: {

    testClick(key){
      console.log('hiperlink works-->'+key);
    },
    getallOrganization() {
       TutorialDataService.getAll().then(response => {
         let serverData = response.data;
         this.organizations = serverData.data;
         console.log(this.organizations);
       }).catch(function error(){
         console.log(error);
       });
    }
  },
  mounted() {},

  created() {
    this.getallOrganization();
  }
};
</script>