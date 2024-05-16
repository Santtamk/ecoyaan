import React from "react";
import './css/nav.css';

function Footer() {
  return (
    <>
      <footer class="bg-body-tertiary text-center footer_wrapper">
        {/* <!-- Grid container --> */}
        <div class="container p-4">
          {/* <!-- Section: Social media --> */}
          <section class="mb-4">
            {/* <!-- Facebook --> */}
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            {/* <!-- Twitter --> */}
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            {/* <!-- Google --> */}
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>

            {/* <!-- Instagram --> */}
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            {/* <!-- Linkedin --> */}
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            {/* <!-- Github --> */}
            <a
              data-mdb-ripple-init
              class="btn btn-outline btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Form --> */}
          <section class="">
            <form action="">
              {/* <!--Grid row--> */}
              <div class="row d-flex justify-content-center">
                {/* <!--Grid column--> */}
                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div class="col-md-5 col-12">
                  {/* <!-- Email input --> */}
                  <div data-mdb-input-init class="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example24"
                      class="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                {/* <!--Grid column--> */}

                {/* <!--Grid column--> */}
                <div class="col-auto">
                  {/* <!-- Submit button --> */}
                  <button
                    data-mdb-ripple-init
                    type="submit"
                    class="btn btn-outline mb-4 action_btn"
                  >
                    Subscribe
                  </button>
                </div>
                {/* <!--Grid column--> */}
              </div>
              {/* <!--Grid row--> */}
            </form>
          </section>
          <section>
            {/* <!--Grid row--> */}
            <div class="row">
              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body" href="#!">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    Sell on Ecoyaan
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    Careers
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body" href="#!">
                    Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    Terms of use
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body" href="#!">
                    Kindkarma E-Retail Private Limited
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    CIN: U47912KA2023PTC182592
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    Telephone: +91 9980490777
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a class="text-body" href="#!">
                    1-N-12T-781/1 
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    Sri Krishna Vilasa,
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    Urvastores,
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    Ashoknagar(MR),
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    Mangalore - 575006
                    </a>
                  </li>
                  <li>
                    <a class="text-body" href="#!">
                    Karnataka, India
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </section>
          {/* <!-- Section: Links --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div
          class="text-center p-3"
          style={{ backgroundColor:'rgba(0, 0, 0, 5)'}}
        >
          © 2024 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            ECOYAAN
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer --> */}
    </>
  );
}

export default Footer;
