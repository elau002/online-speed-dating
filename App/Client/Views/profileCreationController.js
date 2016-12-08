import temp from './profileCreationTemplate.vue';

var profileCreation = {
  template: temp.template,
<<<<<<< HEAD
  name: profileCreation,
=======
  name: 'profileCreation',
>>>>>>> new
  data: function() {
    return {
      username: this.$route.params.id,
      name: '',
      age: '',
      gender: '',
      location: '',
      profileImg: '',
      userinfo: '',
<<<<<<< HEAD
    }
  },
  methods: {
    setUserInfo: function() {
      var body = {
=======
    };
  },
  methods: {
    setUserInfo: function() {
      console.log('setting')
      var body = {
        username: this.username,
>>>>>>> new
        name: this.name,
        age: this.age,
        location: this.location,
        profileImg: this.profileImg,
        gender: this.gender,
        userinfo: this.userinfo
      };
<<<<<<< HEAD
      this.$http.post('/api/user', body)
      .then((response) => {
          console.log(response)

=======
      this.$http.put('/api/user', body)
      .then((response) => {
        this.$router.push('/profile/' + this.username);
<<<<<<< HEAD
>>>>>>> Added profile update feature.
>>>>>>> new
=======
>>>>>>> new
      })
      .catch((err) => {

      });
    },
    loadUserProfile: function() {
      console.log('before page loaded ', this.$route.params.id);
      this.$http.get('/api/user', {params: {username: this.$route.params.id }})
      .then((res) => {
        var user = res.body;
<<<<<<< HEAD
        console.log(user)
          if(user.name || user.age || user.location || user.gender || user.profileImg || user.userinfo){
            this.name = user.name;
            this.age = user.age;
            this.location = user.location;
            this.gender = user.gender;
            this.profileImg = user.profileImg;
            this.userinfo = user.userinfo
          } 
        })
=======
        console.log(user);
        if (user.name || user.age || user.location || user.gender || user.profileImg || user.userinfo) {
          this.name = user.name;
          this.age = user.age;
          this.location = user.location;
          this.gender = user.gender;
          this.profileImg = user.profileImg;
          this.userinfo = user.userinfo;
        } 
      })
>>>>>>> new
      .catch((err) => console.error(err));
    }
  },
  created: function() {
<<<<<<< HEAD
      this.loadUserProfile();
=======
    this.loadUserProfile();
>>>>>>> new
  }
};

export default profileCreation;