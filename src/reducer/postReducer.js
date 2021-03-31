const Post =(post=[{Name: 'vijay',
Age: 20,
id: 1,
Friends:"he,bye"},

{Name: 'jay',
Age: 20,
id: 2,
Friends:"he,bye"}

], action)=>{
    switch(action){
        case 'Edit':
            return post;

         case 'UPDATE':
             return post.map((pos) => (pos.id === action.payload.id ? action.payload : post));;
      
     default:
         return post;
    }
}

export default Post