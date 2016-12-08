import temp from './profileTemplate.vue';

var profile = {
  name: 'profile',
  template: temp.template,
  data: function() {
    return {
      username: this.$route.params.id,

      name: '',
      age: '',
      location: ''
    };
  },
  methods: {
    setUserInfo: function() {
      var body = {
        name: this.name,
        age: this.age,
        location: this.location
      };
      this.$http.post('/api/user', body)
      .then((response) => {

      })
      .catch((err) => {

      });
    },
    loadUserProfile: function() {
      console.log('before page loaded ', this.$route.params.id);
      this.$http.get('/api/user', {params: {username: this.$route.params.id }})
      .then((res) => {
          console.log(res);
        }
      })
      .catch((err) => console.error(err));
    }	
  },
  created: function() {
    console.log(this.$route.params.id);
    this.loadUserProfile();
  }
};

export default profile;