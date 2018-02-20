const defaultState = () => ({
    circleRadius: 40,
    circles: [
        {
            color: '#DA4167',
            enabled: true,
            x: 200,
            y: 200
        }, {
            color: '#F4D35E',
            enabled: false,
            x: 200,
            y: 200
        }, {
            color: '#F78764',
            enabled: false,
            x: 200,
            y: 200
        }
    ]
});

export default (state = defaultState(), action) => {
    switch (action.type) {
        default:
            return state;
    }
}
