import dig from "@unction/dig"
import {juxt} from "ramda"
import mapValues from "@unction/mapvalues"

import type {ArrayType} from "types"
import type {KeyChainType} from "types"
import type {UnaryFunctionType} from "types"

export default function plucks (keychains: ArrayType<KeyChainType>): UnaryFunctionType {
  return mapValues(juxt(mapValues(dig)(keychains)))
}
