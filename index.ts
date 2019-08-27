import dig from "@unction/dig";
import {juxt} from "ramda";
import mapValues from "@unction/mapvalues";
export default function plucks (keychains) {
  return mapValues(juxt(mapValues(dig)(keychains)));
}
