{
    "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
    "version": 1,
    "newProjectRoot": "projects",
    "projects": {
      "angular.io-example": {
        "projectType": "application",
        "schematics": {
          "@schematics/angular:application": {
            "strict": true
          }
        },
        "root": "",
        "sourceRoot": "src",
        "prefix": "app",
        "architect": {
          "build": {
            "builder": "@angular-devkit/build-angular:browser",
            "options": {
              "outputPath": "dist",
              "index": "src/index.html",
              "main": "src/main.ts",
              "polyfills": "src/polyfills.ts",
              "tsConfig": "tsconfig.app.json",
              "assets": [
                "src/favicon.ico",
                "src/assets"
              ],
              "styles": [
                "src/styles.css"
              ],
              "scripts": []
            },
            "configurations": {
              "production": {
                "budgets": [
                  {
                    "type": "initial",
                    "maximumWarning": "500kb",
                    "maximumError": "1mb"
                  },
                  {
                    "type": "anyComponentStyle",
                    "maximumWarning": "2kb",
                    "maximumError": "4kb"
                  }
                ],
                "fileReplacements": [
                  {
                    "replace": "src/environments/environment.ts",
                    "with": "src/environments/environment.prod.ts"
                  }
                ],
                "outputHashing": "all"
              },
              "development": {
                "buildOptimizer": false,
                "optimization": false,
                "vendorChunk": true,
                "extractLicenses": false,
                "sourceMap": true,
                "namedChunks": true
              }
            },
            "defaultConfiguration": "production"
          },
          "serve": {
            "builder": "@angular-devkit/build-angular:dev-server",
            "configurations": {
              "production": {
                "browserTarget": "angular.io-example:build:production"
              },
              "development": {
                "browserTarget": "angular.io-example:build:development"
              }
            },
            "defaultConfiguration": "development"
          },
          "extract-i18n": {
            "builder": "@angular-devkit/build-angular:extract-i18n",
            "options": {
              "browserTarget": "angular.io-example:build"
            }
          },
          "test": {
            "builder": "@angular-devkit/build-angular:karma",
            "options": {
              "main": "src/test.ts",
              "polyfills": "src/polyfills.ts",
              "tsConfig": "tsconfig.spec.json",
              "karmaConfig": "karma.conf.js",
              "assets": [
                "src/favicon.ico",
                "src/assets"
              ],
              "styles": [
                "src/styles.css"
              ],
              "scripts": []
            }
          },
          "e2e": {
            "builder": "@angular-devkit/build-angular:protractor",
            "options": {
              "protractorConfig": "e2e/protractor.conf.js",
              "devServerTarget": "angular.io-example:serve"
            },
            "configurations": {
              "production": {
                "devServerTarget": "angular.io-example:serve:production"
              }
            }
          }
        }
      }
    }
  }
  