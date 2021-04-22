import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppModule } from "./app.module";
import { Employee } from "./employee";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiServerUrl = environment.apiBasedUrl;

    constructor(private httpClient: HttpClient) { }

    // public getEmployees(): Observable<Employee[]> {
    //     return this.httpClient.get<Employee[]>('${this.apiServerUrl}/employee/all');
    // }

    public getEmployees(): Observable<Employee[]> {
        console.log("summer");
        return this.httpClient.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
    }

    public addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(`${this.apiServerUrl}/employee/add`, employee);
    }

    public updateEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.put<Employee>(`${this.apiServerUrl}/employee/update`, employee);
    }

    public deleteEmployee(employeeId: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`);
    }

}