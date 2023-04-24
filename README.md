# Bank Transactions React App

This is a React application that displays a list of bank transactions and allows the user to add new transactions and filter transactions by description.

## Installation

1. Clone the repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Start the local JSON DB server by running `json-server --watch db.json`.
4. Start the application by running `npm start`.
5. Open `http://localhost:3000` in your web browser to view the application.

## Endpoints

- `GET /transactions`: Returns an array of transactions with the following properties: `id`, `date`, `description`, `category`, and `amount`.
- `POST /transactions`: Adds a new transaction to the database. The request body must contain the following properties: `date`, `description`, `category`, and `amount`.

## Features

- View a table of bank transactions.
- Add a new transaction using a form and submit it to the backend API.
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term will be shown in the table.

## Technologies Used

- React
- Axios
- JSON DB server

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.