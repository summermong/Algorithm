function solution(myStr) {
    let a = myStr.split('a');
    let b = a.map((v => v.split('b'))).join(',');
    let bb = b.split(',').filter(v => v !== '');
    let c = bb.map((v => v.split('c'))).join(',');
    let cc = c.split(',');
    return cc.filter(v => v !== '').length === 0 ? ["EMPTY"] : cc.filter(v => v !== '')
}