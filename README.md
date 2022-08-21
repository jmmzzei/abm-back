## Start

First, you need to install the dependencies with `npm install`.

Then, rename the `.env.example` file to `.env` and complete it with the required data.

Finally, to start the server in development mode, create the database and populate it, you just need to execute:
`npm start`.

This command calls `npm prestart` automatically and the last one executes a series of npm scripts that sets a development environment.

## Tests

Similarly, you can run the tests with just one command that calls others npm scripts:
`npm test`.

## API

The app makes use of the [JSend](https://github.com/omniti-labs/jsend) specification with a small change: when the response includes **"status": "error"** the _message_ key is going to be substituted for the _data_ key, in order to make all the responses equal.

The three basic types of response are:

<table>
<tr><th>Type</td><th>Description</th><th>Required Keys</th></tr>
<tr><td>success</td><td> <b>All went well</b> and (usually) some data was returned.</td><td>status, data</td></tr>
<tr><td>fail</td><td> <b>Client problem:</b> There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied</td><td>status, data</td></tr>
<tr><td>error</td><td> <b>Server problem:</b> An error occurred in processing the request, i.e. an exception was thrown</td><td>status, data</td></tr>
</table>
