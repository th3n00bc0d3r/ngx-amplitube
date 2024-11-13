# ngx-amplitude

`ngx-amplitude` is an Angular library that provides an easy-to-use interface for integrating [Amplitude](https://amplitude.com) analytics into your Angular 18+ standalone applications. It includes a global initialization module and a service for logging events.

## Features
- **Easy Setup**: Initialize Amplitude with a single line of configuration.
- **Environment Check**: Automatically initializes Amplitude only in production environments.
- **Event Logging**: Use the `AmplitudeService` to log events with custom properties.
- **Standalone Configuration**: Supports Angular's standalone setup with a dedicated `provideAmplitude()` function.

---

## Installation

To install `ngx-amplitude` in your Angular project, run:

```bash
npm install ngx-amplitude @amplitude/analytics-browser
```

---

## Usage

### 1a. Import `AmplitudeModule` and Initialize Amplitude for Standalone

For Angular standalone applications, use the `provideAmplitude()` function to initialize Amplitude globally:

#### In `app.config.ts` or `maint.ts`:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { provideAmplitude } from 'ngx-amplitude';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideAmplitude('YOUR_API_KEY') // Replace 'YOUR_API_KEY' with your Amplitude API key
  ]
}).catch(err => console.error(err));
```

- **Note**: Replace `'YOUR_API_KEY'` with your actual Amplitude API key.
- **Environment Check**: The `provideAmplitude()` function ensures that Amplitude is only initialized in production mode, based on the `environment.production` setting.

---

### 1b. Import `AmplitudeModule` and Initialize Amplitude for non-standalone

Import `AmplitudeModule` in your `main.ts` file and provide your Amplitude API key:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AmplitudeModule } from 'ngx-amplitude';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    AmplitudeModule.forRoot('YOUR_API_KEY') // Replace 'YOUR_API_KEY' with your Amplitude API key
  ]
}).catch(err => console.error(err));
```


### 2. Use `AmplitudeService` to Log Events

Inject `AmplitudeService` into your components or services and use it to log events:

```typescript
import { Component } from '@angular/core';
import { AmplitudeService } from 'ngx-amplitude';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  constructor(private amplitudeService: AmplitudeService) {}

  trackButtonClick(): void {
    this.amplitudeService.logEvent('Button Clicked', { buttonName: 'Submit' });
  }
}
```

### Logging Events
- **logEvent(eventName: string, eventProperties?: Record<string, any>)**:
  - `eventName`: The name of the event you want to log.
  - `eventProperties`: An optional object containing properties to attach to the event.

---


## Development

### Building the Library

To build the library, run:

```bash
ng build ngx-amplitude
```

### Publishing to npm

1. Navigate to the `dist/ngx-amplitude` folder:
   ```bash
   cd dist/ngx-amplitude
   ```
2. Publish the library:
   ```bash
   npm publish --access public
   ```

---

## Contributing

Contributions are welcome! If you have suggestions or bug reports, please open an issue or create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Amplitude Analytics](https://amplitude.com) for providing the analytics platform.
- The Angular community for their continued support and contributions.

---

### About `provideAmplitude()`

The `provideAmplitude()` function is a custom provider designed for Angular standalone applications. It initializes Amplitude globally and conditionally, based on the `environment.production` flag.

- **Usage**: Add `provideAmplitude('YOUR_API_KEY')` to your `providers` array in `main.ts`.
- **Environment Check**: Ensures that analytics tracking is only enabled in production, preventing unnecessary data collection during development.

By using `provideAmplitude()`, you can seamlessly integrate Amplitude analytics into your Angular 18+ standalone projects with a clean and efficient setup.

---