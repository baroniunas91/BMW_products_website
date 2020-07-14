{/* <div class="col-lg-4 col-md-4 col-sm-6 col-12 caps-images">
    <a data-fancybox="gallery6" href="assets/images/video/1.mp4">
    <video poster="./assets/images/video-image.jpg">
        <source src="assets/images/video/1.mp4" type="video/mp4">
        <source src="assets/images/video/1.ogg" type="video/ogg">
        Jūsų naršyklė nepalaiko vaizdo įrašų tag'ų.
    </video>
    <div class="overlay"><img class="play-button" src="assets/images/play.png" alt="play"></div>
    </a>
    <div class="video-description">Kaip nuimti ratlankių dangtelius su lipnia juosta?</div>
</div> */}

function renderVideo(selector, data) {
    const length = data.length;
    const select = document.querySelector(selector);

    let HTML = '';
    select.innerHTML = '';

    for (let i = 0; i < length; i++) {
        const videoData = data[i];
        HTML += `<div class="col-lg-4 col-md-4 col-sm-6 col-12 caps-images">
                    <a data-fancybox="gallery6" href="${videoData.pathMp4}">
                        <video poster="${videoData.picPath}">
                            <source src="${videoData.pathMp4}" type="video/mp4">
                            <source src="${videoData.pathOgg}" type="video/ogg">
                            Jūsų naršyklė nepalaiko vaizdo įrašų tag'ų.
                        </video>
                        <div class="overlay"><img class="play-button" src="assets/images/play.png" alt="play"></div>
                        </a>
                    <div class="video-description">${videoData.description}</div>
                </div>`
    }
    return select.innerHTML = HTML;
}
export default renderVideo;