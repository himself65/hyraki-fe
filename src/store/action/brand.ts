import BRAND_STATE from '../action-type/brand'
import { Brand } from '../../../types/Brand'

export const updateBrandAction = (brands: Brand[]) => ({ type: BRAND_STATE.UPDATED, brands })
