import { Component, OnInit } from '@angular/core';

//Importar modelo
import {Post} from'src/app/post.model';
//importar el servicio
import { PostService} from 'src/app/post.service';

@Component({
  selector: 'tpf-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {
Posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe ((res) => {
      this.Posts= res.map((e) => {
        return{
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        };
      });
    });
  }

  deleteRecord= (post)=> this.postService.deletePost(post);

}
