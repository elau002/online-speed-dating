import temp from './profileLink.vue';
import {mapState} from 'vuex';

const profileLink = {
    name: 'profileLink',
    template: temp.template,
    data () {
      return {
        loggedIn: false,
        username: '',
        edit: ''
      }
    },
    watch: {
      '$route': 'checking'
    },
    methods: {
      checking: function() {
        var user = this.$store.getters.getProfileInfo;
        this.loggedIn = user.loggedIn;
        this.username = user.username;
        this.edit = '/edit/' + user.username
      },
      logout: function() {
        var body = {
          username: '',
          userinfo: '',
          name: '',
          age: '',
          location: '',
          profileImg: '',
          gender: '',
          verified: false,
          loggedIn: false
        };
        this.$store.commit('setUser', body);
        this.$router.go('/');  
      }
    },
};

export default profileLink;