// Copied from: https://hackernoon.com/how-to-encrypt-and-decrypt-in-nodejs 

import crypto from "crypto";
import { configDotenv } from "dotenv";
configDotenv();

export default class enc {
  #SECRECT_KEY = process.env.SECRECT_KEY;
  encrypt(text) {
    try {
      const iv = crypto.randomBytes(16);
      const key = crypto.createHash('sha256').update(this.#SECRECT_KEY).digest();
      const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

      let encrypted = cipher.update(text);
      encrypted = Buffer.concat([encrypted, cipher.final()])
      return iv.toString('hex') + ':' + encrypted.toString('hex');

    } catch (error) {
      console.log(error);
    }
  }
  decrypt(encryptedText) {
    try {
      const textParts = encryptedText.split(':');
      const iv = Buffer.from(textParts.shift(), 'hex');

      const encryptedData = Buffer.from(textParts.join(':'), 'hex');
      const key = crypto.createHash('sha256').update(this.#SECRECT_KEY).digest();
      const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

      const decrypted = decipher.update(encryptedData);
      const decryptedText = Buffer.concat([decrypted, decipher.final()]);
      return decryptedText.toString();

    } catch (error) {
      console.log(error)
    }
  }
}
const encryption = new enc();
console.log(encryption.encrypt("hello"));

console.log(encryption.decrypt("2b9c807a5c3b77091e4dc059398e0866:888b80dbb74af7a0a1cd6a8abcb6a289"));