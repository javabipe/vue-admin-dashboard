<template>
  <div class="manage">
    <Header />
    <div class="container">
      <Notification
        :text="text"
        v-if="!!text"
      />

      <h1 :class="{'light': isDarkMode, 'dark': !isDarkMode}">Manage Users</h1>
      <p
        :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
      >Enter either customer email or subscription ID</p>

      <form
        @submit.prevent="getUserData"
        class="form manage-container"
      >
        <input
          :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
          :disabled="subscriptionId.length > 0"
          class="field"
          placeholder="Customer Email"
          style="margin: 0"
          type="email"
          v-model="email"
        />
        <p
          :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
          style="margin: 0 20px"
        >or</p>
        <input
          :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
          :disabled="email.length > 0"
          class="field"
          placeholder="Subscription ID"
          style="margin: 0"
          type="text"
          v-model="subscriptionId"
        />
        <button
          :disabled="!email && !subscriptionId"
          class="manage-button button"
          type="submit"
        >Get Customer Details</button>
      </form>

      <hr class="line-break" />

      <h1 :class="{'dark' : !isDarkMode, 'light' : isDarkMode}">Customer Details</h1>
      <div class="details-container">
        <div class="detail">
          <div
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            class="detail-title"
          >Subscription State</div>
          <div
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            class="detail-text"
          >{{subscriptionState}}</div>
        </div>
        <div class="detail">
          <div
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            class="detail-title"
          >Seated</div>
          <div
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            class="detail-text"
          >{{seated}}</div>
        </div>
        <div class="detail">
          <div
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            class="detail-title"
          >On Trial</div>
          <div
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            class="detail-text"
          >{{onTrial}}</div>
        </div>
        <div class="detail">
          <div
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            class="detail-title"
          >Trial End Date</div>
          <div
            :class="{'light-text': isDarkMode, 'dark-text': !isDarkMode}"
            class="detail-text"
          >{{trialEndDate}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Notification from "@/components/Notification.vue";

export default {
  name: "manage",
  components: {
    Header,
    Notification
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  data() {
    return {
      email: "",
      subscriptionId: "",
      subscriptionState: "",
      seated: "",
      onTrial: "",
      trialEndDate: "",
      text: ""
    };
  },
  methods: {
    getUserData() {
      // let url = new URL("http://localhost:9000/getUserData");
      // prettier-ignore
      let url = new URL("https://magenta-belekoy-e7a035.netlify.app/.netlify/functions/getUserData");

      const data = {
        email: this.email, // test@designcode.io
        subscriptionId: this.subscriptionId
      };

      url.search = new URLSearchParams(data);

      this.subscriptionState = "Loading...";
      this.seated = "Loading...";
      this.onTrial = "Loading...";
      this.trialEndDate = "Loading...";
      this.text = "";

      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(res.status);
          }

          return res.json();
        })
        .then(data => {
          // eslint-disable-next-line
          console.log(data);

          if (data.text) {
            this.text = data.text;
          }

          this.subscriptionState = data.subscriptionStatus;
          this.seated = data.seated;
          this.onTrial = data.onTrial;
          this.trialEndDate = data.trialEndDate;
        })
        .catch(err => {
          // eslint-disable-next-line
          console.log(err);

          this.subscriptionState = "";
          this.seated = "";
          this.onTrial = "";
          this.trialEndDate = "";
        });
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 0 15%; // 0 5%;
}

h1 {
  margin-top: 40px;
}

p {
  line-height: 25px;
  font-size: 16px;
  font-weight: 400;
}

.manage-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;

  @media all and (max-width: 767px) {
    flex-direction: column;
  }
}

.manage-button {
  margin: 0 0 0 25px;

  @media all and (max-width: 767px) {
    margin: 25px;
  }
}

.line-break {
  opacity: 0.2;
  height: 1px;
  width: 100%;
  margin: 40px 0;
}

.details-container {
  margin: 0 -40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.detail {
  width: 400px;
  max-width: 35%;
  margin: 20px 40px;
}

.detail-title {
  opacity: 0.3;
  margin-bottom: 16px;
}

.detail-text {
  margin-top: -12px;
  line-height: 31px;
  font-size: 20px;
}
</style>
