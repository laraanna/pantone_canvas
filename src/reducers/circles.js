const defaultState = () => ({
  circleRadius: 70,
  circles: [
    {
      color: '#DA4167',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#F4D35E',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#F78764',
      enabled: false,
      x: 400,
      y: 400
    }
  ]
});

export default (state = defaultState(), action) => {
    switch (action.type) {
      case 'TOGGLE_CIRCLE': {
        let circles = [...state.circles];
        circles[action.circleIndex].enabled = !circles[action.circleIndex].enabled;
        return Object.assign({}, state, {
          circles
        })
      }
      case 'MOVE_CIRCLE':{
        let circles = [...state.circles];
        circles[action.circleIndex].x = action.x;
        circles[action.circleIndex].y = action.y;
        return Object.assign({}, state, {
          circles
        })
      }
        default:
            return state;
    }
}
