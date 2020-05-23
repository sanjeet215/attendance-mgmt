<template>
  <CChartDoughnut
    :datasets="defaultDatasets"
    :labels="['Male', 'Female', 'Others']"
  />
</template>

<script>
import { CChartDoughnut } from '@coreui/vue-chartjs'

export default {
  name: 'CChartDoughnutExample',
  components: { CChartDoughnut },
  computed: {
    defaultDatasets () {
      return [
        {
          backgroundColor: [
            '#90E0EF',
            '#0077B6',
            '#00B4D4'
          ],
          data: [60, 38, 2]
        }
      ]
    }
  }
}
</script>
