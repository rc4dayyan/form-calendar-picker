import React from 'react';
import './App.css';
import FormContextProvider from './contexts/FormContext';
import FormSearch from './components/FormSearch';

function App() {
  return (
    <div>
      {/* navbar */}
      <header>
        <nav className="nav-wrapper transparent">
          <div className="container">
            <a href="#!" className="brand-logo">Photo Ninja</a>
            <a href="#!" className="sidenav-trigger" data-target="mobile-menu">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#photos">Photo's</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <ul className="sidenav grey lighten-2" id="mobile-menu">
              <li><a href="#!">Photo's</a></li>
              <li><a href="#!">Services</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </div>
        </nav>

        <div className="App">
          <FormContextProvider>
            <FormSearch />
          </FormContextProvider>
        </div>
      </header>

      {/* contact form */}
      <section className="section container scrollspy" id="contact">
        <div className="row">
          <div className="col s12 l5">
            <h2 className="indigo-text text-darken-4">Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
            <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
            <p>Mauris dolor augue, vulputate in pharetra ac, facilisis nec libero. Fusce condimentum gravida urna, vitae scelerisque erat ornare nec.</p>
          </div>
          <div className="col s12 l5 offset-l2">
            <form>
              <div className="input-field">
                <i className="material-icons prefix">email</i>
                <input type="email" id="email" />
                <label for="email">Your Email</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">message</i>
                <textarea id="message" className="materialize-textarea" cols="20" rows="20"></textarea>
                <label for="message">Your Message</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">date_range</i>
                <input type="text" id="date" className="datepicker" />
                <label for="date">Choose a date you need me for...</label>
              </div>
              <div className="input-field">
                <p>Services required:</p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Photography</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Photo Editing</span>
                  </label>
                </p>
              </div>
              <div className="input-field center">
                <button className="btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="page-footer grey darken-3">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5>About Me</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#">Facebook</a></li>
                <li><a className="grey-text text-lighten-3" href="#">Twitter</a></li>
                <li><a className="grey-text text-lighten-3" href="#">Linked In</a></li>
                <li><a className="grey-text text-lighten-3" href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright grey darken-4">
          <div className="container center-align">&copy; 2018 Photo Ninja</div>
        </div>
      </footer>
      
    </div>
  );
}

export default App;
