const getLoggedOn = state => state.auth.isLoggedOn;

const getUser = state => state.auth.user;

const getUserName = state => state.auth.name;

const getUserToken = state => state.auth.user.token;

const getLoading = state => state.auth.isLoading;

// eslint-disable-next-line
export default { getLoggedOn, getUserToken, getUser, getUserName, getLoading };
