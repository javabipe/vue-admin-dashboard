<template>
  <div class="home">
    <Header/>
    <div class="container">
      <div class="spread">
        <h1>Traffic Overview</h1>
        <div class="toggle">
          <div
            @click="toggleDays"
            class="days"
            ref="days"
          >Days</div>
          <div
            @click="toggleWeeks"
            class="weeks"
            ref="weeks"
          >Weeks</div>
          <div
            @click="toggleMonths"
            class="months"
            ref="months"
          >Months</div>
        </div>
      </div>

      <apexchart
        :options="options"
        :series="series"
        type="area"
        width="500"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
    apexchart: VueApexCharts
  },
  data() {
    return {
      options: {
        chart: {
          id: "users"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998] // x-axis
        }
      },
      series: [
        {
          name: "Vue Chart",
          data: [30, 40, 45, 50, 49, 60, 70, 81] // y-axis
        }
      ],
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      colors: ["#14f1d9", "#7b42f6"]
    };
  },
  methods: {
    toggleDays() {
      this.$refs.days.style.color = "white";
      this.$refs.days.style.background = "#56CCF2";
      this.$refs.days.style.borderRadius = "4px";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleWeeks() {
      this.$refs.weeks.style.color = "white";
      this.$refs.weeks.style.background = "#56CCF2";
      this.$refs.weeks.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.months.style.color = "#5b6175";
      this.$refs.months.style.background = "none";
      this.$refs.months.style.borderRadius = "none";
    },
    toggleMonths() {
      this.$refs.months.style.color = "white";
      this.$refs.months.style.background = "#56CCF2";
      this.$refs.months.style.borderRadius = "4px";

      this.$refs.days.style.color = "#5b6175";
      this.$refs.days.style.background = "none";
      this.$refs.days.style.borderRadius = "none";

      this.$refs.weeks.style.color = "#5b6175";
      this.$refs.weeks.style.background = "none";
      this.$refs.weeks.style.borderRadius = "none";
    },
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });
      // In the same way, update the series option
      this.series = [
        {
          data: newData
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 5%; // 0 15%
}

.spread {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
}

h1 {
  @include heading-3;
}

.toggle {
  @include medium-text;
  color: $dark-gray;
  width: 240px;
  height: 50px;
  border-radius: 6px;
  padding: 5px;
  display: flex;
  flex-wrap: nowrap;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    cursor: pointer;
  }
}

@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
  font-weight: 600;
}

.days {
  @include toggle-settings;
  // стили мы задаём программно в js, а сдесь дэфолтные стили, тоесть по дэфолту отображаются days
  background: $teal;
  border-radius: 4px;
  color: $white;
}

.weeks {
  @include toggle-settings;
}

.months {
  @include toggle-settings;
}

.chart1 {
  margin-top: 30px;
  margin-bottom: 60px;
}

.apexcharts-legend {
  @media all and (max-width: 767px) {
    display: none;
  }
}

.gchart-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 120px;

  @media all and (max-width: 767px) {
    display: none;
  }
}
</style>
