import { createSlice } from '@reduxjs/toolkit';

export const DataSlice = createSlice({
  name: 'dataSlice',
  initialState: {
    latitude: '',
    longitude: '',
    address: '',
    authId: '',
    senderFirstName:'',
    senderLastName:'',
    senderEmail:'',
    senderPhone:'',
    senderProfilePhoto:''
  },
  reducers: {
    updateLatitude: (state, actions) => {
      state.latitude = actions.payload;
    },
    updateLongitude: (state, actions) => {
      state.longitude = actions.payload;
    },
    updateAddress: (state, actions) => {
      state.address = actions.payload;
    },
    updateAuthId: (state, actions) => {
      state.authId = actions.payload;
    },
    updateSenderFirstName: (state, actions) => {
      state.senderFirstName = actions.payload;
    },
    updateSenderEmail: (state, actions) => {
      state.senderEmail = actions.payload;
    },
    updateSenderPhone: (state, actions) => {
      state.senderPhone = actions.payload;
    },
    updateSenderLastName: (state, actions) => {
      state.senderLastName = actions.payload;
    },
    updateSenderProfilePhoto: (state, actions) => {
      state.senderProfilePhoto = actions.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  updateLongitude,
  updateLatitude,
  updateAddress,
  updateAuthId,
  updateSenderEmail,
  updateSenderFirstName,
  updateSenderLastName,
  updateSenderProfilePhoto,
  updateSenderPhone
} = DataSlice.actions

export default DataSlice.reducer