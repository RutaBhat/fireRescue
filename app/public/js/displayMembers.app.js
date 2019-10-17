var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    members: [],
    recordmember: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/recordMembers/')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
    }, // end methods
  handleSubmit(event) {
    fetch('api/recordMembers/post.php', {
      method: 'POST',
      body: JSON.stringify(this.recordmember),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then( response => response.json() )
    .then( json => {memberRecordsApp.members.push( json[0] )})
    .catch( err => {
      console.error('RECORD POST ERROR:');
      console.error(err);
    });
    this.handleReset();
  },
  handleReset() {
    this.recordmember = {
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
},// end methods
created() {
  this.handleReset();
  this.fetchMembers();
}
});
