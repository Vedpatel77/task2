import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private bhttp:HttpClient) { }


  home_blog(){
    return this.bhttp.get('http://localhost:3000/homeblogs');
  }

blogs(){
  return this.bhttp.get('http://localhost:3000/blogs');
}
 blog(){
  return this.bhttp.get('http://localhost:3000/userData');
 }

 postuser(data : any){
  return this.bhttp.post<any>('http://localhost:3000/userData',data)
  .pipe(map((result:any)=>{
    return result;
  }))
 }
 postblog(data : any){
  return this.bhttp.post<any>('http://localhost:3000/blogs',data)
  .pipe(map((result:any)=>{
    return result;
  }))
 }
 getuser(){
  return this.bhttp.get<any>('http://localhost:3000/userData')
  .pipe(map((result:any)=>{
    return result;
  }))
 }
 updateuser(data : any,id : number){
  return this.bhttp.put<any>('http://localhost:3000/userData'+'/'+id,data)
  .pipe(map((result:any)=>{
    return result;
  }))
 }
 updateblog(data : any,id : number){
  return this.bhttp.put<any>('http://localhost:3000/blogs'+'/'+id,data)
  .pipe(map((result:any)=>{
    return result;
  }))
 }
 deleteuser(id : number){
  return this.bhttp.delete<any>('http://localhost:3000/userData'+"/"+id)
  .pipe(map((result:any)=>{
    return result;
  }))
 }
 deleteblog(id : number){
  return this.bhttp.delete<any>('http://localhost:3000/blogs'+"/"+id)
  .pipe(map((result:any)=>{
    return result;
  }))
 }
 viewuser(id : number){
  return this.bhttp.get<any>('http://localhost:3000/userData'+"/"+id)
  .pipe(map((result:any)=>{
    return result;
  }))
 }
 viewblog(id : number){
  return this.bhttp.get<any>('http://localhost:3000/blogs'+"/"+id)
  .pipe(map((result:any)=>{
    return result;
  }))
 }
// deleteuser(id:number):Observable<number>{
//   let httpheaders=new HttpHeaders()
//   .set('Content-type','application/Json');
//   let options={
//     headers:httpheaders
//   };
//   return this.bhttp.delete<number>('http://localhost:3000/userData'+"/"+id);
// }

}
