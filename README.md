# diagnostic-uploader-frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About The Project

This React app is designed to provide the frontend for the diagnostic-uploader Express API. It allows users to upload diagnostic files (see https://main.dpmfpm43ycguw.amplifyapp.com/) and the support team to view the uploaded files (see https://main.dpmfpm43ycguw.amplifyapp.com/admin). 

The frontend only allows to pick .tgz files for upload, which addresses the issue of wasted rejected uploads of wrong file types. As discussed in https://github.com/christianrybe/diagnostic-uploader/blob/main/README.md the backend does verify the extension, but only once the entire file has been sent to the server. Allowing user to only pick .tgz files for upload largely solves the issue in this particular scenario, although I am aware that it does not quite meet the specified requirements.

### Pages

As mentioned there are two pages available. There is no navbar since my assumption was that the pages would be used completely separately by different user groups: 
- support members, who will rarely upload files
- users uploading files, who should not have access to all uploads

### Deployment

The app is deployed automatically on push to the GH repo using AWS Amplify.

There is only one prod environment.

### Observability

Basic monitoring is provided out of the box inside AWS Amplify console. It provides metrics, logs and alerts, although no alerts have been set up as of now.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

However there are currently no tests implemented.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Known limitations
- There is no pagination or lazy loading as of now. For a few files available it's fine, but one of the solutions should probably be implemented (but it depends on the business domain specifics as well - there could be periodic purging of the S3 bucket, which would keep the number of files small)
- There are literally no tests, which usually is a no go for me, but... time constraints...
- No auth.
- Little attention has been paid to error handling (again: due to time constraints).
- Code could be structured better. This project has really been hacked together quickly