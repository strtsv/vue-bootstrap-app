<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>Hotels</h1>
        <hotel-form @save="saveHotel"></hotel-form>

        <v-data-table :headers="headers" :items="hotels" class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.hotelName }}</td>
            <td>{{ props.item.hotelId }}</td>
            <td>{{ props.item.reference }}</td>
            <td>{{ props.item.baseUrl }}</td>
            <td>{{ props.item.address }}</td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="error" icon="warning">
              Sorry, nothing to display here :(
            </v-alert>
          </template>
        </v-data-table>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import HotelForm from "../forms/hotelForm";

export default {
  name: "hotel",
  components: {
    HotelForm
  },
  data: function() {
    return {
      hotels: [],
      headers: [
        { text: "ID", value: "id" },
        { text: "Name", value: "hotelName" },
        { text: "Calories", value: "hotelId" },
        { text: "Reference", value: "reference" },
        { text: "BaseUrl", value: "baseUrl" },
        { text: "Address", value: "address" }
      ]
    };
  },
  created: function() {
    this.loadHotels();
  },
  methods: {
    loadHotels() {
      this.axios.get("/hotels").then(resp => {
        this.hotels = resp.data;
      });
    },
    saveHotel(hotel) {
      console.log(hotel);
      this.axios.post("/hotels", hotel).then(resp => {
        this.hotels.push(resp.data);
      });
    }
  }
};
</script>

<style scoped></style>
