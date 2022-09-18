export default (state, action) => {
    switch (action.type) {
        case 'remove':
            return state.filter((value)=> value.id !== action.payload);
        case 'addData':
            return state = action.payload;
        default:
            return state;
    }
}