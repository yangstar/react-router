// action类型
export const ACTION1 = 'ACTION1';
export const ACTION2 = 'ACTION2';
export const ACTION3 = 'ACTION3';

// action函数创建
export function addTodo1(text) {
    return {type: ACTION1, text}
}

export function addTodo2(text) {
    return {type: ACTION2, text}
}
export function addTodo3(text) {
    return {type: ACTION3, text}
}