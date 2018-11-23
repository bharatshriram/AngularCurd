import{Injectable} from '@angular/core';
import{Employee} from '../models/employee.model';
@Injectable()
export class EmployeeService{
    private listEmployess:Employee[]=[
        {
            id:1,
            name:'mark',
            gender:'male',
            contactPreference:'Email',
            email:'hema@erty.com',
            dateOfBirth:new Date('32/56/6789'),
            department:'IT',
            isActive:true,
            photoPath:'assets/images/male.jpg'
          },
          {
            id:1,
            name:'Juhee',
            gender:'Female',
            contactPreference:'Email',
            email:'hema@erty.com',
            dateOfBirth:new Date('32/56/6789'),
            department:'IT',
            isActive:true,
            photoPath:'assets/images/female.jpg'
          }

    ]; 
    getEmployees():Employee[]{
        return this.listEmployess;
        console.log( "---->"+this.listEmployess);
        alert("this.listEmployess"+this.listEmployess);
    }
    save(employee:Employee){
        this.listEmployess.push(employee);
      
    }
}   