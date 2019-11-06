import { Brand } from '../../../types/Brand'
import BRAND_STATE, { BrandAction } from '../action-type/brand'

const INITIAL_STATE = {
  brands: [] as Brand[]
}

export default function brand (state = INITIAL_STATE, action: BrandAction) {
  if (action.type === BRAND_STATE.UNKNOWN) {
    return { ...state }
  } else if (action.type === BRAND_STATE.UPDATED) {
    return { ...state, brands: action.brands }
  }
}
