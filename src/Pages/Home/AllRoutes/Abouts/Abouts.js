import React from "react";

const Abouts = () => {
  return (
    <div class="hero min-h-screen bg-base-200 rounded">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://i.ibb.co/sVg654y/suzit.jpg?w=260&h=400"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>

        <div className="p-5 mt-20">
        <h2 className="text-center mb-10 text-secondary font-bold text-2xl">About Myself</h2>
          <h2 className="mb-5">Degine & Developer By : Suzit Sarkar </h2>
          <p className="leading-loose  ">
            I was born in Hajigang district, Madhab Upazila. I have two sisters
            and my parents. I have completed Hse in 2021. Now I am studying in
            Uttara university at B.Sc. in computer science engineering. I’ve
            been working on web design and development since for helping people
            to build their website, manage and develop functionality. I’m
            Passionate at web design and development. I work a minimum of 13-14
            hours every day, I love to do this, it’s my life- everything. I
            learn new things every day.
          </p>
          </div>

          <h2 className="text-center mt-12 text-secondary text-2xl font-bold ">Profesional Skills</h2>
          <div className=" leading-loose grid grid-cols-1 lg:grid-cols-2 mt-10 p-5">
          <div>
                <ul>
                <li>HTML – HTML 5</li>
                <li> CSS – CSS 3</li>
                <li>JavaScript</li>
                <li>Bootstrap 5</li>
                <li>Tall Wind Css</li>
                <li>ReactJs</li>
                <li>MongoDb</li>
                <li>Node js</li>
                </ul>
          </div>

          <div>
                <ul>
                <li>Node Express</li>
                <li>My Squle</li>
                <li>Any kind of web design(Adobe XD, PSD)</li>
                <li>cPanel and server specialist</li>
                <li> Dynamic Development</li>
                <li>Shopify & Woocommerce</li>
                <li> Graphic Design</li>
                <li>On Page SEO</li>
                </ul>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Abouts;
