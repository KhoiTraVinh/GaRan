import * as Types from '../constants/ActionTypes'

export const HienThiSanPham = (sanphams) => {
    return{
        type : Types.LayDuLieu,
        sanphams
    }

}