function renderCaps(selector, data) {
    const length = data.length;
    const select = document.querySelector(selector);

    let HTML = '';
    select.innerHTML = '';

    for (let i = 0; i < length; i++) {
        const caps = data[i];
        HTML += `<div class="col-lg-2 col-md-3 col-sm-6 col-12 caps-images">
                    <a data-fancybox="${caps.gallery}" href="${caps.path}">
                        <img class="images" src="${caps.path}" alt="Bmw-badges">
                        <div class="overlay"><img class="play-button" src="assets/images/eye.png" alt="eye"></div>
                    </a>
                    <div class="product-code">${caps.code}</div>
                 </div>`
    }
    return select.innerHTML = HTML;
}
export default renderCaps;