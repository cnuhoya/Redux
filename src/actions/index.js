export const OKAY = 'OKAY';
export const SET_DIFF = 'SET_DIFF';

export function okay() { //확인 버튼.
    return {
        type: OKAY
    };
}

export function setDiff(value) { //입력 겂을 설정한다.
    return {
        type: SET_DIFF,
        diff: value
    };
}
