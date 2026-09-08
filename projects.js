// Project content is a snapshot of the résumé and public repositories, September 2026.
window.PORTFOLIO_PROJECTS = [
  {
    id: 'rights', title: 'Know Your Legal Rights', category: 'ai', categoryLabel: 'AI APPLICATION', cover: 'ai', coverTitle: 'Rights, in\nplain English.', coverFoot: 'CURIOSITY → A PRACTICAL AI ASSISTANT',
    stack: ['ASP.NET Core', 'C#', 'OpenAI API', 'Azure'],
    summary: 'An AI chatbot that makes common questions about Ohio traffic stops easier to explore in everyday language.',
    context: 'A personal project exploring how a language model and a familiar chat interface can make legal information more approachable.',
    details: ['Built the application with C#, ASP.NET Core, the OpenAI API, and Azure App Service.', 'Designed prompts and application logic around 30+ common scenarios, including identification requests, searches, and Miranda rights.', 'Worked with a test set of common questions to evaluate the responses.'],
    note: 'An educational software project; its responses are not a substitute for advice from a qualified lawyer.',
    links: [{ label: 'View source', url: 'https://github.com/Patrickshay/KnowYourRightsBot' }]
  },
  {
    id: 'bookstore', title: 'Book Web Store', category: 'apps', categoryLabel: 'E-COMMERCE APPLICATION', cover: 'book', coverTitle: 'The next\nchapter.', coverFoot: 'BROWSE → DISCOVER → CHECK OUT',
    stack: ['.NET 8', 'ASP.NET Core MVC', 'EF Core', 'Stripe'],
    summary: 'A complete bookstore application bringing a shopping experience together with a structured .NET backend.',
    context: 'A personal e-commerce project focused on building a maintainable application with clear boundaries between the web interface, business logic, and data access.',
    details: ['Implemented the bookstore with ASP.NET Core MVC and Entity Framework Core.', 'Used Repository and Unit of Work patterns to organize data access.', 'Integrated Stripe for payment processing and separated the solution into data access, models, utilities, and web projects.'],
    links: [{ label: 'View source', url: 'https://github.com/Patrickshay/Book-Web-Store' }]
  },
  {
    id: 'spam', title: 'Spam Email Detection', category: 'ai', categoryLabel: 'MACHINE LEARNING · TEAM PROJECT', cover: 'ml', coverTitle: 'Less noise.\nMore signal.', coverFoot: 'RAW EMAILS → FEATURES → CLASSIFICATION',
    stack: ['Python', 'Word2Vec', 'scikit-learn', 'Jupyter'],
    summary: 'A machine learning pipeline that turns raw email files into features for spam classification.',
    context: 'A collaborative academic project with Avanti Nipunge and Myna Nereti, exploring the full path from raw email data to model evaluation.',
    details: ['Extracted email headers and body content, cleaned text, and prepared data for classification.', 'Used Word2Vec representations and compared Support Vector Machine, Logistic Regression, and Random Forest models.', 'Evaluated models with accuracy, precision, recall, and F1 score; documented the work in a report and presentation.'],
    links: [{ label: 'View source', url: 'https://github.com/Patrickshay/Spam-Email-Detection' }, { label: 'Read report', url: 'https://github.com/Patrickshay/Spam-Email-Detection/blob/main/Project%20Report_Spam%20Email%20Detection.pdf' }]
  },
  {
    id: 'chatroom', title: 'Chatroom & P2P File Transfer', category: 'systems', categoryLabel: 'NETWORKING & SYSTEMS', cover: 'network', coverTitle: 'A direct\nconnection.', coverFoot: 'DISCOVER → CONNECT → EXCHANGE',
    stack: ['C', 'OpenSSL', 'RSA / AES', 'Pthreads'],
    summary: 'A command-line chat and file-sharing application combining room discovery with peer-to-peer exchanges.',
    context: 'A systems project exploring client-server coordination, peer-to-peer communication, and encrypted data exchange on Linux and WSL.',
    details: ['Implemented room creation, discovery, joining, and membership management.', 'Added direct and group messaging, file transfers, and peer-to-peer communication.', 'Used RSA key exchange and AES-CFB payload encryption with OpenSSL.'],
    note: 'An academic implementation for exploring networking and cryptography, not a security-audited messaging product.',
    links: [{ label: 'View source', url: 'https://github.com/Patrickshay/ChatRoomFileTransfer' }, { label: 'View presentation', url: 'https://github.com/Patrickshay/ChatRoomFileTransfer/blob/main/ChatRoomFileTransfer.pptx' }]
  },
  {
    id: 'field-tracker', title: 'Field Usage Tracker', category: 'apps', categoryLabel: 'DEVELOPER TOOL', cover: 'data', coverTitle: 'Know your\ndata better.', coverFoot: 'INSPECT → UNDERSTAND → SIMPLIFY',
    stack: ['C#', '.NET Core', 'SQL Server', 'CSV'],
    summary: 'A .NET utility for inspecting field usage and exporting reports that help review data models.',
    context: 'A developer tool project focused on making unused or underused fields easier to identify when reviewing an application or database model.',
    details: ['Organized analysis and CSV generation into separate C# components.', 'Produced field-name and usage-count reports for review and sharing.', 'Explored field usage optimization with configurable SQL Server connectivity.'],
    links: [{ label: 'View source', url: 'https://github.com/Patrickshay/FieldUsageTracker' }]
  },
  {
    id: 'quicksort', title: 'QuickSort in C# & Rust', category: 'systems', categoryLabel: 'ALGORITHMS & LANGUAGE EXPLORATION', cover: 'sort', coverTitle: 'One algorithm.\nTwo perspectives.', coverFoot: 'C# × RUST',
    stack: ['C#', 'Rust', 'Algorithms'],
    summary: 'Two implementations of QuickSort, exploring how the same algorithm takes shape across different languages.',
    context: 'An academic programming-languages project comparing the implementation of a familiar sorting algorithm in C# and Rust.',
    details: ['Implemented recursive QuickSort in both C# and Rust.', 'Explored partitioning, array and slice operations, and swapping elements.', 'Documented algorithm complexity and differences in language approaches.'],
    links: [{ label: 'View source', url: 'https://github.com/Patrickshay/CPL_Project' }]
  },
  {
    id: 'sanrakshak', title: 'Sanrakshak', category: 'research', categoryLabel: 'TRAFFIC MONITORING · THESIS', cover: 'research', coverTitle: 'Technology for\nsafer journeys.', coverFoot: 'RESEARCH × REAL-WORLD MOBILITY',
    stack: ['Traffic monitoring', 'QR registration', 'SOS alerts'],
    summary: 'A traffic monitoring and safety project documented in a publicly available undergraduate thesis.',
    context: 'An undergraduate project exploring traffic monitoring, e-rickshaw registration, and safety features. The public repository shares the thesis; the application source is confidential.',
    details: ['Explored QR-based e-rickshaw registration and SOS alerts.', 'Documented the project in an undergraduate thesis at Nagpur University.', 'Shared the thesis publicly while keeping the confidential application source separate.'],
    links: [{ label: 'View thesis repository', url: 'https://github.com/Patrickshay/Sanrakshak' }, { label: 'Read thesis', url: 'https://drive.google.com/file/d/1nvLT2xnbN5NesjMP8XsAPw-mlZ_DNx1o/view?usp=drive_link' }]
  }
];
