<template>
  <div id="app">
    <div style="width: 500px; margin: 20px auto;">
      <vue-tel-input
        @input="onInput"
        :preferredCountries="['us', 'gb', 'ua']"
        :enabledCountryCode="enabledCountryCode"
        :disabledFetchingCountry="disabledFetchingCountry"></vue-tel-input>
    </div>
    <div v-if="phone.number" style="color: #000">
      <span>
        Country Code:
        <strong>{{ phone.countryCode }}</strong>,&nbsp;
      </span>
      <span>
        Dial Code:
        <strong>{{ phone.dialCode }}</strong>,&nbsp;
      </span>
      <span>
        Number:
        <strong>{{ phone.number }}</strong>,&nbsp;
      </span>
      <span>
        Is valid:
        <strong>{{ phone.isValid }}</strong>,&nbsp;
      </span>
      <span>
        Country:
        <strong>{{ phone.country }}</strong>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      phone: {
        number: '',
        isValid: false,
        country: undefined,
        countryCode: '',
        dialCode: '',
      },
      enabledCountryCode: true,
      disabledFetchingCountry: true,
    };
  },
  methods: {
    onInput(formattedNumber, { number, isValid, country, countryCode, dialCode }) {
      console.info("dialCode", dialCode); /* TODO: for deleting */
      console.info("this.phone", this.phone); /* TODO: for deleting */
      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country && country.name;
      this.phone.countryCode = countryCode;
      this.phone.dialCode = dialCode;
    },
  },
};
</script>
