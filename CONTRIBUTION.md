# Contributing & Release Process

Welcome, contributors! This document outlines our branching model, versioning, and release workflow to help maintain compatibility with multiple Angular versions and keep our library stable and evolving.

## Branching Strategy

| Branch Name          | Purpose                                                         |
|----------------------|-----------------------------------------------------------------|
| `main`               | Stable releases for the latest supported Angular version        |
| `develop`            | Ongoing development using the latest Angular version            |
| `release/*`          | Optional: Stabilize a release before merging to `main`          |
| `feature/*`          | New features or fixes, branched off from `develop`              |
| `angular-<version>-vX` | Version-specific branch for older Angular compatibility         |

## Workflow Examples

### Active Development (Latest Angular)

- Work on the latest Angular (e.g., Angular 18) happens in `develop`.
- New features are developed in `feature/*` branches off `develop`.
- When ready, merge to `main`, tag, and publish.

### Maintaining Angular 17

To maintain Angular 17 after `develop` has moved on:

1. Checkout the latest stable Angular 17 branch:

    ```bash
    git checkout angular-17-v1.0.0
    ```

2. Create a new release branch for updates/fixes:

    ```bash
    git checkout -b angular-17-v1.1.0
    ```

3. Develop features or fixes in `feature/*` branches off the new release branch:

    ```bash
    git checkout -b feature/angular-17/add-tooltip
    ```

4. Merge features/fixes back into the release branch (`angular-17-v1.1.0`) and update `package.json` version:

    ```json
    {
      "version": "1.1.0-angular17"
    }
    ```

5. Build the library:

    ```bash
    ng build components
    ```

6. Tag the release:

    ```bash
    git tag v1.1.0-angular17
    ```

7. Push tags and branches:

    ```bash
    git push origin angular-17-v1.1.0
    git push origin v1.1.0-angular17
    ```

8. Publish to npm:

    ```bash
    cd dist/components
    npm publish --access public
    ```

## Versioning in NPM

We use semantic versioning with an Angular version suffix for clarity:

```json
{
  "version": "1.1.0-angular17"
}
