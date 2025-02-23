# E-Commerce Store

![E-Commerce Store Screenshot](/src/icons/e-commerce.png)

## Description
This is a modern e-commerce store built with React that allows users to browse products, view product details, add items to a cart, and complete a checkout process. The project utilizes the [Noroff Online Shop API](https://v2.api.noroff.dev/online-shop) for fetching product data and managing interactions.

## Features
- **Homepage:** Displays a list of products with a search bar for filtering.
- **Product Page:** Shows detailed information about a selected product.
- **Cart Page:** Lists all selected products and calculates the total price.
- **Checkout Page:** Allows users to finalize their purchase.
- **Checkout Success Page:** Displays a confirmation message and clears the cart.
- **Contact Page:** Includes a form with validation for user inquiries.

## Technologies Used
- **React 18**
- **React Router Dom 6** (for navigation)
- **React Hook Form** (for form handling)
- **Styled Components** (for styling)
- **MUI (Material UI)** (for UI components)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NikosDig/e-commerce-store.git
   ```
2. Navigate into the project folder:
   ```bash
   cd e-commerce-store
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## API Usage
- Fetch all products: `GET https://v2.api.noroff.dev/online-shop`
- Fetch a single product: `GET https://v2.api.noroff.dev/online-shop/{productID}`

## Deployment
This project is deployed on **Netlify**. You can access the live version [here](https://enchanting-kelpie-355cf1.netlify.app/).

## Contact
For any questions or feedback, please submit an issue on the GitHub repository or use the contact form in the application.

## License
This project is open-source and available under the MIT License.

