const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let img = new Image();
let file = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('upload-file');

// TODO FILTER

// Upload File
uploadFile.addEventListener('change',(e) => {
    // Get File
    const file = document.getElementById('upload-file').files[0];

    //Init FileReader
    const reader = new FileReader();

    if(true){
        // Set file name
        fileName = file.name;
        // Read data as URL
        reader.readAsDataURL(file);
    }

    //Add Image to canvas
    reader.addEventListener('load', () =>{
        // Create img
        img = new Image();
        // Set src
        img.src = reader.result;
        // On image load , add to canvas

        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0,img.width,img.height);
            canvas.removeAttribute('data-caman-id');
        }
    },false);
});