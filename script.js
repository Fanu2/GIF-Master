document.getElementById('generateGifButton').addEventListener('click', function() {
    const imageInput = document.getElementById('imageInput');
    const textInput = document.getElementById('textInput');
    const qualityInput = document.getElementById('quality');
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const outputGif = document.getElementById('outputGif');

    if (imageInput.files.length === 0) {
        alert('Please upload at least one image.');
        return;
    }

    const files = Array.from(imageInput.files);
    const gif = new GIF({
        workers: 2,
        quality: parseInt(qualityInput.value),
        width: 320,
        height: 240
    });

    let loadCount = 0; // To track loaded images

    files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.src = event.target.result;

            img.onload = function() {
                // Set canvas size based on the image size
                canvas.width = img.width;
                canvas.height = img.height;

                // Clear canvas and draw image
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);

                // Draw text
                ctx.fillStyle = 'white';
                ctx.font = '30px Arial';
                ctx.fillText(textInput.value, 10, 50);

                // Add frame to GIF
                gif.addFrame(ctx, { delay: 200 });

                loadCount++;
                console.log(`Loaded image ${loadCount}/${files.length}`);

                // Render GIF when the last frame is added
                if (loadCount === files.length) {
                    gif.on('finished', function(blob) {
                        const url = URL.createObjectURL(blob);
                        outputGif.src = url;
                        outputGif.style.display = 'block';
                        console.log("GIF generated:", url);
                    });

                    gif.render();
                }
            };

            img.onerror = function() {
                console.error("Image failed to load:", file.name);
            };
        };
        reader.readAsDataURL(file);
    });
});
