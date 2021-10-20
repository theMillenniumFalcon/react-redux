// first we define a string constant that defines the type of the action
const BUY_CAKE = 'BUY_CAKE',

// buyCake() is an action creator that returns an action
function BuyCake() {
  return { 
      type: BUY_CAKE,
      info: 'First redux action'
  }
}
