export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export function increment() { //카운터 값을 올려준다.
    return {
        type: INCREMENT
    };
}
export function decrement() { //카운터 값을 낮춘다.
    return {
        type: DECREMENT
    };
}
export function setDiff(value) { //버튼이 눌릴 떄 더하거나 뺄 값을 설정한다.
    return {
        type: SET_DIFF,
        diff: value
    };
}
