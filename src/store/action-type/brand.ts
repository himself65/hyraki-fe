import { Action } from 'redux'
import { Brand } from '../../../types/Brand'

enum BRAND_STATE {
  UNKNOWN,
  UPDATED
}

export interface BrandAction extends Action<BRAND_STATE> {
  brands: Brand[]
}

export default BRAND_STATE
