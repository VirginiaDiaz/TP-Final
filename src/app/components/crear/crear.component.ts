import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/post.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'tpf-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  public postForm:FormGroup;

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.postForm=this.formBuilder.group({
      nombre: ['',[Validators.required]],
      apellido:['',[Validators.required]],
      dni: ['',[Validators.required]],
      fnacimiento: ['',[Validators.required]],
      direccion: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      email: ['',[Validators.email]],
    });
    
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.postService.createPost(this.postForm.value)
    this.router.navigate([''])
  }

}
