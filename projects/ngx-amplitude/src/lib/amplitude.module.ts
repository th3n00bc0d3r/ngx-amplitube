import { NgModule, ModuleWithProviders } from '@angular/core';
import * as amplitude from '@amplitude/analytics-browser';
import { NgxAmplitudeService } from './ngx-amplitude.service';

@NgModule()
export class AmplitudeModule {
  static forRoot(apiKey: string): ModuleWithProviders<AmplitudeModule> {
      amplitude.init(apiKey); // Initialize Amplitude with the provided API key

    return {
      ngModule: AmplitudeModule,
      providers: [NgxAmplitudeService]
    };
  }
}
