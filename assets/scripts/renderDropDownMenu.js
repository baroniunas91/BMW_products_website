function renderDropDownMenu(selector, data) {
    const length = data.length;
    const select = document.querySelector(selector);

    let HTML = '';
    select.innerHTML = '';

    for (let i = 0; i < length; i++) {
        const dropDown = data[i];
        HTML += `<a class="dropdown-item font-weight-bold" href="${dropDown.href}">${dropDown.title}</a>`
    }
    return select.innerHTML = HTML;
}
export default renderDropDownMenu;