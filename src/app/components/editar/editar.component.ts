import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tpf-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  public editForm: FormGroup;
  postRef:any

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.editForm= this.formBuilder.group({
      nombre: [''],
      apellido:[''],
      dni: [''],
      fnacimiento: [''],
      direccion: [''],
      telefono: [''],
      email: [''],
    })
   }

  ngOnInit(): void {
    const id= this.activeRoute.snapshot.paramMap.get('id')
    
    this.postService.getPostById(id).subscribe( res =>{
      this.postRef = res
      this.editForm= this.formBuilder.group({
        nombre: [this.postRef.nombre],
        apellido:[this.postRef.apellido],
        dni: [this.postRef.dni],
        fnacimiento: [this.postRef.fnacimiento],
        direccion: [this.postRef.direccion],
        telefono: [this.postRef.telefono],
        email: [this.postRef.email],
      })
    })
  }

  onSubmit(){
    const id= this.activeRoute.snapshot.paramMap.get('id');
    this.postService.updatePost(this.editForm.value, id);
    this.router.navigate(['']);
  }

}
