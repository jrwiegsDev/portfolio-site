# Testing Quick Start Guide

## Running Tests

```bash
cd backend

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## What Gets Tested?

### ✅ No Real Data Affected
- **No real emails sent** - nodemailer is mocked in all tests
- **No rate limiting** - express-rate-limit is bypassed in tests
- **Fast execution** - All 18 tests run in < 1 second

### Test Coverage (18 tests)

1. **Contact Form Submission** (9 tests)
   - Valid submission
   - Email validation
   - Required field checks (name, email, message)
   - XSS/script injection prevention
   - Honeypot validation (bot detection)
   - Timing validation (too fast = bot)
   - Missing timing data rejection

2. **Spam Protection Middleware** (9 tests)
   - Script tag removal
   - Dangerous HTML removal
   - Safe text preservation
   - Special character handling
   - Honeypot validation (empty = human)
   - Honeypot rejection (filled = bot)
   - Valid timing acceptance
   - Fast submission rejection
   - Missing timing rejection

## Understanding Test Output

### ✅ Passing Tests
```
 PASS  tests/contact.test.js
 PASS  tests/spamProtection.test.js

Test Suites: 2 passed, 2 total
Tests:       18 passed, 18 total
Time:        0.234 s
```

### ❌ Failing Test
```
 FAIL  tests/contact.test.js
  POST /api/contact
    ✕ sends email with valid contact form data (45ms)
    
    expect(received).toBe(expected)
    Expected: 200
    Received: 400
```

## Continuous Integration (CI)

Tests run automatically on:
- Every push to `main` or `develop` branches
- Every pull request to `main` or `develop`
- Tests run on Node.js 18.x and 20.x

Check CI status: `.github/workflows/test.yml`

## Spam Protection Features

### Rate Limiting
- 5 submissions per hour per IP address
- Prevents spam/abuse
- Bypassed in tests

### Honeypot Field
- Hidden `website` field in form
- Empty = human, filled = bot
- Invisible to users, visible to bots

### Timing Validation
- Forms must take at least 3 seconds to complete
- Too fast = bot detection
- Tracks `formLoadTime` from frontend

### Input Sanitization
- Removes `<script>` tags
- Strips dangerous HTML/JavaScript
- Prevents XSS attacks

## Common Issues

### Tests Fail Locally
- Make sure you're in the `backend/` directory
- Run `npm install` to install dependencies
- Check that all files use CommonJS (require/module.exports)

### Rate Limit Errors (429)
- Make sure rate limiter is mocked in tests
- Check `jest.mock('../middleware/spamProtection', ...)` in test file

### Email Spam During Tests
- Verify nodemailer mock is at top of test file
- Should see `jest.mock('nodemailer', ...)`

## Need Help?
See `TESTING.md` for detailed explanations or `WHAT_EACH_TEST_DOES.md` for test descriptions.
