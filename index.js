const vigenere = require('vigenere');

module.exports = function(realm, domain ){
  domain = domain.toLowerCase()//.replace(/[^A-Za-z]/g,'')
  const result = vigenere.encode(domain, realm); // var decodedMessage = vigenere.decode('vmd kysys pdtbdr', realm);
  return result;

}
