import { Injectable, APP_INITIALIZER } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private _config: Object
  private _env: string;
  constructor(private http: HttpClient) { }

  load() {
    return new Promise((resolve, reject) => {
      this._env = 'development';
      if (environment.production)
        this._env = 'production';
      console.log(this._env)
      this.http.get<any>('./assets/config/' + this._env + '.json')
        .subscribe((data) => {
          this._config = data;
          resolve(true);
        },
          (error: any) => {
            console.error(error);
            return Observable.throw(error || 'Server error');
          });
    });
  }

  // Is app in the development mode?
  isDevmode() {
    return this._env === 'development';
  }

    // Gets Client domain
    getAppDomain(): string {
      return this._config["APP_DOMAIN"];
    }

  // Gets API domain
  getApiDomain(): string {
    return this._config["API_DOMAIN"];
  }

    // Gets API base route
    getApiBaseUrl(): string {
      return this._config["API_BASE_URL"];
    }

    // Gets API route based on the provided key
    getApiEndpoint(key: string): string {
      return this._config["API_ENDPOINTS"][key];
    }

  // Gets a value of specified property in the configuration file
  get(key: any) {
    return this._config[key];
  }
}

export function ConfigFactory(config: ConfigurationService) {
  return () => config.load()
}

export function init() {
  return {
      provide: APP_INITIALIZER,
      useFactory: ConfigFactory,
      deps: [ConfigurationService],
      multi: true
  }
}

const ConfigModule = {
  init: init
}

export { ConfigModule };