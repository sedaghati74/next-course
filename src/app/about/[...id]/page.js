
const PostDetail = async (data) =>{

    const params = await data.params;
    const Data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await Data.json()
    console.log(params);
    return(
        <>
        <h1>Post Detail</h1>
        <h3>{postData.title}</h3>
        </>
    )
}

export default PostDetail;