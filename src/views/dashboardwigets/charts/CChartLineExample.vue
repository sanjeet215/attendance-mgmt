<template>
  <CChartLine :datasets="defaultDatasets" labels="months" />
</template>

<script>
import { CChartLine } from "@coreui/vue-chartjs";

export default {
  name: "CChartLineExample",
  components: { CChartLine },
  computed: {
    defaultDatasets() {
      return [
        {
          label: "Hiring",
          backgroundColor: "#00B4D4",
          data: [30, 39, 10, 50, 30, 70, 35, 75, 32, 34, 45, 39]
        },
        {
          label: "Attrition",
          backgroundColor: "#90E0EF",
          data: [39, 80, 40, 35, 40, 20, 45, 56, 78, 24, 32, 35]
        }
      ];
    }
  }
};
</script>
