<template>
    <div> This page will show as much as possible details of Organization </div>
</template>
<script>
export default {
  name: "ViewOrgDetails",
  props: ["clickedNext", "currentStep"],

  mounted(){
      console.log("This page is invoked");
  }
}
</script>