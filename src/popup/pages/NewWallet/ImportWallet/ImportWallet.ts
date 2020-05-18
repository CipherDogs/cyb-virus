import { AppWallet } from '../../../../services/data';

export default {
  template: require('./ImportWallet.html'),
  methods: {
    async save() {
      AppWallet.setSeed(this.seedPhrase, this.password);
      this.$router.push({ name: 'cabinet-cyberd' });
    },
  },
  computed: {
    saveDisabled() {
      return !this.seedPhrase || !this.password || this.password.length < 8 || this.password !== this.confirmPassword;
    },
  },
  data() {
    return {
      seedPhrase: '',
      password: '',
      confirmPassword: '',
    };
  },
};
