// Promises and its function resolve and reject

const getPromise = (id) => 
{
    return new Promise((resolve , reject ) =>
    {
        if(id === 2 || id === 3)
        {
            console.log("I am Promise");
            resolve ("Promise Fullfilled");
        }
        else
            {
                console.log("I am Promise");
                reject ("ID not Occured");
            }
    })
}

let promise = getPromise (2);

promise.then((res) =>
{
    console.log("ID is 2 & : " + res);
})

promise.catch((err) => 
{
    console.log("ID is 4 & : " + err);
})


let promise1 = getPromise (4);

promise1.then((res) =>
{
    console.log("ID is 2 & : " + res);
})

promise1.catch((err) => 
{
    console.log("ID is 4 & : " + err);
})