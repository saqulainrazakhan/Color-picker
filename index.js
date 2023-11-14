// document.addEventListener('DOMContentLoaded', function () {} ); you can wrap the whole code inside of this also to work it

const colorGrid = document.getElementById('colorGrid');
const resetButton = document.getElementById('resetButton');
const colors =
    ['#ff5733', '#33ff57', '#5733ff', '#ff11ff', '#b188ff', '#33a1ff', '#a1ff33', '#ff33a1', '#a133ff'];
const createColorBoxes = () => {
    colors.forEach((color) => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.background = color;

        colorBox.addEventListener('click', () => {
            changeBackgroundColor(color);

        })
        colorGrid.appendChild(colorBox);

    })

}



const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
}


const resetToDefault = () => {
    resetButton.addEventListener('click', () => {
        document.body.style.backgroundColor = '';
    })
}


createColorBoxes();
resetToDefault()





