var certificationEditApp = new Vue({
  el: '#certificationEditApp',
  data: {
    certificates: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/records/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.certificates),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {certificationRecordsApp.certificates = json})
      // .catch( err => {
      //   console.error('EDIT POST ERROR:');
      //   console.error(err);
      // })

      this.handleReset();
    },
    handleReset() {
      this.certificates = {
        certificationName: '',
        certificationAgency: '',
        expiryPeriod: ''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
