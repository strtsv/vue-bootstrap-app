<template>
  <div class="receipt">
    <div class="receipt__header">
      <img src="../assets/logo.png">
      <h1>Famous</h1>
    </div>

    <div class="receipt__info" v-if="info">
      <table>
        <tr>
          <td><b>Receipt #</b></td>
          <td>{{ info.id }}</td>
        </tr>
        <tr>
          <td><b>Waiter</b></td>
          <td>{{ info.waiter }}</td>
        </tr>
        <tr>
          <td><b>Opened at</b></td>
          <td>{{ info.openedAt }}</td>
        </tr>
        <tr>
          <td><b>Printed at</b></td>
          <td>{{ info.printedAt }}</td>
        </tr>
        <tr>
          <td><b>Table #</b></td>
          <td>{{ info.table }}</td>
        </tr>
        <tr>
          <td><b>Guests count</b></td>
          <td>{{ info.guests }}</td>
        </tr>
      </table>
    </div>

    <div class="receipt__products" v-if="products">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Q-ty</th>
            <th>Price</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(product, index) in products">
            <td>{{ product.name }}</td>
            <td>{{ product.qty }}</td>
            <td>{{ product.price }}</td>
            <td>{{ (parseInt(product.qty) * parseFloat(product.price)).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="receipt__total receipt__total_service" v-if="info && parseInt(info.serviceCharge) > 0">
      <div class="receipt__total-col">
        Service charge
      </div>
      <div class="receipt__total-col receipt__total-col_line">
        <div class="receipt__total-line"></div>
      </div>
      <div class="receipt__total-col">
        <div class="receipt__total-sum receipt__total-sum_service">
          {{ (total * (parseInt(info.serviceCharge)) / 100).toFixed(2) }} ლ
        </div>
      </div>
    </div>

    <div class="receipt__total" v-if="products">
      <div class="receipt__total-col">
        Total
      </div>
      <div class="receipt__total-col receipt__total-col_line">
        <div class="receipt__total-line"></div>
      </div>
      <div class="receipt__total-col">
        <div class="receipt__total-sum">
          {{ total }} ლ
        </div>
      </div>
    </div>

    <div class="receipt__footer">
      <img src="../assets/footer.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    info: Object,
    products: Array,
  },
  computed: {
    total() {
      if (!this.products || this.products.length === 0) return '0.00'

      let total = 0.00

      for (let product of this.products) {
        total += (parseInt(product.qty) * parseFloat(product.price))
      }

      if (this.info && parseInt(this.info.serviceCharge) > 0) {
        total += (total * (parseInt(this.info.serviceCharge)) / 100)
      }

      return total.toFixed(2)
    },
  },
}
</script>

<style scoped>
.receipt {
  background-color: #fff;
  width: 380px;
}

.receipt__header {
  text-align: center;
}

.receipt__header img {
  margin: 15px 0;
}

.receipt__header h1 {
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 0;
}

.receipt__info {
  padding: 10px;
  font-size: 14px;
  border-bottom: 2px dashed #000;
  margin-bottom: 10px;
}
.receipt__info b {
  margin-right: 15px;
}
.receipt__info tr {
  border-spacing: 0px;
}

.receipt__products {
  padding: 5px 20px;
  font-size: 14px;
  border-bottom: 2px solid #f3f3f3;
  margin-bottom: 5px;
}

.receipt__products table {
  width: 100%;
}

.receipt__products thead {
  border-bottom: 2px solid #f3f3f3;
}

.receipt__products th, .receipt__products td {
  padding: 0 10px;
  text-align: right;
}

.receipt__products th:first-child, .receipt__products td:first-child {
  text-align: left;
}

.receipt__total {
  display: flex;
  padding: 10px 5px;
  justify-content: space-around;
  align-items: center;
}

.receipt__total-col {
  padding: 0 10px;
}

.receipt__total-col_line {
  flex: 1 0;
}

.receipt__total-line {
  border-bottom: 2px dashed #000;
}

.receipt__total-sum {
  font-size: 18px;
  font-weight: 600;
  text-align: right;
}

.receipt__total_service {
  padding-bottom: 0;
}

.receipt__total-sum_service {
  font-size: 16px;
}

.receipt__footer img {
  width: 100%;
}
</style>
