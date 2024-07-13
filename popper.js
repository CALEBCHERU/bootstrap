document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button');
    const tooltip = document.getElementById('tooltip');

    const popperInstance = Popper.createPopper(button, tooltip, {
        placement: 'top',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
            {
                name: 'arrow',
                options: {
                    element: document.getElementById('arrow'),
                },
            },
        ],
    });

    function show() {
        tooltip.style.display = 'block';
        popperInstance.update();
    }

    function hide() {
        tooltip.style.display = 'none';
    }

    button.addEventListener('mouseenter', show);
    button.addEventListener('mouseleave', hide);
});
