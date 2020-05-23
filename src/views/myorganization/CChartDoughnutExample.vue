<template>
  <CChartDoughnut
    :datasets="defaultDatasets"
    :labels="['Male', 'Female']"
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
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: [60, 40]
        }
      ]
    }
  }
}
</script>
