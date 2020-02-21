function runChange () {
    console.log(this);
    let units = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + units);
};


const inputs = document.querySelectorAll('.controls input');
inputs.forEach(input => {
    input.addEventListener('change', runChange);
    input.addEventListener('mousemove', runChange);
});

