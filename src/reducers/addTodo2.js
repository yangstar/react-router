

let initialState = {}
const todoApp = (state= initialState, action) =>{
  // 这里暂不处理任何 action，
  // 仅返回传入的 state。
  switch (action.type) {
        
        case 'ACTION2':
            return {
                text: action.text
            };  
        default:
            return state;
  }
  
}
export default todoApp;