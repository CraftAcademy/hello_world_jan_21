import store from "./state/store/configureStore";

const onChangeHandler = (event) => {
  store.dispatch({
    type: "CHANGE_MESSAGE",
    payload: { newGreeting: event.target.value },
  });
};

export { onChangeHandler };
