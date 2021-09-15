# Actions:

## Synchronous Actions:

- As soon as an action was dispatched, the state was immediately updated.
- If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1.
- Same with BUY_ICECREAM action as well.

## Async Actions:

- Asynchronous API calls to fetch data from an end point and use that data in your application.

## Our application:

### State:

- state = {
  loading: true,
  data: [],
  error: ''
  }

loading - Display a loading spinner in your component
data - List of users
error - Display error to the user

### Actions:

FETCH_USERS_REQUEST - Fetch list of users
FETCH_USERS_SUCCESS - Fetched successfully
FETCH_USERS_FAILURE - Error fetching the data

### Reducers:

- case: FETCH_USERS_REQUEST
  loading: true
- case: FETCH_USERS_SUCCESS
  loading: true
  users: data ( from API )
- case: FETCH_USERS_FAILURE
  loading: false
  error: error ( from API )

# Async-action creators:

## Axios:

- Requests to an API end point

## Redux-thunk:

- Define async action creators
- Middleware
