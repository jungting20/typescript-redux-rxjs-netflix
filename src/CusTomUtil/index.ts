import { merge, from } from 'rxjs';
import { mergeMap, bufferCount } from 'rxjs/operators';
import { AxiosPromise } from 'axios';

export const CurrenctyReqpai = (...args: Array<() => AxiosPromise>) => {
  let length = args.length;
  return from(args).pipe(
    mergeMap(apif => from(apif())),
    bufferCount(length)
  );
};
