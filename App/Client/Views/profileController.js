import temp from './profileTemplate.vue';

var profile = {
  name: 'profile',
  template: temp.template,
  props: {'username': {type: String}},
  data: function() {
    return {
      name: '',
      age: '',
      location: ''
    };
  },
  methods: {
    setUserInfo: function() {
      var body = {
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
      console.log('before page loaded ', this.props);
      this.$http.get('/api/user', {params: {username: '2'}})
      .then((res) => {
        if(!res.body.name){
          console.log('hello')
        }
      })
      .catch((err) => console.error(err));
    }	
  },
  mounted: function() {
    this.loadUserProfile();
  }
};

export default profile;