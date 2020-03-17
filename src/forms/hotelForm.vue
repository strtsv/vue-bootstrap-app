<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-btn slot="activator" color="primary" dark>New Hotel</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Hotel</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form v-model="valid">
              <v-text-field
                v-model="model.hotelName"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="model.hotelId"
                label="Booking HotelId"
                required
              ></v-text-field>
              <v-text-field
                v-model="model.baseUrl"
                label="Booking Base Url"
                required
              ></v-text-field>

              <v-text-field
                v-model="model.address"
                label="Address"
              ></v-text-field>
              <v-checkbox
                label="Reference"
                v-model="model.reference"
              ></v-checkbox>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false"
            >Close</v-btn
          >
          <v-btn color="blue darken-1" flat @click="onSave()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: "hotel-form",
  components: {},
  props: ["hotel"],
  data: () => ({
    dialog: false,
    loading: false,
    formOptions: {},
    isValid: true,
    valid: false,
    model: {
      baseUrl: null,
      hotelId: null,
      hotelName: null,
      reference: true
    }
  }),
  methods: {
    onSave() {
      this.$emit("save", this.model);
      this.dialog = false;
    }
  }
};
</script>
