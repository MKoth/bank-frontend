import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SecurityService } from "./../security/security.service";
import { MessageService } from 'primeng/components/common/messageservice';

@Injectable()
export class AudsatHttp {
  public messages = {
    ConflictErrorMsg: "Entidade já cadastrada.",
    ForbiddenErrorMsg: "Ação não permitida.",
    NotFoundErrorMsg: "Entidade não encontrada.",
    UnknownErrorMsg: "Ocorreu um erro inesperado."
  }

  constructor(
    private http: HttpClient,
    private auth: SecurityService,
    private messageService:MessageService
    ) {
  }

  public get<T>(url: string, messages = {}, options?: any): Promise<T> {
    options = this.setHeaders(options);
    return this.http.get<T>(url, options)
      .toPromise()
      .then(r => this.handleResponse(r))
      .catch(r => this.handleError(r,messages));
  }

  public rawGet<T>(url: string, messages = {}, options?: any): Promise<T> {
    options = this.setHeaders(options);
    options.responseType = 'blob'
    return this.http.get<T>(url, options)
      .toPromise()
      .then(r => this.handleResponse(r))
      .catch(r => this.handleError(r,messages));
  }

  public post<T>(url: string, body: any, messages = {}, options?: any): Promise<T> {
    options = this.setHeaders(options);
    return this.http.post<T>(url, body, options)
      .toPromise()
      .then(r => this.handleResponse(r))
      .catch(r => this.handleError(r,messages));
  }

  public delete<T>(url: string, messages = {}, options?: any): Promise<T> {
    options = this.setHeaders(options);
    return this.http.delete<T>(url, options)
      .toPromise()
      .then(r => this.handleResponse(r))
      .catch(r => this.handleError(r,messages));
  }

  public put<T>(url: string, body: any, messages = {}, options?: any): Promise<T> {
    options = this.setHeaders(options);
    return this.http.put<T>(url, body, options)
      .toPromise()
      .then(r => this.handleResponse(r))
      .catch(r => this.handleError(r,messages));
  }


  // public patch<T>(url: string, body: any, options?: any): Promise<T> {
  //   options = this.setHeaders(options);
  //   return this.http.patch<T>(url, body, options)
  //     .toPromise()
  //     .then(r => this.handleResponse(r))
  //     .catch(r => this.handleError(r));
  // }

  // public head<T>(url: string, options?: any): Promise<T> {
  //   options = this.setHeaders(options);
  //   return this.http.head<T>(url, options)
  //     .toPromise()
  //     .then(r => this.handleResponse(r))
  //     .catch(r => this.handleError(r));
  // }

  // public options<T>(url: string, options?: any): Promise<T> {
  //   options = this.setHeaders(options);
  //   return this.http.options<T>(url, options)
  //     .toPromise()
  //     .then(r => this.handleResponse(r))
  //     .catch(r => this.handleError(r));
  // }

  private setHeaders<T>(options: any): void {
    const session = JSON.parse(localStorage.getItem("session"));
    let header: HttpHeaders;
    if (session && session.token) {
      header = new HttpHeaders().set('Content-Type', 'application/json').append("Authorization", "Bearer " + session.token);
    } else {
      header = new HttpHeaders().set('Content-Type', 'application/json');
    }
    options = Object.assign({headers: header}, options, {observe: 'response'});
    return options;
  }

  private handleResponse<T>(response: any): any {
    return response.body;
  }

  private handleError<T>(response: any, messages: any): any {
    let msgs = Object.assign({},this.messages,messages);
    let message = "";
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      message = msgs.ForbiddenErrorMsg
      setTimeout(() => {
        this.auth.logout();
      }, 2000);
    } else if (response.status === 404) {
      message = msgs.NotFoundErrorMsg;
    } else if (response.status === 409) {
      message = msgs.ConflictErrorMsg;
    } else if (response.status === 500) {
      message = msgs.UnknownErrorMsg;
    }
    if(message!=null)
      this.messageService.add({ severity:'error', summary:'Erro', detail: message, closable:false, life:4000});
    return Promise.reject({status:response.status,message:message});
  }

}
