import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  name: string;
  props?: any;
  data?: any;
}

const initialState: ModalState = {
  isOpen: false,
  name: "",
  props: {},
  data: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{
        name: ModalState["name"];
        props?: ModalState["props"];
        data?: ModalState["data"];
      }>,
    ) => {
      state.isOpen = true;
      state.name = action.payload.name;
      state.props = action.payload.props;
      state.data = action.payload.data;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
