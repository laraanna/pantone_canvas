const defaultState = () => ({
  circleRadius: 80,
  circles: [
    {
      color: '#eff0ea',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#d2ddcf',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#feecd4',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#ecc7b4',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#fcb3a4',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#e8dbfb',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#000',
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
