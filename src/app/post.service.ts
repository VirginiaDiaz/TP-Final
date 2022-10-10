import { Injectable } from '@angular/core';

//importar modulos para DB firestore
import{AngularFirestore} from '@angular/fire/compat/firestore';

//importar nuestro modelo
import{Post} from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore: AngularFirestore) { }

  //metodos para el CRUD

  getPosts(){
    return this.angularFirestore
    .collection("posts")
    .snapshotChanges()
  }

  getPostById(id){
    return this.angularFirestore
    .collection("posts")
    .doc(id)
    .valueChanges()
  }

  createPost(post: Post){
    return new Promise<any> ((resolve,reject) =>{
      this.angularFirestore
      .collection("posts")
      .add(post)
      .then( (response)=> {
        console.log(response)
      },
      (error) => {
        reject(error)
      })
    })

  }

  updatePost(post: Post, id){
    return this.angularFirestore
    .collection("posts")
    .doc(id)
    .update({
      nombre: post.nombre,
      apellido: post.apellido,
      dni: post.dni,
      fnacimiento: post.fnacimiento,
      direccion: post.direccion,
      telefono: post.telefono,
      email: post.email
    });
  }

  deletePost(post){
    return this.angularFirestore
    .collection("posts")
    .doc(post.id)
    .delete();
  }
}
