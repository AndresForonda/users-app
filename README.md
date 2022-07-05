# Users App - Vue 3 + TypeScript + Vite

This application request a list of users from a jsonplaceholder api (`https://jsonplaceholder.typicode.com/users`),
the response is store in Vuex using the users module and in the localStorage using 'users' as key.

The users are listed in a table built from scratch using flex-box, the table shows the user's name, username and email in each row.

The button in the last column (Edit button) allows to edit the user's name, username and email by showing a modal when it's clicked;
the modal shows a form with one input for each user property and at the bottom two buttons allow to cancel the edit process by
closing the modal or to save the user information shown in the form inputs and then close the modal.

Test have been implemented using vitest and librarytesting/vue, test coverage doesn't cover 100 % of the code (maybe I'll add more tests
in the future).

## Available scripts

Befor run these scripts, run `npm install` or `yarn i` in order to install the project dependencies.

- `yarn dev` or `npm run dev`, runs the application in dev mode, serving it in the url `http://localhost:3000`
by default
- `yarn test:unit` or `npm run test:unit`, runs the tests using vitest as testing framework
- `yarn coverage` or `npm run coverage`, runs the test coverage functionality from vitest, giving detailed information
about the tests in the application
- `yarn build` or `npm run build`, builds the application and save the result in the dist folder.

## Functionalities

- Requests information of some users from a jsonplaceholder api
- Shows a loading indicator while the request is in progress
- Stores the response in localStorage to persist the data
- Stores the response in the users store module
- Shows the users' name, username and email in a table
- Allows to filter data using the users' name, username and email
- Doesn't request data if there was a previous request

## Modal background (mask)

I got the background effect for the modal from this [example](https://vuejs.org/examples/#modal)