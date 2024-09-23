# GIF Master: Custom GIF Creator

Welcome to **GIF Master**! This web-based tool allows you to create custom GIFs by uploading your own images, setting a background color, adding text overlays, and customizing the frame delay. You can generate a high-quality GIF that can be viewed and downloaded directly from the page.

## Features
- **Upload Images**: Select multiple images in PNG or JPG format to include in your GIF.
- **Text Overlay**: Add custom text to each image for personalized GIFs.
- **Background Color**: Choose a background color to complement your GIF.
- **Custom Frame Delay**: Set the frame delay to control the speed of the GIF.
- **Download GIF**: Once generated, the GIF can be viewed and downloaded with a single click.

## How to Use
1. **Choose Background Color**: Select a color for the background using the color picker.
2. **Enter Text**: Type the text you want to display on each frame of the GIF.
3. **Set Frame Delay**: Specify the delay (in milliseconds) between each frame.
4. **Upload Images**: Click the "Upload Images" button to select the images you want to include in the GIF.
5. **Create GIF**: After setting your options, click the "Create GIF" button to generate your custom GIF.
6. **Download GIF**: Once the GIF is generated, click the "Download GIF" button to save the file.

## Project Demo
You can try out the **GIF Master** app by visiting the [live demo on GitHub Pages](https://your-github-username.github.io/your-repo-name/).

## Technical Details
- **Canvas**: All images are drawn on the HTML5 `<canvas>` element, which allows for customizable graphics.
- **GIF.js**: The core of the GIF creation process is handled using the GIF.js library, which generates GIFs in the browser.
- **JavaScript**: Custom JavaScript code manages the canvas drawing, image uploading, text overlay, and GIF rendering.
  
### GIF Creation Workflow
1. **Canvas Drawing**: Images are drawn on an HTML5 canvas with the chosen background color.
2. **Text Overlay**: Text is positioned on the canvas at a customizable location.
3. **Frame Creation**: Each frame of the GIF is created from the canvas, and a delay is applied between frames.
4. **GIF Rendering**: The `GIF.js` library is used to render the final GIF file, which can then be downloaded.

## Requirements
- A modern web browser that supports HTML5 and JavaScript.
  
## How to Run Locally
To run this project locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-github-username/your-repo-name.git
