import temp from './profileCreationTemplate.vue';
// import { mapState } from 'vuex';
var profileCreation = {
  template: temp.template,
  name: 'profileCreation',
  data: function() {
    return {
      username: this.$route.params.id,
      name: '',
      age: '',
      gender: '',
      location: '',
      profileImg: '',
      userinfo: '',
    };
  },
  methods: {
    setUserInfo: function() {
      console.log('setting');
      var body = {
        username: this.username,
        name: this.name || 'Anonymouse',
        age: this.age,
        location: this.location || 'Here, There',
        profileImg: this.profileImg || 'https://www.svgimages.com/svg-image/s4/question-mark-face-256x256.png',
        gender: this.gender || 'gender',
        userinfo: this.userinfo || 'User did not provide info',
        admin: false,
        loggedIn: true
      };
      this.$http.put('/api/user', body)
      .then((response) => {
        this.$store.commit('setUser', body);
        this.$router.push('/profile/' + this.username);
      })
      .catch((err) => {

      });
    },
    loadUserProfile: function() {
      this.$http.get('/api/user', {params: {username: this.$route.params.id }})
      .then((res) => {
        var user = res.body;
        if (user.name || user.age || user.location || user.gender || user.profileImg || user.userinfo) {
          this.name = user.name;
          this.age = user.age;
          this.location = user.location;
          this.gender = user.gender;
          this.profileImg = user.profileImg;
          this.userinfo = user.userinfo;
        } 
      })
      .catch((err) => console.error(err));
    }
  },
  created: function() {
    var status = this.$store.getters.getProfileInfo.username;
    if(status){
      this.loadUserProfile();
    } else {
      this.$router.push('/');
    }
  }
};

export default profileCreation;