const time = async (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};

const fetchUserDetails = async (userID) => {
    console.log("Fetching User Details");
    await time(500)
    return `https:image.example.com/${userID}`;
};

const downloadImage = async (imageURL, callback) => {
    console.log("Downloading Image");
    await time(500);
    return `Image data for ${imageURL}`;
};

const render = async (image) => {
    await time(300);
    console.log("Render Image");
};

const run = async () => {
    const imageURL = await fetchUserDetails("John");
    const imageData = await downloadImage(imageURL);
    await render(imageData);
}

run();

// fetchUserDetails('John', (imageURL) =>{
//     downloadImage(imageURL, (imageData) => {
//         render(imageData);
//     })
// })

// const aPromise = new Promise((resolve, reject) => {
//     resolve('imageurl')
//     reject("Failed to Connect")
// })
// fetchUserDetails("JOhn")
// .then((imageURL) => downloadImage(imageURL))
// .then((imageData) => render(imageData))
// .catch((error) => {
//     console.log(error);
// })