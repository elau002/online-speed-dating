import temp from './profileTemplate.vue';

var profile = {
  template: temp.template,
  data: function() {
    return {
      username: '',
      name: '',
      age: '',
      location: ''
    };
  },
  methods: {
    setUserInfo: function() {
      var body = {
        username: this.username,
        name: this.username,
        age: this.username,
        location: this.location
      };
      this.$http.post('/api/user', body)
      .then((response) => {

      })
      .catch((err) => {

      });
    },
    loadUserProfile: function() {
      console.log('before page loaded ');
      this.$http.get('/api/user', {params: {username: this.username}})
      .then((res) => {
        console.log(res);

      })
      .catch((err) => console.error(err));
      this.username = 'hello';
    }	
  },
  created: function() {
    this.loadUserProfile();
  }
};

export default profile;