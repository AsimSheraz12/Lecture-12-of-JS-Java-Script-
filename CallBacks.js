// If we pass function as argument in another function called callback functions

const hello = () => 
{
    //console.log("Hello Asim Sheraz");
}

setTimeout(hello, 3000);  // We pass hello fuctions as argument that's why this is Callback functions

// Callback Hell


console.log("\n\n\t\t\t\t Callback Hell")


function dataBase(id, GetData)
{
    setTimeout( () => 
        {
            console.log("Data is : " + id);
            if(GetData)
            {
                GetData();
            }
        }, 2000)
}


//callback hell

dataBase(1, () => 
{
    console.log("Getting data 2 .......!");
    dataBase(2, () => 
    {
        console.log("Getting data 3 .......!");
        dataBase(3, () => 
        {
            console.log("Getting data 4 .......!");
            dataBase(4);
        })
    })
})

