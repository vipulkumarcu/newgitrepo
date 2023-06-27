const blogs = [
    { title: 'Part One', body: 'This is Part One'},
    { title: 'Part Two', body: 'This is Part Two'}
];

function getBlog ()
{
    setTimeout (() =>
    {
        let output = [];
        blogs.forEach ((blog, index) =>
        {
            output[index] = blog.title;
        });
        console.log (output);
    }, 1000);
}

function createBlog (blog)
{    return new Promise ((resolve, reject) =>
    {
        setTimeout (() => {
            blogs.push (blog);
            const error = false;

            if (!error)
            {
                resolve ();
            }

            else
            {
                reject ("Error");
            }
        }, 1000);
    });
}

function updateLastUserActivityTime ()
{
    return new Promise ((resolve, reject) =>
    {
        setTimeout (() =>
        {
            const activity = new Date ();
            resolve()
            {
                console.log ("Last Activity time of the user" + activity);
            }
        }, 1000);
    });
}

function deleteBlog (blog)
{
    return new Promise ((resolve, reject) =>
    {
        setTimeout( () =>
        {
            if(blogs.length > 0)
            {
                const poppedElement  = blogs.pop();
                resolve(poppedElement);
            }
            else
            {
                reject("ERROR")
            }
        }, 2000)
    })
}

createBlog ({ title: 'Part Three', body: 'This is Part Three'}).then (() => {
    updateLastUserActivityTime().then (() => {
        getBlog();
    })
});

deleteBlog().then(() => {
    getBlog();
});
