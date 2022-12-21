import { getPercents } from "./getPercents";

describe ('test getPercents function', ()=> {
    it ('when input is 2 numbers, function should print number in console', ()=> {
        expect(getPercents(30, 200)).toBe(60)
    })
    it ('when input is 1 number, function should print NaN in console', ()=> {
        expect(getPercents(30)).toBe(NaN)
    })
    it ('when input is 1 string, function should print number in console', ()=> {
        expect(getPercents('thirty')).toBe(NaN)
    })
    it ('with no input function should print NaN in console', ()=> {
        expect(getPercents()).toBe(NaN)
    })
    it ('when input is 2 strings, function should print NaN in console', ()=> {
        expect(getPercents('thirty','two hundred')).toBe(NaN)
    })
    it ('number and a string should print NaN in console', ()=> {
        expect(getPercents('thirty',200)).toBe(NaN)
    })
    
})