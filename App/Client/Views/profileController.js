import temp from './profileTemplate.vue';
import { mapState } from 'vuex';

var profile = {
  name: 'profile',
  template: temp.template,
  data: function() {
    return {
      username: '',
      userinfo: '',
      name: '',
      age: '',
      location: '',
      profileImg: '',
      gender: '',
      verified: false
    };
  },
<<<<<<< HEAD
  computed: mapState(['username', 'name', 'age', 'location']),
=======
  created () {
    this.loadUserProfile();
  },
  watch: {
    '$route': 'loadUserProfile'
  },
>>>>>>> new
  methods: {
    setProfileInfo: function(res) {
      for (var key in res) {
        this[key] = res[key]; 
      }
    },
    loadUserProfile: function() {
      if (this.$route.params.id !== this.$store.state.username) {
        this.$http.get(
          '/api/user',
          { params: {username: this.$route.params.id}}
        )
        .then((res)=>{
          //redirecting to home page if username does not exist
            //believe there is a more fluid way to do so with vue-router
          if(res.body.username){
           this.setProfileInfo(res.body);
          } else {
          this.$router.push('/');
          }
        });
      } else {
        this.verified = true; 
       console.log(this.verified)
       console.log(this.$store.getters.getProfileInfo)
        this.setProfileInfo(this.$store.getters.getProfileInfo); 
      } 
    },
    update: function() {
      this.$router.push('/profileCreate/' + this.username);
    }	
  },
};

export default profile;