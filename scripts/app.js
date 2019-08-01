(function() {
    let slider = new Slider({
        el: document.querySelector('#slider'),
        slides: [
            { link: '#1', image: 'images/banner1.jpeg' },
            { link: '#2', image: 'images/banner2.jpeg' },
            { link: '#3', image: 'images/banner3.jpeg' },
            { link: '#4', image: 'images/banner4.jpeg' }
        ]
    })

    window.slider = slider;

})()
