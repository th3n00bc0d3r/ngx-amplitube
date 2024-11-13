import { Injectable } from '@angular/core';
import * as amplitude from '@amplitude/analytics-browser';

@Injectable({
  providedIn: 'root'
})
export class NgxAmplitudeService {

  /**
   * Logs an event to Amplitude.
   * @param eventName The name of the event to log.
   * @param eventProperties Optional properties to include with the event.
   */
  logEvent(eventName: string, eventProperties?: Record<string, any>): void {
    amplitude.track(eventName, eventProperties);
  }  
}
