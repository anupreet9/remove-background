const gm = require('gm').subClass({ imageMagick: true });

class ImageMagick {
    async cropBottom(inputBuffer, background = 'white') {
        return new Promise((resolve, reject) => {
            gm(inputBuffer)
                .gravity('South')
                .trim()
                .extent(300, 300)
                .background(background)
                .toBuffer((err, croppedBuffer) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(croppedBuffer);
                    }
                })
        });
    }
}

module.exports = new ImageMagick();