var enrollmentRecordsApp = new Vue({
  el: '#enrollmentRecordsApp',
  data: {
    enrollments: [],
    recordenrollment: {}
  },
  methods: {
    fetchEnrollments() {
      fetch('api/recordEnroll/index.php')
      .then(response => response.json())
      .then(json => { enrollmentRecordsApp.enrollments = json })
    }, // end methods
  handleSubmit(event) {
    fetch('api/recordEnroll/post.php', {
      method: 'POST',
      body: JSON.stringify(this.recordenrollment),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {enrollmentRecordsApp.enrollments.push( json[0] )})
    .catch( err => {
      console.error('RECORD POST ERROR:');
      console.error(err);
    });
    this.handleReset();
  },
  handleReset() {
    this.recordenrollment = {
      memberID: '',
      certificationID: '',
      certificationIsActive: '',
      certificationStartDate: '',
      certificationEndDate: ''
    }
  },
  handleRowClick(enrollments) {
    enrollmentEditApp.enrollments = enrollments;
  },
  deleteRecord(p) {
    fetch('api/recordEnroll/delete.php', {
      method: 'POST',
      body: JSON.stringify(p),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {enrollmentRecordsApp.enrollments = json})

  }
},// end methods
created() {
  this.handleReset();
  this.fetchEnrollments();
}
});
