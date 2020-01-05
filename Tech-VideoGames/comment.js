const submit =document.querySelector('.comment-submit');
const commentList = document.querySelector('.comments');
const commentInput=document.querySelector('.comment-input');


function template(data)
{
    commentList.insertAdjacentHTML("beforeend", `
  <div class="comment flex items-start justify-start">
      <img class="comment-avatar" src="${data.avatar}" />
      <div class="flex-1">
        <h3 class="comment-author">${data.author}</h3>
        <p class="comment-body">${data.comment}</p>
      </div>
    </div>
  </div>`);
}


function appendComment(event)
{
    const data={
        avatar:"fotot/ylberi.jpg",
        comment: commentInput.value,
        author:"Ylber Gashi"
    }


    event.preventDefault();

    if(commentInput.value.length<1) return;
    

    template(data);
    commentInput.value="";

    localStorage.setItem('commentListing', commentList.innerHTML);
    localStorage.removeItem();
}


submit.addEventListener('click',appendComment, false);

const saved=localStorage.getItem('commentListing');

if(saved)
{
    commentList.innerHTML=saved;
}
