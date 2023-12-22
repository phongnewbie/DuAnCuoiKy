// import { createSlice } from '@reduxjs/toolkit'
// import { data } from 'autoprefixer';

// const initialState = {
//     danhSachSanPham:[]
// }

// const productReducer = createSlice({
//   name: second,
//   initialState,
//   reducers: {
//     layThongTinSanPham:(state,{type,payload})=>{
//         state.danhSachSanPham = payload
//     }
//   }
// });

// export const {layThongTinSanPham} = productReducer.actions

// export const callApiDanhSachSanPham = async (dispatch) => {
//     const getApiSanPham = await axios.get(`https://657eac8e3e3f5b189463f4b4.mockapi.io/api/products/products`);
  
//     if (getApiSanPham.status === 200) {
//       const dataSanPham = getApiSanPham.data;
  
//       // Xử lý thông tin sản phẩm
//       if (dataSanPham.length > 0) {
//         // Hiển thị danh sách sản phẩm
//         console.log(dataSanPham);
//       } else {

//         // Thông báo không tìm thấy sản phẩm
//       }
//     } else {
//       // Xử lý lỗi
//       alert("san pham hien khong co")
//     }
//   };

// export default productReducer.reducer