import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userToken: "",
    id: "",
    walletInfo: {},
    isLoggedIn: false
};

const features = createSlice({
    name: "crestdashboard",
    initialState,
    reducers: {
        userData: (state, {payload}) => {
            state.user = payload;
            console.log("User Data:", payload);
        },
        userId: (state, {payload}) => {
            state.isLoggedIn = true
            state.id = payload;
            console.log("User id:", payload);
        },
        walletInfo: (state, { payload }) => {
            state.walletInfo = payload
            console.log("Wallet Info:", state.walletInfo);
        },

        loginToken: (state, {payload}) => {
            state.userToken = payload;
            console.log("User Token:", payload);
        },
        logout: (state) => {
            state.user = {};
            state.userToken = "";
            state.isLoggedIn = false
        },
       
    },
});

export const {userData, userId, walletInfo, logout, loginToken} =
    features.actions;

export default features.reducer;
