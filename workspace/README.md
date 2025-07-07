# Angular Workspace

This workspace contains the Angular projects and libraries including the `components` UI library built with Angular 17 and Tailwind CSS.

---

## Projects

- `components` — A reusable Angular 17 component library styled with Tailwind CSS, located at `projects/components`.

---

## Usage

### Installing the Component Library

If published to npm, install it in your Angular applications like so:

```bash
  npm install your-library-name
```

# Development

## Serve for Development

To run the development server (typically for the demo app or playground):

```bash
  ng serve
```

Navigate to http://localhost:4200/ in your browser.

# Build the Library
To build the components library and output to dist/components:

```bash
  ng build components
```

# Run Tests

## Run unit tests with Karma:
    
```bash
  ng test
```

## Run end-to-end tests (if configured):

```bash
  ng e2e
```


# Contributing & Release Process

For guidelines on branching, versioning, and releasing the library, see the CONTRIBUTING.md file at the root of the repository.

# Further Help

Use the Angular CLI help for more commands and options:

```bash
  ng help
```

Or visit the Angular CLI Documentation.
