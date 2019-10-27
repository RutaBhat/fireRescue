var certificationRecordsApp = new Vue({
  el: '#certificationRecordsApp',
  data: {
    certificates: [],
    recordcertificate: {}
  },
  methods: {
    fetchCertificates() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { certificationRecordsApp.certificates = json })
    }, // end methods
  handleSubmit(event) {
    fetch('api/records/post.php', {
      method: 'POST',
      body: JSON.stringify(this.recordcertificate),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {certificationRecordsApp.certificates.push( json[0] )})
    .catch( err => {
      console.error('RECORD POST ERROR:');
      console.error(err);
    });
    this.handleReset();
  },
  handleReset() {
    this.recordcertificate = {
      certificationName: '',
      certificationAgency: '',
      expiryPeriod: ''
    }
  },
  handleRowClick(certificates) {
    certificationEditApp.certificates = certificates;
  },
  deleteRecord(p) {
    fetch('api/records/delete.php', {
      method: 'POST',
      body: JSON.stringify(p),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {certificationRecordsApp.certificates = json})

  }
},// end methods
created() {
  this.handleReset();
  this.fetchCertificates();
}
});
