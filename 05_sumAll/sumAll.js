const sumAll = function(a,b) {
    let count = 0;
    if(!Number.isInteger(a)||!Number.isFinite(b))
    {
        return "ERROR";
    }

    if (a<0 || b<0)
    {
        return "ERROR";
    }

    if (a<b)
    {

        for(let i=a; i<=b;i++)
        {
            count += i;
        }
    }

    else if(a>b)
    {
        for(let i=b; i<=a;i++)
        {
            count += i;
        }
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
