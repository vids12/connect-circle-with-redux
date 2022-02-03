import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFollowersModal: false,
  showFollowingModal: false,
  showProfileModal: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    TOGGLE_FOLLOWER_MODAL: (state) => {
      state.showFollowersModal = !state.showFollowersModal;
    },
    TOGGLE_FOLLOWING_MODAL: (state) => {
      state.showFollowingModal = !state.showFollowingModal;
    },
    TOGGLE_CHANGE_PHOTO_MODAL: (state) => {
      state.showProfileModal = !state.showProfileModal;
    },
  },
});

export const {
  TOGGLE_FOLLOWER_MODAL,
  TOGGLE_FOLLOWING_MODAL,
  TOGGLE_CHANGE_PHOTO_MODAL,
} = profileSlice.actions;

export default profileSlice.reducer;
