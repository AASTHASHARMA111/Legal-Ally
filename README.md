#  Legal Ally

**AI-Powered Legal Assistance Platform**

Legal Ally is a web-based frontend prototype designed to democratize access to legal resources. It aims to help users get instant answers to legal questions, analyze contracts for hidden risks, and fill out complex legal forms with confidence.

##  Features

### 1.  Legal Search
* **Intent:** A dedicated interface for users to ask natural language legal questions (e.g., "What is the statute of limitations in Delhi?").
* **UI:** Clean, distraction-free search bar powered by Tailwind CSS.

### 2.  Contract Analysis
* **Risk Assessment:** A module allowing users to upload contract files (`.pdf`, `.doc`, `.txt`) or paste raw text.
* **Goal:** To analyze documents for compliance issues, liabilities, and deadlines.
* **Interface:** Drag-and-drop file upload support.

### 3.  Smart Form Filler
* **Case Management:** Structured inputs for Case Information (Caption, Court Address) and User Details.
* **Document Handling:** File upload functionality for case-specific documents.
* **Validation:** Vanilla JavaScript validation to ensure file selection and submission feedback.

##  Tech Stack

* **Frontend Structure:** HTML5
* **Styling:** * **Tailwind CSS** (via CDN) for the Landing, Search, and Analysis pages.
    * **Custom CSS** (`styles.css`) for the Form Filler module.
* **Interactivity:** Vanilla JavaScript (`script.js`) for DOM manipulation and event handling.
* **Icons:** Phosphor Icons (via SVG).

##  Project Structure

```bash
├── landing page.html          # Main entry point/Home page
├── legal search page.html     # Search interface
├── contract analysis page.html # Contract upload and text analysis interface
├── form filler page.html      # Detailed form for legal case info
├── styles.css                 # Custom styling for the form filler
└── script.js                  # Logic for file uploads and form submission
```

##  Future Enhancements
Backend Integration: Connect the frontend to a Python/Node.js backend to process AI queries.

OCR Capability: Implement OCR to read scanned PDF contracts.

Auth System: Add user login/signup functionality.

News Feed: Activate the "News" section to fetch real-time legal updates based on the user's region.
