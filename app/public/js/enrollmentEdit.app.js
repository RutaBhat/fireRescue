var enrollmentEditApp = new Vue({
  el: '#enrollmentEditApp',
  data: {
    enrollments: {}
  },
  methods: {
    handleSubmit() {
      fetch('api/recordEnroll/edit.php', {
        method: 'POST',
        body: JSON.stringify(this.enrollments),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {enrollmentRecordsApp.enrollments = json})
      // .catch( err => {
      //   console.error('EDIT POST ERROR:');
      //   console.error(err);
      // })

      this.handleReset();
    },
    handleReset() {
      this.enrollments = {
        memberID: '',
        certificationID: '',
        certificationIsActive: '',
        certificationStartDate: '',
        certificationEndDate: ''
      }
    }
  },
  created() {
    this.handleReset();
  }
});
