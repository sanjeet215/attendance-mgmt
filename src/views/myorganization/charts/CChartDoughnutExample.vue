<template>
  <CChartDoughnut :datasets="defaultDatasets" :labels="['Male', 'Female', 'Others']" />
</template>

<script>
import { CChartDoughnut } from "@coreui/vue-chartjs";
import AnalyticsService from "../../../service/AnalyticsService";

export default {
  name: "CChartDoughnutExample",
  components: { CChartDoughnut },

  data() {
    return {
      testdata: []
    };
  },

  computed: {
    defaultDatasets() {
      let datatoRender = [];
      let subdata = {
        backgroundColor: ["#90E0EF", "#0077B6", "#00B4D4"],
        data: []
      };
      console.log("working ---> " + this.testdata);

      this.testdata.forEach(item => {
        subdata.data.push(item);
      });

      datatoRender.push(subdata);
      return datatoRender;
    }
  },
  methods: {
    getdata() {
      AnalyticsService.getgenderarray()
        .then(response => {
          let serverData = response.data;
          this.testdata = serverData.data;
        })
        .catch(function error() {
          console.log("Control came to error");
          console.log(error);
        });
    }
  },
  mounted() {
    console.log("Male Female graph component executed");
    this.getdata();
  }
};
</script>
