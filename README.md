#Changes Made
I used redux to maintain the logged in state of the user.

When the user logs in and is authenticated. The token is saved in the 
Redux store instead of local storage. This is done using the useDispatch
hook

When the user retrieves the information of the current logged in user
the auth token is retrieved from the Redux store using the useSelector
hook

I created the actions and reducers in seperate folders. Each folder has 
an index.js to bring together all possible changes and modifications
and provide a single import source for all other files