const { createStore } = require('redux');

const defaultState = { value: 0};

/**
 * Tạo reducer để thực hiện thay đổi state khi nhận các mô tả từ action dispatch
 * action dispatch phải có type để reducer nhận biết chính xác action để thay đổi state
 */
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UP':
            return { value: state.value + 1 }
        case 'DOWN':
            return { value: state.value - 1 }
        default:
            return state;
    }
}

/**
 * Tạo store để lưu trữ các state
 */
const store = createStore(reducer);

/**
 * Lấy giá trị của state từ store
 */
const initState = store.getState();
console.log(initState.value)

/**
 * Thay đổi giá trị của state trong store thì phải dispatch một action
 */
store.dispatch({ type: 'UP' });
const upState = store.getState();

console.log(upState.value)

store.dispatch({ type: 'DOWN' });
store.dispatch({ type: 'DOWN' });
const downState = store.getState();

console.log(downState.value)