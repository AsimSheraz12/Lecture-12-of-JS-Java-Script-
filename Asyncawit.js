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

let result;

(async () => 
    {
        for (let i = 1; i <= 5; i++)
        {
            console.log(`Getting Data ${i} is : `);
            result = await dataBase(i);
        }
        console.log(result);
    } ) () ;