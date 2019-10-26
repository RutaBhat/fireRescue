var enrollmentRecordsApp = new Vue({
  el: '#enrollmentRecordsApp',
  data: {
    enrollments: [],
    recordenrollment: {},
    members: [],
    certificates: []
  },
  methods: {
    fetchCertificates() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { enrollmentRecordsApp.certificates = json })
    }, // end methods
    fetchEnrollments() {
      fetch('api/recordEnroll/index.php')
      .then(response => response.json())
      .then(json => { enrollmentRecordsApp.enrollments = json })
    }, // end methods
    fetchMembers() {
      fetch('api/recordMembers/')
      .then(response => response.json())
      .then(json => { enrollmentRecordsApp.members = json })
    },
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
  this.fetchCertificates();
  this.fetchMembers();
}
});
