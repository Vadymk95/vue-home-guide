<template>
  <section class="tender">
    <h2 class="tender__title">Construction Tenders</h2>
    <div class="tender__content">
      <ul class="tender__items">
        <li class="tender__item">
          <font-awesome-icon class="tender__icon" icon="briefcase" />
          <h5 class="tender__item-num">{{ tenders }}</h5>
          <p class="tender__item-title">All Tenders</p>
        </li>
        <li class="tender__item">
          <font-awesome-icon class="tender__icon" icon="list" />
          <h5 class="tender__item-num">{{ currentTenders }}</h5>
          <p class="tender__item-title">Current</p>
        </li>
        <li class="tender__item">
          <font-awesome-icon class="tender__icon" icon="check" />
          <h5 class="tender__item-num">{{ completedTenders }}</h5>
          <p class="tender__item-title">Completed</p>
        </li>
      </ul>
      <div class="tender__images">
        <img class="tender__image" src="@/assets/images/tender3.jpg" alt="tender3" />
        <img class="tender__image" src="@/assets/images/tender1.jpg" alt="tender1" />
        <img class="tender__image" src="@/assets/images/tender2.jpg" alt="tender2" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      tenders: 1753,
      currentTenders: 26,
      completedTenders: 0,
    };
  },
  methods: {
    getSumOfCompletedTenders(t: number, c: number) {
      return (this.completedTenders = t - c);
    },
  },
  mounted() {
    this.getSumOfCompletedTenders(this.tenders, this.currentTenders);
  },
};
</script>

<style scoped>
.tender {
  padding: 20px 20px 0;
  background-color: rgba(255, 255, 255, 0.7);
}

.tender__content {
  display: flex;
}

.tender__title {
  font-size: 30px;
  margin-bottom: 60px;
  color: teal;
  text-transform: uppercase;
  text-align: center;
}

.tender__items {
  list-style: none;
  font-size: 40px;
  width: 30%;
}

.tender__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  margin-bottom: 30px;
}

.tender__images {
  width: 70%;
  position: relative;
}

.tender__image {
  width: 450px;
  position: absolute;
}

.tender__image:nth-child(2) {
  left: 200px;
  top: -40px;
  z-index: 2;
}

.tender__image:last-child {
  left:50px;
  top: 100px;
  z-index: 3;
}

.tender__icon {
  color: darkolivegreen;
}

.tender__item-num {
  color: darkslategray;
}

.tender__item-title {
  color: rgb(36, 128, 0);
  font-size: 20px;
  font-weight: 700;
}
</style>
