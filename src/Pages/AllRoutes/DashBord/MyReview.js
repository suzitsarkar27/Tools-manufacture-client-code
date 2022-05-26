import React from "react";

const MyReview = () => {

    const handelSubmit=(e)=>{
        e.preventDefault();
        const data={
            ranting:e.target.ranting.value,
            textarea:e.target.textarea.value,
        }
        console.log(data)
    }
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content w-96 flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelSubmit} class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Ranting</span>
                </label>
                <input
                  type="text"
                  name="ranting"
                  placeholder="Type Ranting"
                  class="input input-bordered w-full max-w-xs" 
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Review Infro</span>
                </label>
                <textarea name="textarea" class="textarea textarea-bordered h-24">
    
                 </textarea>
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                  <input class="btn btn-primary" type="submit" value={'Submit'} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
