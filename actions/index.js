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
