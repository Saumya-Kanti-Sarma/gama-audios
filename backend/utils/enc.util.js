// Copied from: https://hackernoon.com/how-to-encrypt-and-decrypt-in-nodejs 

import crypto from "crypto";
import { configDotenv } from "dotenv";
configDotenv();

export default class Enc {
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
