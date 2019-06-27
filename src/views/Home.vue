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
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Header
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
