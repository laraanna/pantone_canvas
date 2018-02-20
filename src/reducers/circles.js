const defaultState = () => ({
  circleRadius: 80,
  circles: [
    {
      color: '#EFF0EA',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#D2DDCF',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#FEECD4',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#ECC7B4',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#FCB3A4',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#E8DBFB',
      enabled: false,
      x: 400,
      y: 400
    },
    {
      color: '#000000',
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
