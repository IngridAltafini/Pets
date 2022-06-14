const bcrypt = require('bcrypt');

module.exports = {
  //geração do hash de senha
  async generateHash(password) {
    const hash = await bcrypt.hash(password, Number(process.env.ENCRYPT_BITS));
    return hash;
  },
};
