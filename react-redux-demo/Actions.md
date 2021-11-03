# Actions:

## Synchronous actions:
- As sooon as an action was dispatched, the state was immediately updated. If you dispatch teh BUUY_CAKE action, the nnumOfCakes was right away decremented by 1.
- Same withh BUY_ICECREAM action as well.

## Asynchronous actions:
- Asynchronous API calls to fetch data from an end point and use that data in your application.

### Our application:
- Fetches a list of users from an API end point and stores it in the redux store.
- State ?
- Actions ?
- Reducer ?

## State:
state =  {
    loading: true,
    data: [],
    error: ''
}
- loading: Display a loading spinner in your container. 
- data: List of users.
- error: Display error to the user.

## Actions:
- FETCH_USERS_REQUEST: FEtch list of users.
- FETCH_USERS_SUCCESS: Fetched successfully.
- FETCH_USERS_FAILURE: Error fetching the data.

## Reducers:
- case: FETCH_USERS_REQUEST
        loading: true
- case: FETCH_USERS_SUCCESS
        loading: false
        users: data ( from API )
- case: FETCH_USERS_FAILURE
        loading: false
        error: error ( from API )
