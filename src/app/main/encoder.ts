import {HttpUrlEncodingCodec} from '@angular/common/http';

/**
 * CustomHttpUrlEncodingCodec
 * Fix plus sign (+) not encoding, so sent as blank space
 * See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
 */
export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
  override encodeKey(k: string): string {
    k = super.encodeKey(k);
    return k.replace(/\+/gi, '%2B');
  }
  override encodeValue(v: string): string {
    v = super.encodeValue(v);
    return v.replace(/\+/gi, '%2B');
  }

  override decodeKey(key: string): string {
    key = super.decodeKey(key);
    return key.replace(/\+/gi, '%2B');
  }
  override decodeValue(value: string): string {
    value = super.decodeValue(value);
    return value.replace(/\+/gi, '%2B');
  }
}
