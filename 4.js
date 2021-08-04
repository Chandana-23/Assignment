function foo1()
{
    return {
        bar: "hello"
    };
}
function foo2()
{
    return
    {
        bar: "hello"
    };
}

console.log(foo1());
console.log(foo2());

// foo1() -> {bar: 'hello'}  foo2() -> undefined

/*If the opening curly brace is not on the same line, then the javascript compiler will add a semi-colon. This means the function finishes on that line and the rest is not read. If you add the brace at the end of the line then it will not insert the semi-Colon and the function is fine*/