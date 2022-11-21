const imageThumbnail = require('image-thumbnail');

imageThumbnail('images/dog.jpg')
    .then(thumbnail => { console.log(thumbnail) })
    .catch(err => console.error(err));