const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export { RECEIVE_USERS, receiveUsers };
