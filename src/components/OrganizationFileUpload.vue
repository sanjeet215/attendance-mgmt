<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>
        File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>

import FileUploadService from "../service/FileUploadService"

export default {
  name: "OrganizationFileUpload",
  data() {
    return {
      file: ""
    };
  },
  methods: {
    handleFileUpload() {
      console.log("File Upload is invoked");
      this.file = this.$refs.file.files[0];
    },
    
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.file);

      FileUploadService.uploadOrganizationFile(formData);
    }
  }
};
</script>

<style>
</style>