import JSEncrypt from "jsencrypt";

export default function encrypt(text: any, publicKey: any) {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encrypted = encrypt.encrypt(text);
  return encrypted;
}
