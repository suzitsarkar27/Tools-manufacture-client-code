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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-96 flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ranting</span>
                </label>
                <input
                  type="text"
                  name="ranting"
                  placeholder="Type Ranting"
                  className="input input-bordered w-full max-w-xs" 
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review Infro</span>
                </label>
                <textarea name="textarea" className="textarea textarea-bordered h-24">
    
                 </textarea>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value={'Submit'} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
