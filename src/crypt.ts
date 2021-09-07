import JSEncrypt from 'jsencrypt';

function encrypt(text, publicKey) {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    const encrypted = encrypt.encrypt(text);
    return encrypted;
  }