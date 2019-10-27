var memberRecordsApp = new Vue({
  el: '#memberRecordsApp',
  data: {
    patients: [],
    recordPatient: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { memberRecordsApp.members = json })
    },
    handleSubmit(event) {
      fetch('api/records/post.php',{
          method: 'POST'
          body: JSON.stringify(this.recordMember),
          headerL {
            "Content-Type": "application/json; charset=utf-8"
          }
      })

      // fetch(url, {
      //   method: 'post',
      //   data: this.recordPatient
      // })
      // .then( ... )
      this.members.push( this.recordMember );
      this.handleReset();
    },
    handleReset() {
      this.recordMember = {
        id:'',
        firstName: '',
        lastName: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zipCode:'',
        workPhone: '',
        mobilePhone: '',
        radioNumber: '',
        station:''
      }
    },
  }, // end methods
  created() {
    this.handleReset();
    this.fetchMembers();
  }
});
