// Promise Chain

function dataBase(id)
{
    return new Promise ( (resolve , reject ) => 
        {
                setTimeout( () => 
            {
                    console.log("Data is : " + id);
                    resolve("Success");
            }, 2000)
        })
}


console.log("Getting Data 1 ......!");
dataBase(1)
.then(() => 
{
    console.log("Getting Data 2 ......!");
    return dataBase(2);
})
.then(() => 
{
    console.log("Getting Data 3 ......!");
    return dataBase(3);
})
.then(() => 
{
    console.log("Getting Data 4 ......!");
    return dataBase(4);
})
.then(( res ) => 
{
    console.log(res);
})
