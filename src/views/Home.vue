<template>
  <div class="home">
    <Header/>
    <div class="container">
      <div class="spread">
        <h1 :class="{'light': isDarkMode, 'dark': !isDarkMode}">Traffic Overview</h1>
        <div
          :class="{'light-box': isDarkMode, 'dark-box': !isDarkMode}"
          class="toggle"
        >
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

      <iframe
        allowfullscreen
        frameborder="0"
        height="450"
        src="https://datastudio.google.com/embed/reporting/1XHL2eg5DKPOIg4TrZ1-KM9hZABFHhSna/page/o3Zt"
        style="border:0"
        v-if="isDarkMode"
        width="600"
      ></iframe>

      <iframe
        allowfullscreen
        frameborder="0"
        height="450"
        src="https://datastudio.google.com/embed/reporting/140R6630W3J702E95TsczaUnjfNjXstdW/page/o3Zt"
        style="border:0"
        v-if="!isDarkMode"
        width="600"
      ></iframe>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
// @ is an alias to /src
import Header from "@/components/Header.vue";

import { db } from "@/firebase"; // is an alias too, like import { db } from "../firebase";, not firebase lib @firebase

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
          // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998] // x-axis
          type: "datetime"
        },
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
        colors: ["#14f1d9", "#7b42f6"],
        legend: {
          labels: {
            colors: [this.isDarkMode ? "white" : "black"]
          },
          position: "top"
        },
        tooltip: {
          theme: "dark"
        }
      },
      series: []
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
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
    }
  },
  firestore() {
    return {
      traffic: {
        // collection reference.
        ref: db.collection("traffic"),
        // Bind the collection as an object if you would like to.
        objects: true,
        resolve: data => {
          console.log(data);
          // collection is resolved
          const activeUsers = data.users.active;
          const newUsers = data.users.new;

          this.series = [
            {
              name: "Active users",
              data: [
                [new Date("January 1, 2019"), activeUsers],
                [new Date("January 5, 2019"), 40]
              ] // y-axis
            },
            {
              name: "New users",
              data: [
                [new Date("January 1, 2019"), newUsers],
                [new Date("January 5, 2019"), 20]
              ] // y-axis
            }
          ];
        },
        reject: err => {
          // collection is rejected
          console.log(err);
        }
      }
    };
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

h1.light {
  @include heading-3($white);
}

h1.dark {
  @include heading-3($black);
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
