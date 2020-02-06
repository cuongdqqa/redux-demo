const { createStore } = require('redux');

// const defaultState = [];

const defaultState = [
    { id: 1, title: 'Todo title demo 1', content: 'Todo content demo 1' },
    { id: 0, title: 'Todo title demo 0', content: 'Todo content demo 0' },

]; 


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                {
                    id: (state.length === 0) ? 0 : state[0].id + 1,
                    title: action.title,
                    content: action.content
                },
                ... state
            ]
        case 'LIST_TODO':
            return state;
        case 'DETAIL_TODO':
            return state.find((todo) => todo.id === action.id);
        case 'UPDATE_TODO':
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        title: action.newTitle,
                        content: action.newContent,
                    }
                } else {
                    return todo;
                }
            });
        case 'DELETE_TODO':
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);
// console.log(store.getState())

/**
 * Thêm một todo vào state
 */
// store.dispatch({ type: 'ADD_TODO', title: 'Todo title demo', content: 'Todo content demo' });
// console.log(store.getState())

/**
 * Xóa một todo khỏi state
 */
// store.dispatch({ type: 'DELETE_TODO', id: 1 });
// console.log(store.getState())

/**
 * Cập nhật một todo trong state
 */
// store.dispatch({ type: 'UPDATE_TODO', id: 1, newTitle: 'New title', newContent: 'newContent' });
// console.log(store.getState())

/**
 * Lấy danh sách todo
 */
store.dispatch({ type: 'LIST_TODO' });
console.log(store.getState())

/**
 * Lấy thông tin chi tiết một todo
 */
store.dispatch({ type: 'DETAIL_TODO', id: 0 });
console.log(store.getState())

