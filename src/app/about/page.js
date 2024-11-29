

const  About = async () =>{
    const Data = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        //cache: "force-cache",
    })
        const data = await Data.json()
console.log(data)
return (
    <div>{
        data.map((item) => {
            return (
                <div>{item.title}</div>
            )
        })
    }</div>
)
}


export default About;