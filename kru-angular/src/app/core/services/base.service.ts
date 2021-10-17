import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Params } from '@angular/router';
import { environment } from 'src/environments/environment';


export class BaseService<T, DtoT> {
  protected endpoint: string;

  constructor(protected http: HttpClient, resourcePath: string) {
    this.endpoint = environment.apiUrl + resourcePath;
  }

  find(params: Params): Observable<T[]> {
    return this.http.get<T[]>(this.endpoint, { params });
  }

  create(dto: DtoT | Partial<T>): Observable<T> {
    return this.http.post<T>(this.endpoint, dto);
  }

  findById(id: string): Observable<T> {
    return this.http.get<T>(`${this.endpoint}/${id}`);
  }

  update(id: string, body: DtoT): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${id}`, body)
  }

  remove(id: string): Observable<T> {
    return this.http.delete<T>(`${this.endpoint}/${id}`)
  }
}
