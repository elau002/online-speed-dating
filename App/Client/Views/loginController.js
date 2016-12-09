
import template from './loginTemplate.vue';

const login = {
  template: template.template,
  data () {
    return {
      username: '',
      password: ''
    }; 
  },
  methods: {
    login: function() {
      this.$http.post('/auth/login', {
        username: this.username,
        password: this.password 
      })
      .then((res) => {
        var body = res.body;
        body.loggedIn = true;
        this.$store.commit('setUser', body);
        if(this.$route.params.id){
          this.$router.push('/');
        }
          this.$router.push('/profile/' + res.body.username)
        
      })
      .catch((err) => console.error(err)); ``
    },
  },
  name: 'login'
};

export default login;
