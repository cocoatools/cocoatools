const TOOL_DATA = [
  {
    slug: "word-counter",
    title: "Word Counter",
    category: "Text Tools",
    description: "Analyze words, characters, sentences, and reading time instantly.",
    icon: "📝",
    featured: true,
    popular: true,
    recent: true,
    steps: [
      "Paste or type the text you want to analyze.",
      "Click Analyze to calculate words, characters, sentences, and reading time.",
      "Use the result to check length, productivity, and readability quickly."
    ],
    faqs: [
      { q: "Does this count words accurately?", a: "Yes. The tool counts whitespace-separated words and also reports character totals." },
      { q: "Does it support long content?", a: "Yes. It works for essays, articles, copy, and lengthy notes." }
    ]
  },
  {
    slug: "character-counter",
    title: "Character Counter",
    category: "Text Tools",
    description: "Measure text length by characters, spaces, and paragraphs.",
    icon: "🔠",
    featured: true,
    popular: true,
    steps: [
      "Paste text into the box.",
      "Click Count Characters.",
      "Review the final breakdown for writing and publishing tasks."
    ],
    faqs: [
      { q: "Does it include spaces?", a: "Yes. The tool can count characters with and without spaces for clearer measurements." }
    ]
  },
  {
    slug: "case-converter",
    title: "Case Converter",
    category: "Text Tools",
    description: "Convert text into uppercase, lowercase, title case, and sentence case.",
    icon: "🔤",
    featured: true,
    steps: [
      "Enter text or paste content.",
      "Pick the desired case format.",
      "Copy the converted result instantly."
    ],
    faqs: [
      { q: "Can I convert headings?", a: "Yes. It is useful for titles, headings, and standardized text formatting." }
    ]
  },
  {
    slug: "text-to-slug",
    title: "Text to Slug",
    category: "Text Tools",
    description: "Turn headings and titles into clean URL-friendly slugs.",
    icon: "🔗",
    popular: true,
    steps: [
      "Type a phrase or title.",
      "Click Generate Slug.",
      "Use the clean URL slug in content or website settings."
    ],
    faqs: [
      { q: "Does it remove punctuation?", a: "Yes. It converts spaces and punctuation into a cleaner lowercase URL slug." }
    ]
  },
  {
    slug: "password-generator",
    title: "Password Generator",
    category: "Security and Password Utility Tools",
    description: "Create strong random passwords with adjustable length and complexity.",
    icon: "🔐",
    featured: true,
    popular: true,
    steps: [
      "Choose password length and character types.",
      "Click Generate Password.",
      "Copy it to a password manager or secure vault."
    ],
    faqs: [
      { q: "How secure are the passwords?", a: "They use a strong random generator and can include uppercase, lowercase, numbers, and symbols." }
    ]
  },
  {
    slug: "uuid-generator",
    title: "UUID Generator",
    category: "Developer Tools",
    description: "Generate unique identifiers for development, testing, and system design.",
    icon: "🧩",
    steps: [
      "Choose the format if needed.",
      "Generate one or multiple IDs.",
      "Copy the result and use it in your project."
    ],
    faqs: [
      { q: "Are these UUIDs random?", a: "Yes. The generator creates new unique identifiers each time using standard randomness." }
    ]
  },
  {
    slug: "json-formatter",
    title: "JSON Formatter",
    category: "Data and JSON Tools",
    description: "Beautify, validate, and fix JSON structure for cleaner output.",
    icon: "🧪",
    featured: true,
    popular: true,
    steps: [
      "Paste raw JSON text.",
      "Click Format JSON.",
      "Check the beautified version and copy it when ready."
    ],
    faqs: [
      { q: "What if the JSON is invalid?", a: "The tool will show an error and ask you to correct the structure before formatting." }
    ]
  },
  {
    slug: "base64-encoder",
    title: "Base64 Encoder / Decoder",
    category: "Developer Tools",
    description: "Encode and decode Base64 text safely in the browser.",
    icon: "🔢",
    steps: [
      "Choose encode or decode mode.",
      "Paste the content.",
      "Convert and copy the output."
    ],
    faqs: [
      { q: "Is this suitable for text only?", a: "It is designed for text and simple encoded payloads, not large binary files." }
    ]
  },
  {
    slug: "color-converter",
    title: "Color Converter",
    category: "Color Tools",
    description: "Convert a color between HEX, RGB, HSL, and CSS values.",
    icon: "🎨",
    featured: true,
    steps: [
      "Enter a color value such as #4f46e5.",
      "Click Convert.",
      "Use the resulting values in CSS, design software, or UI projects."
    ],
    faqs: [
      { q: "Does it support CSS colors?", a: "The tool focuses on common web color formats and is ideal for UI and design work." }
    ]
  },
  {
    slug: "gradient-generator",
    title: "CSS Gradient Generator",
    category: "CSS Tools",
    description: "Generate smooth linear or radial gradients for web design work.",
    icon: "🌈",
    steps: [
      "Choose two or more colors.",
      "Select a direction and style.",
      "Copy the CSS gradient for your design."
    ],
    faqs: [
      { q: "Can I use this in a CSS file?", a: "Yes. The generated CSS is ready to paste into your project styles." }
    ]
  },
  {
    slug: "box-shadow-generator",
    title: "Box Shadow Generator",
    category: "CSS Tools",
    description: "Create soft, modern shadows for cards, buttons, and layouts.",
    icon: "🪟",
    steps: [
      "Adjust shadow values.",
      "Preview the effect.",
      "Copy the CSS snippet." 
    ],
    faqs: [
      { q: "Does this support inset shadows?", a: "Yes. You can tune the shadow style for cards and buttons easily." }
    ]
  },
  {
    slug: "bmi-calculator",
    title: "BMI Calculator",
    category: "Calculators",
    description: "Calculate body mass index using metric or imperial values.",
    icon: "🏋️",
    featured: true,
    steps: [
      "Enter your height and weight.",
      "Choose the unit system.",
      "Review your BMI category and health guidance."
    ],
    faqs: [
      { q: "Is BMI a medical diagnosis?", a: "It provides a general estimate, but a clinician should assess health more comprehensively." }
    ]
  },
  {
    slug: "percentage-calculator",
    title: "Percentage Calculator",
    category: "Calculators",
    description: "Find percent of a number, increase, decrease, and more.",
    icon: "📊",
    steps: [
      "Enter the value and percent.",
      "Select the calculation type.",
      "Review the computed result and formatting."
    ],
    faqs: [
      { q: "Can it calculate discounts?", a: "Yes. It works for percent changes, discounts, and markup calculations." }
    ]
  },
  {
    slug: "age-calculator",
    title: "Age Calculator",
    category: "Time and Date Tools",
    description: "Calculate exact age from a date of birth.",
    icon: "🎂",
    steps: [
      "Choose a birth date.",
      "Enter the target date or use today.",
      "Review detailed age results."
    ],
    faqs: [
      { q: "Does it account for leap years?", a: "Yes. The calculation uses standard calendar logic for accuracy." }
    ]
  },
  {
    slug: "loan-calculator",
    title: "Loan Calculator",
    category: "Business Tools",
    description: "Estimate monthly payments, totals, and repayment interest.",
    icon: "💰",
    steps: [
      "Enter loan amount, rate, and term.",
      "Click Calculate.",
      "Review monthly payment, total, and interest."
    ],
    faqs: [
      { q: "Is this an exact lender quote?", a: "It is a helpful estimate for budgeting, not a formal lending offer." }
    ]
  },
  {
    slug: "keyword-density",
    title: "Keyword Density Analyzer",
    category: "SEO Tools",
    description: "Check how often terms appear in content and see density by word.",
    icon: "🔍",
    featured: true,
    steps: [
      "Paste your article or copy into the box.",
      "Click Analyze Keywords.",
      "Review the density and ranking of the most common words."
    ],
    faqs: [
      { q: "Is this good for SEO?", a: "It helps evaluate keyword repetition and content focus, but should be used with broader SEO strategy." }
    ]
  },
  {
    slug: "meta-tag-generator",
    title: "Meta Tag Generator",
    category: "SEO Tools",
    description: "Generate title tags, descriptions, and social preview metadata.",
    icon: "🏷️",
    steps: [
      "Enter title, description, and keywords.",
      "Click Generate.",
      "Use the tags in your HTML head section."
    ],
    faqs: [
      { q: "Is this SEO-friendly?", a: "Yes. It is useful for generating clear metadata that aligns with website publishing practices." }
    ]
  },
  {
    slug: "url-parser",
    title: "URL Parser",
    category: "Internet and Website Utility Tools",
    description: "Break down a URL into protocol, host, path, query, and fragments.",
    icon: "🌐",
    steps: [
      "Paste a URL.",
      "Click Parse.",
      "Review protocol, domain, path, and parameters."
    ],
    faqs: [
      { q: "Can this parse query strings?", a: "Yes. It helps inspect key-value parameters in links and URLs." }
    ]
  },
  {
    slug: "speed-converter",
    title: "Speed Converter",
    category: "Unit Conversion Tools",
    description: "Convert between km/h, mph, m/s, and other speed units.",
    icon: "🚀",
    steps: [
      "Enter the speed value.",
      "Choose source and target units.",
      "Review the converted value."
    ],
    faqs: [
      { q: "Is the conversion accurate?", a: "Yes. It uses standard unit conversion formulas for recognized speed units." }
    ]
  },
  {
    slug: "unit-converter",
    title: "Unit Converter",
    category: "Unit Conversion Tools",
    description: "Convert units like length, weight, temperature, and speed.",
    icon: "📐",
    popular: true,
    steps: [
      "Select a unit category.",
      "Choose a source and target unit.",
      "Enter the value and calculate the result."
    ],
    faqs: [
      { q: "Does it cover metric and imperial?", a: "Yes. It includes common conversions used in everyday tasks and technical work." }
    ]
  },
  {
    slug: "markdown-to-html",
    title: "Markdown to HTML",
    category: "HTML Tools",
    description: "Convert Markdown content into clean HTML markup.",
    icon: "📄",
    steps: [
      "Paste markdown content.",
      "Click Convert.",
      "Use the generated HTML in website or content workflows."
    ],
    faqs: [
      { q: "Does it support headings and lists?", a: "Yes. It converts common Markdown syntax into HTML elements." }
    ]
  },
  {
    slug: "csv-to-json",
    title: "CSV to JSON",
    category: "Data and JSON Tools",
    description: "Convert comma-separated data into structured JSON output.",
    icon: "📊",
    steps: [
      "Paste CSV values.",
      "Click Convert to JSON.",
      "Use the structured JSON output in apps or services."
    ],
    faqs: [
      { q: "Does it support header rows?", a: "Yes. The tool works with CSV that includes a header row for field names." }
    ]
  },
  {
    slug: "json-to-csv",
    title: "JSON to CSV",
    category: "Data and JSON Tools",
    description: "Turn JSON arrays into CSV spreadsheet rows.",
    icon: "📉",
    steps: [
      "Paste a JSON array or object list.",
      "Convert it to CSV.",
      "Copy the output into spreadsheets or data tools."
    ],
    faqs: [
      { q: "What format does it accept?", a: "It accepts JSON arrays of objects and converts them into CSV rows." }
    ]
  },
  {
    slug: "hash-generator",
    title: "Hash Generator",
    category: "Security and Password Utility Tools",
    description: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes.",
    icon: "🧬",
    steps: [
      "Paste text into the input field.",
      "Choose a hash algorithm.",
      "Copy the generated digest for secure verification."
    ],
    faqs: [
      { q: "Is this suitable for password hashing?", a: "No. This is intended for integrity checks and general verification, not storing passwords directly." }
    ]
  }
];

const BLOG_DATA = [
  { slug: "compress-images-without-losing-quality", title: "How to Compress Images Without Losing Quality", excerpt: "Learn practical ways to reduce file size while preserving clarity and visual quality.", category: "Design" },
  { slug: "best-free-pdf-tools-for-students", title: "Best Free PDF Tools for Students", excerpt: "A breakdown of useful PDF features for study, notes, and exam preparation.", category: "Education" },
  { slug: "how-to-convert-jpg-to-webp", title: "How to Convert JPG to WebP", excerpt: "Discover why WebP helps improve page speed and how to convert files efficiently.", category: "Image Tools" },
  { slug: "how-to-use-online-calculators", title: "How to Use Online Calculators", excerpt: "Use calculators confidently to save time and reduce errors in daily tasks.", category: "Productivity" },
  { slug: "what-is-json-and-how-does-it-work", title: "What Is JSON and How Does It Work?", excerpt: "Understand the structure of JSON and when it is used in real-world applications.", category: "Developer" }
];

const CATEGORY_DATA = [
  { name: "Image Tools", icon: "🖼️", description: "Resize, optimize, and process images." },
  { name: "PDF Tools", icon: "📄", description: "Split, compress, merge, and convert PDFs." },
  { name: "Text Tools", icon: "📝", description: "Clean, rewrite, format, and analyze text." },
  { name: "Calculators", icon: "🧮", description: "Finance, health, and daily math helpers." },
  { name: "SEO Tools", icon: "📈", description: "Check content, metadata, and website optimization." },
  { name: "Developer Tools", icon: "💻", description: "Useful utilities for coders and software teams." },
  { name: "File Conversion Tools", icon: "🔄", description: "Convert document and media formats quickly." },
  { name: "Unit Conversion Tools", icon: "⚖️", description: "Convert measurements across systems." },
  { name: "Time and Date Tools", icon: "⏰", description: "Compare dates, durations, and scheduling values." },
  { name: "Math Tools", icon: "📐", description: "Solve and simplify everyday numeric tasks." },
  { name: "Color Tools", icon: "🎨", description: "Convert and generate color systems." },
  { name: "CSS Tools", icon: "🧩", description: "Design helpers for modern CSS interfaces." },
  { name: "HTML Tools", icon: "🧱", description: "Generate and inspect structure and markup." },
  { name: "JavaScript Tools", icon: "⚙️", description: "Handle common scripting tasks and formatting." },
  { name: "Data and JSON Tools", icon: "🧪", description: "Manipulate structured data for apps and APIs." },
  { name: "Security and Password Utility Tools", icon: "🔐", description: "Generate and verify secure text and tokens." },
  { name: "Education Tools", icon: "🎓", description: "Study and academic productivity helpers." },
  { name: "Writing Tools", icon: "✍️", description: "Improve, structure, and fine-tune written content." },
  { name: "Business Tools", icon: "📦", description: "Support pricing, planning, and operations." },
  { name: "Internet and Website Utility Tools", icon: "🌐", description: "Inspect links, metadata, and web formats." }
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.textContent = theme === "dark" ? "☀️" : "🌙";
  });
}

function initThemeToggle() {
  const preferred = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(preferred);
  document.querySelectorAll(".theme-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme);
    });
  });
}

function renderToolCards(list, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = list.map((tool) => `
    <article class="tool-card">
      <div class="tool-header">
        <span class="tool-icon">${tool.icon}</span>
        <span class="tool-badge">${tool.category}</span>
      </div>
      <h3>${tool.title}</h3>
      <p>${tool.description}</p>
      <a href="/tool.html?tool=${tool.slug}" class="tool-link">Use tool</a>
    </article>
  `).join("");
}

function renderCategories() {
  const container = document.getElementById("categoryGrid");
  if (!container) return;
  container.innerHTML = CATEGORY_DATA.map((category) => `
    <article class="category-card">
      <div class="category-icon">${category.icon}</div>
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <a href="/tools.html">Browse tools</a>
    </article>
  `).join("");
}

function renderCategoriesList() {
  const container = document.getElementById("categoriesList");
  if (!container) return;
  container.innerHTML = CATEGORY_DATA.map((category) => `
    <article class="category-card large-card">
      <div class="category-icon">${category.icon}</div>
      <h3>${category.name}</h3>
      <p>${category.description}</p>
      <a href="/tools.html">View tools</a>
    </article>
  `).join("");
}

function renderBlogCards() {
  const container = document.getElementById("blogGrid");
  const list = document.getElementById("blogList");
  const cards = BLOG_DATA.map((article) => `
    <article class="blog-card">
      <div class="blog-tag">${article.category}</div>
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
      <a href="/blog.html">Read article</a>
    </article>
  `).join("");
  if (container) container.innerHTML = cards;
  if (list) list.innerHTML = cards;
}

function initHomePage() {
  if (!document.body.dataset.homePage) return;
  renderToolCards(TOOL_DATA.filter((tool) => tool.popular), "popularTools");
  renderToolCards(TOOL_DATA.filter((tool) => tool.recent), "recentTools");
  renderToolCards(TOOL_DATA.filter((tool) => tool.featured), "featuredTools");
  renderCategories();
  renderBlogCards();
}

function initToolsPage() {
  const container = document.getElementById("allToolsGrid");
  if (!container) return;
  renderToolCards(TOOL_DATA, "allToolsGrid");
  const input = document.getElementById("toolSearch");
  if (input) {
    input.addEventListener("input", (event) => {
      const query = event.target.value.trim().toLowerCase();
      const filtered = TOOL_DATA.filter((tool) => {
        return tool.title.toLowerCase().includes(query) || tool.description.toLowerCase().includes(query) || tool.category.toLowerCase().includes(query);
      });
      renderToolCards(filtered, "allToolsGrid");
    });
  }
}

function initSearchSuggestions() {
  const input = document.getElementById("globalSearch");
  const box = document.getElementById("searchSuggestions");
  const button = document.getElementById("searchButton");
  if (!input || !box || !button) return;

  const updateSuggestions = (value) => {
    const query = value.trim().toLowerCase();
    if (!query) {
      box.innerHTML = "";
      return;
    }
    const suggestions = TOOL_DATA.filter((tool) => {
      return tool.title.toLowerCase().includes(query) || tool.category.toLowerCase().includes(query);
    }).slice(0, 6);

    if (!suggestions.length) {
      box.innerHTML = '<div class="suggestion-empty">No exact match found. Try “json”, “seo”, or “pdf”.</div>';
      return;
    }

    box.innerHTML = suggestions.map((tool) => `
      <a href="/tool.html?tool=${tool.slug}" class="search-suggestion">${tool.title}</a>
    `).join("");
  };

  input.addEventListener("input", (event) => updateSuggestions(event.target.value));
  button.addEventListener("click", () => {
    const query = input.value.trim().toLowerCase();
    const match = TOOL_DATA.find((tool) => tool.title.toLowerCase().includes(query) || tool.category.toLowerCase().includes(query));
    if (match) {
      window.location.href = `/tool.html?tool=${match.slug}`;
    } else {
      window.location.href = "/tools.html";
    }
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMap = {
      name: !name ? "Please enter your name." : "",
      email: !email ? "Please enter your email." : !/^\S+@\S+\.\S+$/.test(email) ? "Please enter a valid email address." : "",
      subject: !subject ? "Please enter a subject." : "",
      message: !message ? "Please enter your message." : ""
    };

    Object.entries(errorMap).forEach(([key, text]) => {
      const field = document.getElementById(key);
      const errorNode = document.querySelector(`[data-error-for="${key}"]`);
      if (field) field.setAttribute("aria-invalid", text ? "true" : "false");
      if (errorNode) errorNode.textContent = text;
    });

    if (Object.values(errorMap).some(Boolean)) {
      const msg = document.getElementById("contactMessage");
      if (msg) {
        msg.textContent = "Please fix the highlighted fields before sending your message.";
        msg.classList.add("error");
      }
      return;
    }

    const subjectLine = encodeURIComponent(subject);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:whopworkwhop@gmail.com?subject=${subjectLine}&body=${body}`;

    const msg = document.getElementById("contactMessage");
    if (msg) {
      msg.textContent = "Your email client has been opened. Please send the message to complete the contact form.";
      msg.classList.remove("error");
      msg.classList.add("success");
      form.reset();
    }
  });
}

function numberFormat(value) {
  return Number(value).toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function hashString(input, algorithm = "SHA-256") {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  return crypto.subtle.digest(algorithm, data).then((buffer) => {
    const hex = Array.from(new Uint8Array(buffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
    return hex;
  });
}

function initToolPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("tool") || "word-counter";
  const tool = TOOL_DATA.find((item) => item.slug === slug);\n  if (!tool) {\n    const title = document.getElementById("toolTitle");\n    const intro = document.getElementById("toolIntro");\n    if (title) title.textContent = "Tool not found";\n    if (intro) intro.textContent = "This tool URL does not match an available tool. Browse the library to find a working utility.";\n    document.title = "Tool Not Found | COCOA TOOLS";\n    const inputs = document.getElementById("toolInputs");\n    if (inputs) inputs.textContent = "No tool is available at this address.";\n    return;\n  }

  const titleNode = document.getElementById("toolTitle");
  const introNode = document.getElementById("toolIntro");
  const inputWrap = document.getElementById("toolInputs");
  const resultNode = document.getElementById("toolResult");
  const stepsNode = document.getElementById("toolSteps");
  const faqNode = document.getElementById("toolFaqs");

  if (titleNode) titleNode.textContent = tool.title;
  if (introNode) introNode.textContent = tool.description;
  document.title = `${tool.title} | COCOA TOOLS`;

  if (stepsNode) {
    stepsNode.innerHTML = tool.steps.map((step) => `<li>${step}</li>`).join("");
  }

  if (faqNode) {
    faqNode.innerHTML = tool.faqs.map((item) => `
      <details>
        <summary>${item.q}</summary>
        <p>${item.a}</p>
      </details>
    `).join("");
  }

  if (!inputWrap || !resultNode) return;

  const setResult = (value) => {
    resultNode.innerHTML = `<pre>${escapeHtml(value)}</pre>`;
  };

  const resetButton = document.getElementById("resetTool");
  const copyButton = document.getElementById("copyResult");

  const runTool = () => {
    const inputResult = document.getElementById("toolInput");
    const value = inputResult ? inputResult.value : "";
    if (!inputResult && !["uuid-generator", "password-generator", "box-shadow-generator"].includes(tool.slug)) return;

    switch (tool.slug) {
      case "word-counter": {
        const trimmed = value.trim();
        const words = trimmed ? trimmed.split(/\s+/).length : 0;
        const chars = value.length;
        const charsNoSpaces = value.replace(/\s/g, "").length;
        const sentences = value.split(/[.!?]+/).filter(Boolean).length;
        const paragraphs = value.split(/\n+/).filter((line) => line.trim().length).length;
        const readingMinutes = Math.max(1, Math.ceil(words / 200));
        setResult(`Words: ${words}\nCharacters: ${chars}\nCharacters (no spaces): ${charsNoSpaces}\nSentences: ${sentences}\nParagraphs: ${paragraphs}\nReading time: ${readingMinutes} min`);
        break;
      }
      case "character-counter": {
        const charsWithSpaces = value.length;
        const charsWithoutSpaces = value.replace(/\s/g, "").length;
        const words = value.trim() ? value.trim().split(/\s+/).length : 0;
        setResult(`Characters: ${charsWithSpaces}\nCharacters without spaces: ${charsWithoutSpaces}\nWords: ${words}`);
        break;
      }
      case "case-converter": {
        const output = document.getElementById("caseType");
        const mode = output ? output.value : "lowercase";
        const transformed = mode === "lowercase" ? value.toLowerCase() : mode === "uppercase" ? value.toUpperCase() : mode === "title" ? value.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()) : value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        setResult(transformed);
        break;
      }
      case "text-to-slug": {
        setResult(CocoaToolCore.slugify(value));
        break;
      }
      case "password-generator": {
        const len = document.getElementById("passLength").value;
        const sets = {
          upper: document.getElementById("includeUpper").checked,
          lower: document.getElementById("includeLower").checked,
          numbers: document.getElementById("includeNumbers").checked,
          symbols: document.getElementById("includeSymbols").checked
        };
        setResult(CocoaToolCore.randomPassword(len, sets));
        break;
      }
      case "uuid-generator": {
        setResult(crypto.randomUUID());
        break;
      }
      case "json-formatter": {
        try {
          const parsed = JSON.parse(value);
          setResult(JSON.stringify(parsed, null, 2));
        } catch (error) {
          setResult(`Invalid JSON: ${error.message}`);
        }
        break;
      }
      case "base64-encoder": {
        const mode = document.getElementById("baseMode").value;
        try {
          setResult(mode === "encode" ? btoa(unescape(encodeURIComponent(value))) : decodeURIComponent(escape(atob(value))));
        } catch (error) {
          setResult(`Error: ${error.message}`);
        }
        break;
      }
      case "color-converter": {
        const inputColor = value.trim();
        const hex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.test(inputColor) ? (inputColor.startsWith("#") ? inputColor : `#${inputColor}`) : null;
        if (!hex) {
          setResult("Please enter a valid HEX color like #4f46e5.");
          break;
        }
        const normalized = hex.length === 4 ? hex.split("").map((char, index) => index === 0 ? char : char + char).join("") : hex;
        const rgb = {
          r: parseInt(normalized.slice(1, 3), 16),
          g: parseInt(normalized.slice(3, 5), 16),
          b: parseInt(normalized.slice(5, 7), 16)
        };
        const r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min;
        let h = 0, s = 0, l = (max + min) / 2;
        if (delta !== 0) {
          s = delta / (1 - Math.abs(2 * l - 1));
          switch (max) {
            case r: h = ((g - b) / delta) % 6; break;
            case g: h = (b - r) / delta + 2; break;
            case b: h = (r - g) / delta + 4; break;
          }
          h = Math.round(h * 60);
          if (h < 0) h += 360;
        }
        s = Math.round(s * 100);
        l = Math.round(l * 100);
        setResult(`HEX: ${normalized.toUpperCase()}\nRGB: ${rgb.r}, ${rgb.g}, ${rgb.b}\nHSL: ${h}°, ${s}%, ${l}%`);
        break;
      }
      case "gradient-generator": {
        const colors = value.split(",").map((part) => part.trim()).filter(Boolean);
        const start = colors[0] || "#2563eb";
        const end = colors[1] || "#8b5cf6";
        setResult(`background: linear-gradient(135deg, ${start}, ${end});`);
        break;
      }
      case "box-shadow-generator": {
        setResult("box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);\n-webkit-box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);\n-moz-box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);");
        break;
      }
      case "bmi-calculator": {
        const result = CocoaToolCore.bmi(document.getElementById("weight").value, document.getElementById("height").value);
        setResult(`BMI: ${result.value.toFixed(2)}\nCategory: ${result.category}\nThis is a screening estimate, not a medical diagnosis.`);
        break;
      }
      case "percentage-calculator": {
        const amount = document.getElementById("calcValue").value;
        const percent = document.getElementById("calcPercent").value;
        setResult(`${percent}% of ${amount} = ${numberFormat(CocoaToolCore.percentage(amount, percent))}`);
        break;
      }
      case "age-calculator": {
        const birth = document.getElementById("dob").value;
        const targetField = document.getElementById("targetDate");
        const now = new Date();
        const target = targetField.value || [now.getFullYear(), String(now.getMonth() + 1).padStart(2, "0"), String(now.getDate()).padStart(2, "0")].join("-");
        const result = CocoaToolCore.age(birth, target);
        setResult(`Age: ${result.years} years, ${result.months} months, ${result.days} days`);
        break;
      }
      case "loan-calculator": {
        const result = CocoaToolCore.loanPayment(
          document.getElementById("loanAmount").value,
          document.getElementById("loanRate").value,
          document.getElementById("loanTerm").value
        );
        setResult(`Monthly payment: $${result.monthly.toFixed(2)}\nTotal repayment: $${result.total.toFixed(2)}\nTotal interest: $${result.interest.toFixed(2)}\nPayments: ${result.months}`);
        break;
      }
      case "keyword-density": {
        const words = value.toLowerCase().match(/[a-z0-9']+/g) || [];
        const total = words.length;
        const map = new Map();
        words.forEach((word) => map.set(word, (map.get(word) || 0) + 1));
        const entries = [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
        const output = entries.map(([word, count]) => `${word}: ${(count / total * 100).toFixed(2)}%`).join("\n");
        setResult(total ? output : "No words found to analyze.");
        break;
      }
      case "meta-tag-generator": {
        const title = document.getElementById("metaTitle").value || "COCOA TOOLS";
        const description = document.getElementById("metaDescription").value || "Smart tools for everyday tasks.";
        const keywords = document.getElementById("metaKeywords").value || "tool, website, utility";
        setResult(`<title>${escapeHtml(title)}</title>\n<meta name="description" content="${escapeHtml(description)}">\n<meta name="keywords" content="${escapeHtml(keywords)}">`);
        break;
      }
      case "url-parser": {
        const parsed = new URL(value.trim());
        setResult(`Protocol: ${parsed.protocol}\nHost: ${parsed.host}\nPathname: ${parsed.pathname}\nSearch: ${parsed.search}\nHash: ${parsed.hash}`);
        break;
      }
      case "speed-converter": {
        const speed = document.getElementById("speedValue").value;
        const from = { kmh: "km/h", mph: "mph", mps: "m/s", knot: "knot" }[document.getElementById("speedFrom").value];
        const to = { kmh: "km/h", mph: "mph", mps: "m/s", knot: "knot" }[document.getElementById("speedTo").value];
        setResult(`${speed} ${from} = ${CocoaToolCore.speed(speed, from, to).toFixed(4)} ${to}`);
        break;
      }
      case "unit-converter": {
        const amount = document.getElementById("conversionValue").value;
        const from = document.getElementById("unitFrom").value;
        const to = document.getElementById("unitTo").value;
        const converted = CocoaToolCore.convert(amount, from, to, "length");
        setResult(`${amount} ${from} = ${converted.toFixed(6)} ${to}`);
        break;
      }
      case "markdown-to-html": {
        const rendered = value
          .replace(/^### (.*$)/gm, "<h3>$1</h3>")
          .replace(/^## (.*$)/gm, "<h2>$1</h2>")
          .replace(/^# (.*$)/gm, "<h1>$1</h1>")
          .replace(/\*\*(.*)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*)\*/g, "<em>$1</em>")
          .replace(/`(.*)`/g, "<code>$1</code>")
          .replace(/\n/g, "<br>");
        setResult(rendered);
        break;
      }
      case "csv-to-json": {
        const json = CocoaToolCore.parseCsv(value);
        setResult(JSON.stringify(json, null, 2));
        break;
      }
      case "json-to-csv": {
        setResult(CocoaToolCore.jsonToCsv(value));
        break;
      }
      case "hash-generator": {
        const algo = document.getElementById("hashAlgo").value;
        hashString(value, algo).then((hash) => setResult(`${algo}: ${hash}`)).catch((error) => setResult(`Error: ${error.message}`));
        break;
      }
      default:
        setResult("This tool is not implemented yet. Please choose an available tool from the library.");
    }
  };

  switch (tool.slug) {
    case "word-counter":
      inputWrap.innerHTML = '<label for="toolInput">Text</label><textarea id="toolInput" rows="12" placeholder="Paste or type text here..."></textarea><button class="button button-primary" id="runTool">Analyze</button>';
      break;
    case "character-counter":
      inputWrap.innerHTML = '<label for="toolInput">Text</label><textarea id="toolInput" rows="12" placeholder="Paste text here..."></textarea><button class="button button-primary" id="runTool">Count</button>';
      break;
    case "case-converter":
      inputWrap.innerHTML = '<label for="toolInput">Text</label><textarea id="toolInput" rows="10" placeholder="Type your text..."></textarea><label for="caseType">Case format</label><select id="caseType"><option value="lowercase">Lowercase</option><option value="uppercase">Uppercase</option><option value="title">Title Case</option><option value="sentence">Sentence Case</option></select><button class="button button-primary" id="runTool">Convert</button>';
      break;
    case "text-to-slug":
      inputWrap.innerHTML = '<label for="toolInput">Title or phrase</label><input id="toolInput" type="text" placeholder="Example: SEO tools for beginners" /><button class="button button-primary" id="runTool">Generate slug</button>';
      break;
    case "password-generator":
      inputWrap.innerHTML = `
        <label for="passLength">Length</label>
        <input id="passLength" type="number" min="6" max="128" value="16" />
        <label><input id="includeUpper" type="checkbox" checked /> Uppercase</label>
        <label><input id="includeLower" type="checkbox" checked /> Lowercase</label>
        <label><input id="includeNumbers" type="checkbox" checked /> Numbers</label>
        <label><input id="includeSymbols" type="checkbox" checked /> Symbols</label>
        <button class="button button-primary" id="runTool">Generate</button>
      `;
      break;
    case "uuid-generator":
      inputWrap.innerHTML = '<button class="button button-primary" id="runTool">Generate UUID</button>';
      break;
    case "json-formatter":
      inputWrap.innerHTML = '<label for="toolInput">JSON</label><textarea id="toolInput" rows="12" placeholder="{\"name\": \"example\"}"></textarea><button class="button button-primary" id="runTool">Format JSON</button>';
      break;
    case "base64-encoder":
      inputWrap.innerHTML = '<label for="toolInput">Text</label><textarea id="toolInput" rows="10" placeholder="Paste text here..."></textarea><label for="baseMode">Mode</label><select id="baseMode"><option value="encode">Encode</option><option value="decode">Decode</option></select><button class="button button-primary" id="runTool">Convert</button>';
      break;
    case "color-converter":
      inputWrap.innerHTML = '<label for="toolInput">Color</label><input id="toolInput" type="text" value="#4f46e5" /><button class="button button-primary" id="runTool">Convert</button>';
      break;
    case "gradient-generator":
      inputWrap.innerHTML = '<label for="toolInput">Colors</label><input id="toolInput" type="text" value="#2563eb, #8b5cf6" /><button class="button button-primary" id="runTool">Generate</button>';
      break;
    case "box-shadow-generator":
      inputWrap.innerHTML = '<button class="button button-primary" id="runTool">Generate shadow</button>';
      break;
    case "bmi-calculator":
      inputWrap.innerHTML = '<label for="weight">Weight (kg)</label><input id="weight" type="number" value="70" /><label for="height">Height (cm)</label><input id="height" type="number" value="175" /><button class="button button-primary" id="runTool">Calculate BMI</button>';
      break;
    case "percentage-calculator":
      inputWrap.innerHTML = '<label for="calcValue">Value</label><input id="calcValue" type="number" value="100" /><label for="calcPercent">Percent</label><input id="calcPercent" type="number" value="25" /><button class="button button-primary" id="runTool">Calculate</button>';
      break;
    case "age-calculator":
      inputWrap.innerHTML = '<label for="dob">Birth date</label><input id="dob" type="date" /><label for="targetDate">Target date</label><input id="targetDate" type="date" /><button class="button button-primary" id="runTool">Calculate age</button>';
      break;
    case "loan-calculator":
      inputWrap.innerHTML = '<label for="loanAmount">Loan amount</label><input id="loanAmount" type="number" value="250000" /><label for="loanRate">Annual rate (%)</label><input id="loanRate" type="number" value="6" /><label for="loanTerm">Years</label><input id="loanTerm" type="number" value="30" /><button class="button button-primary" id="runTool">Calculate</button>';
      break;
    case "keyword-density":
      inputWrap.innerHTML = '<label for="toolInput">Text</label><textarea id="toolInput" rows="12" placeholder="Paste text to analyze..."></textarea><button class="button button-primary" id="runTool">Analyze</button>';
      break;
    case "meta-tag-generator":
      inputWrap.innerHTML = `
        <label for="metaTitle">Title</label>
        <input id="metaTitle" type="text" value="COCOA TOOLS" />
        <label for="metaDescription">Description</label>
        <input id="metaDescription" type="text" value="Smart tools for everyday tasks." />
        <label for="metaKeywords">Keywords</label>
        <input id="metaKeywords" type="text" value="tools, productivity, development" />
        <button class="button button-primary" id="runTool">Generate tags</button>
      `;
      break;
    case "url-parser":
      inputWrap.innerHTML = '<label for="toolInput">URL</label><input id="toolInput" type="url" value="https://example.com/blog/post?ref=home#section" /><button class="button button-primary" id="runTool">Parse</button>';
      break;
    case "speed-converter":
      inputWrap.innerHTML = '<label for="speedValue">Speed</label><input id="speedValue" type="number" value="60" /><label for="speedFrom">From</label><select id="speedFrom"><option value="kmh">km/h</option><option value="mph">mph</option><option value="mps">m/s</option><option value="knot">knot</option></select><label for="speedTo">To</label><select id="speedTo"><option value="mph">mph</option><option value="kmh">km/h</option><option value="mps">m/s</option><option value="knot">knot</option></select><button class="button button-primary" id="runTool">Convert</button>';
      break;
    case "unit-converter":
      inputWrap.innerHTML = '<label for="conversionValue">Value</label><input id="conversionValue" type="number" value="1" /><label for="unitFrom">From</label><select id="unitFrom"><option value="km">Kilometers</option><option value="m">Meters</option><option value="cm">Centimeters</option><option value="mile">Miles</option><option value="foot">Feet</option></select><label for="unitTo">To</label><select id="unitTo"><option value="m">Meters</option><option value="km">Kilometers</option><option value="mile">Miles</option><option value="foot">Feet</option></select><button class="button button-primary" id="runTool">Convert</button>';
      break;
    case "markdown-to-html":
      inputWrap.innerHTML = '<label for="toolInput">Markdown</label><textarea id="toolInput" rows="12" placeholder="# Heading\n\n- Item 1\n- Item 2"></textarea><button class="button button-primary" id="runTool">Convert</button>';
      break;
    case "csv-to-json":
      inputWrap.innerHTML = '<label for="toolInput">CSV</label><textarea id="toolInput" rows="10" placeholder="name,email\nAlice,alice@example.com\nBob,bob@example.com"></textarea><button class="button button-primary" id="runTool">Convert</button>';
      break;
    case "json-to-csv":
      inputWrap.innerHTML = '<label for="toolInput">JSON</label><textarea id="toolInput" rows="10" placeholder="[{\"name\":\"Alice\",\"email\":\"alice@example.com\"}]"></textarea><button class="button button-primary" id="runTool">Convert</button>';
      break;
    case "hash-generator":
      inputWrap.innerHTML = '<label for="toolInput">Text</label><textarea id="toolInput" rows="8" placeholder="Type text to hash..."></textarea><label for="hashAlgo">Algorithm</label><select id="hashAlgo"><option value="SHA-256">SHA-256</option><option value="SHA-1">SHA-1</option><option value="SHA-512">SHA-512</option></select><button class="button button-primary" id="runTool">Generate</button>';
      break;
    default:
      inputWrap.innerHTML = '<p class="form-message">This tool does not have an implementation yet. No sample result will be shown.</p>';
  }

  const runButton = document.getElementById("runTool");
  if (runButton) runButton.addEventListener("click", () => { try { runTool(); } catch (error) { setResult("Error: " + error.message); } });

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const text = resultNode.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        copyButton.textContent = "Copied";
        setTimeout(() => (copyButton.textContent = "Copy"), 1200);
      } catch (error) {
        resultNode.textContent = "Clipboard access failed. Please copy the content manually.";
      }
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      const field = document.getElementById("toolInput");
      if (field) field.value = "";
      resultNode.innerHTML = "";
      if (document.getElementById("caseType")) document.getElementById("caseType").value = "lowercase";
    });
  }

  if (["word-counter", "uuid-generator", "box-shadow-generator"].includes(tool.slug)) { try { runTool(); } catch (error) { setResult("Error: " + error.message); } }
}

function initPage() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const pageName = path.split("/").pop();
  const isHome = pageName === "" || pageName === "index.html";
  const isTools = pageName === "tools.html";
  const isCategories = pageName === "categories.html";
  const isBlog = pageName === "blog.html";
  const isContact = pageName === "contact.html";

  document.body.dataset.homePage = isHome ? "true" : "false";

  if (isHome) {
    initHomePage();
    initSearchSuggestions();
  }
  if (isTools) initToolsPage();
  if (isCategories) renderCategoriesList();
  if (isBlog) renderBlogCards();
  if (isContact) initContactForm();

  initToolPage();
  initThemeToggle();
}

document.addEventListener("DOMContentLoaded", initPage);
