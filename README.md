# 📦 Angular UI Component Library – Branching & Release Strategy

This library supports multiple Angular versions via a structured Git branching model inspired by GitFlow.
This allows maintaining compatibility with older Angular versions while continuing active development
on the latest version.

## 🧭 Branch Overview

| Branch Name          | Purpose                                                         |
|----------------------|-----------------------------------------------------------------|
| main                 | Stable releases for the latest supported Angular version        |
| develop              | Ongoing development using the latest Angular version            |
| release/*            | Optional: Used to stabilize a release before merging to main    |
| feature/*            | New features or fixes, branched off from develop                |
| angular-<version>-vX | Version-specific branch for older Angular compatibility         |

## 🌱 Workflow Examples

### 🔹 Active Development (Latest Angular)

- `develop` tracks the latest Angular (e.g. Angular 18).
- Features are developed in `feature/*` branches and merged into `develop`.
- Once ready, changes are merged into `main`, tagged, and published.

### 🔹 Maintaining Angular 17

To support Angular 17 after `develop` has moved on:

1. Check out the latest stable Angular 17 release:
    ```bash
    git checkout angular-17-v1.0.0
    ```

2. Create a new release branch:
    ```bash
    git checkout -b angular-17-v1.1.0
    ```

3. Add new components or fixes in `feature/*` branches off this version:
    ```bash
    git checkout -b feature/angular-17/add-tooltip
    ```

4. Merge back to `angular-17-v1.1.0`, update the version:
    ```json
    {
      "version": "1.1.0-angular17" 
    }
    ```

5. Build:
    ```bash
    ng build my-ui-components
    ```

6. Tag:
    ```bash
    git tag v1.1.0-angular17
    ```

7. Push:
    ```bash
    git push origin v1.1.0-angular17
    ```

8. Publish:
    ```bash
    npm publish --access public
    ```

## 📦 Versioning in NPM

Each release is versioned in `package.json` using semantic versioning plus Angular suffix:

```json
{
  "version": "1.1.0-angular17"
}
```

## 💻 Usage

1. Install:
    ```bash
    npm install my-ui-components@1.1.0-angular17
    ```
