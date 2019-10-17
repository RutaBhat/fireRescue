var certificationRecordsApp = new Vue({
  el: '#certificationRecordsApp',
  data: {
    certificates: [],
    recordcertificates: {},
  },
  methods: {
    fetchPatients() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { certificationRecordsApp.certificates = json })
    }
  }, // end methods
  created() {
    this.fetchPatients();
  }
});
