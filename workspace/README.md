# Components Library

## Overview

This is a reusable Angular 17 component library styled with Tailwind CSS. It provides a set of UI components designed for easy integration into Angular applications.

---

## For Users: How to Use This Library

### Installation

Install the library from npm:

```bash
npm install your-library-name
```

### Peer Dependencies

Make sure your project is using Angular 17 and has Tailwind CSS configured.

### Importing the Library

Import the module(s) in your Angular app module:

```typescript
import { ComponentsModule } from 'your-library-name';

@NgModule({
  imports: [
    ComponentsModule,
    // other imports
  ],
})
export class AppModule {}
```

### Using Components

Use the components in your templates as follows:

```html
<your-component-selector></your-component-selector>
```

Refer to the documentation for available components and usage examples.

---

## For Developers: How to Develop and Build the Library

### Development Server

Run the development server for testing and development:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The app will reload on source changes.

### Code Scaffolding

Generate new components or other Angular artifacts:

```bash
ng generate component component-name
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Build

Build the component library:

```bash
ng build components
```

The build artifacts will be output to the `dist/components/` folder.

### Running Unit Tests

Execute unit tests with Karma:

```bash
ng test
```

### Running End-to-End Tests

Run e2e tests (requires setup):

```bash
ng e2e
```

### Publishing the Library

After building, the `dist/components` folder contains the package ready to publish.

To publish:

```bash
cd dist/components
npm publish
```

Remember to update the version in `package.json` before publishing.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests.

---

## License

Specify your license here, e.g., MIT License.

---

## Further Help

For Angular CLI help, use:

```bash
ng help
```

Or visit the [Angular CLI Documentation](https://angular.io/cli).
