var recordsReportApp = new Vue({
  el: '#recordsReportApp',
  data: {
    reports:'',
    reportRadio: [],
    enrollments: [],
    recordenrollment: {},
    members: [],
    certificates: [],
    filter: {
      certificationID:'',
      radioNumber:'',
      stationNumber:''
    }
  },
  methods: {
    fetchCertificates() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { recordsReportApp.certificates = json })
    }, // end methods
    fetchExpiredRecords() {
      fetch('api/recordReport/')
      .then(response => response.json())
      .then(json => { recordsReportApp.reports = json })
    }, // end methods
    fetchRadioStationRecords() {
      fetch('api/recordReport/reportRadio.php')
      .then(response => response.json())
      .then(json => { recordsReportApp.reportRadio = json })
    }, // end methods
    fetchMembers() {
      fetch('api/recordMembers/')
      .then(response => response.json())
      .then(json => { recordsReportApp.members = json })
    }

},// end methods
created() {
  this.fetchExpiredRecords();
  this.fetchCertificates();
  this.fetchMembers();
  this.fetchRadioStationRecords();
}
});
