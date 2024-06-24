# XkcdComic

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Installation of Dependencies:

If you are using an IDE, it will automatically install the necessary dependencies to run the project using the 'ng serve' command.

If you are using a code editor or need to install the dependencies manually, please navigate to the root directory where your project is located and execute the command 'npm install'.

Please ensure that 'node' is installed on your system.

## Installation of Angular CLI:

This project runs under the Angular CLI framework, and it is necessary to have Angular installed on your computer to be able to run the 'ng serve' command without any issues. To do this, you can execute the following command in your terminal: 'npm install -g @angular/cli'.

## Development server

Run `ng serve` for a dev ser6ver. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

It's important that the project is run using the 'ng serve' command from the root directory where it's located. This is because when consuming the xkcd API over HTTPS from a local server, which uses HTTP protocol, it would lead to CORS issues when trying to consume the services.

The 'ng serve' command makes API calls to the xkcd API through a configured proxy file to mitigate CORS issues.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
