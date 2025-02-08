# URL Shortener

A simple URL shortener application.

## Features

- Shorten long URLs into concise, easy-to-share links.
- Redirect users from shortened URLs to the original long URLs.

## Technologies Used

- **JavaScript**: Core application logic.
- **Docker**: Containerization for consistent development and deployment environments.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/semihtahirakbas/url-shortener.git
   cd url-shortener
   ```
2. **Build the Docker Image**:
   ```bash
     docker build -t url-shortener .
   ```
3. **Run the Docker Container**:
   ```bash
     docker run -p 8080:8080 url-shortener
   ```
- The application will be accessible at http://localhost:8080.

### License
**Note**: This `README.md` is based on the limited information available from the repository. For a more detailed and accurate `README.md`, please provide additional details about the project's functionality, setup instructions, and usage examples. 
