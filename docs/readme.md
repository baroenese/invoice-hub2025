# Middle to Senior Front-End Engineer Recruitment

We're building InvoiceHub, a sleek invoice management platform, and we'd like you to create two core pages that demonstrate your frontend development expertise.

## Challenge Overview: Create two main pages that mirror our Figma design

1. Challenge Overview: Create two main pages that mirror our Figma design
    - Add Invoice Page: A clean form interface with the following fields: 
        - Invoice name (with validation)
        - Invoice number (auto-generated with "INV" prefix)
        - Due date (with date picker)
        - Amount (with currency formatting)
        - Status dropdown (Paid/Unpaid/Pending)
    - Success notification toast after submission
2. My Invoices Page:Table view of invoices with columns: 
    - Invoice name & number
    - Due date
    - Status (with colored badges - green for Paid, red for Unpaid, yellow for Pending)
    - Amount (formatted in Rupiah)
    - Actions menu
    - Search functionality (updates URL query params)
    - Status filter dropdown (updates URL query params)
    - Delete an invoice
    - Optional: Edit/Update an Invoice 

## Technical Requirements:

- Next.js 14 App Router
- React Hook Form with Zod validation
- MUI components for UI elements
- TypeScript with strict mode enabled
- All the invoices data should not lose on the page refreshes
- Proper loading and error states
- Responsive design matching provided UI

## Project Structure

```
src/
  app/
    invoices/
      add/
        page.tsx
      list/
        page.tsx 
  components/
    invoices/
  constants/
  lib/
    schemas/
    types/
  hooks/ 
  utils/
```


