import dig from "@unction/dig";
import {juxt} from "ramda";
import mapValues from "@unction/mapvalues";
import {KeyChainType} from "./types";

export default function plucks<A> (keychains: Array<KeyChainType<A>>) {
  return mapValues(juxt(mapValues(dig)(keychains)));
}
