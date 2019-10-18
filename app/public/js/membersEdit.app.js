var memberEditApp = new Vue({
  el: '#memberEditApp',
  data: {
    members: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/recordMembers/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.members),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {memberRecordsApp.members = json})
      // .catch( err => {
      //   console.error('EDIT POST ERROR:');
      //   console.error(err);
      // })

      this.handleReset();
    },
    handleReset() {
      this.members = {
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        radioNumber: '',
        stationNumber: '',
        email: '',
        position: '',
        phoneNumber: '',
        address: '',
        startDate: '',
        isActive: ''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
