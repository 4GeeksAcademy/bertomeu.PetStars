import React from 'react';


function LoginPage() {
  return (
    <div className="signup-page">
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="circle-3"></div>
      

      <div className="container d-flex flex-column align-items-center mt-5">
        <div className="card p-4 shadow-sm" style={{ width: '400px', borderRadius: '12px' }}>
          <h2 className="text-center mb-4">Log In</h2>
          <p className="text-center text-muted">Access your account to unlock exclusive features.</p>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your Password" />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="terms" />
              <label className="form-check-label" htmlFor="terms">
                I agree with <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Log In</button>
          </form>
          <div className="text-center mt-3">
            <p>Don't have an account? <a href="/signup">Sign up now</a></p>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="community-section mt-5 py-5" style={{ backgroundColor: '#FFAE80', borderRadius: '15px' }}>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        
        <div className="container text-center">
          <h3 className="mb-4">Connect with Pet Lovers</h3>
          <p>Join a vibrant community of pet enthusiasts.</p>
          <div className="row">
            <div className="col-md-4">
              <img
                src="https://i.cbc.ca/1.5077459.1553886010!/fileImage/httpImage/pets.jpg"
                alt="Share Pet Journey"
                className="img-fluid rounded"
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <h5 className="mt-3">Share Your Pet's Journey</h5>
              <p>Document and share your pet's adventures with friends.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/031/427/303/small_2x/happy-and-funny-animal-conceptual-surealistic-of-two-smiling-cute-golden-retriever-dogs-taking-selfie-together-in-sunny-day-cloudy-blue-sky-as-background-ai-generative-photo.jpg"
                alt="Find New Friends"
                className="img-fluid rounded"
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <h5 className="mt-3">Find New Friends</h5>
              <p>Meet fellow pet owners and make lasting connections.</p>
            </div>
            <div className="col-md-4">
              <img
                src="https://images.pexels.com/photos/15921390/pexels-photo-15921390/free-photo-of-saltando-animal-mascota-fondo-de-pantalla.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Stay Updated"
                className="img-fluid rounded"
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
              <h5 className="mt-3">Stay Updated</h5>
              <p>Get the latest news and tips for pet care.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
