document.querySelector(".select-file").addEventListener('change',function(){
    const inputElement = document.querySelector(".select-file");
    const imageContainer = document.querySelector(".image-container");
    const imagePreviewerElement = document.querySelector(".image-previewer");
    const imagePreviewerTextElement = document.querySelector(".image-previewer-text");

    if(inputElement.files && inputElement.files[0]){
        const reader = new FileReader();
        console.log(reader);

        reader.onload = function(e){
            imagePreviewerElement.src= e.target.result;
            imageContainer.style.border = "none";
            imagePreviewerElement.style.display = "block";
            imagePreviewerTextElement.style.display = "none";
        }
        reader.readAsDataURL(inputElement.files[0]);
    }
    else{
        imagePreviewerElement.style.display = "none";
        imagePreviewerTextElement.style.display = "block";
    }
})