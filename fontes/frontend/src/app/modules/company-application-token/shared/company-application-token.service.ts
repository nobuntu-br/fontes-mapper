import { Injectable, Injector } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyApplicationToken } from "app/modules/company-application-token/shared/company-application-token.model";
import { BaseResourceService } from 'app/shared/services/shared.service'; 
import { environment } from 'environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class CompanyApplicationTokenService extends BaseResourceService<CompanyApplicationToken> {

  protected http: HttpClient 

  constructor(protected override injector: Injector) { 
    var url = environment.backendUrl+"/api/companyApplicationToken"; 

    super(url, injector, CompanyApplicationToken.fromJson) 
  } 
}
