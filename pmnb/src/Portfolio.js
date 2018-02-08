import React, { Component } from 'react';


class Portfolio extends Component {
  render() {
    return (
      <div>
        

              <section class="portfolio" id="portfolio">
              <div class="container">
                <h2 class="text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <hr/>
                <div class="row">
                  <div class="col-md-6 col-lg-4">
                    <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                      <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                          <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                      </div>
                      <img class="img-fluid" src="https://mir-s3-cdn-cf.behance.net/projects/202/0da28e35950405.Y3JvcCwxMjgwLDEwMDAsMCww.png" alt=""/>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                      <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                          <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                      </div>
                      <img class="img-fluid" src="https://mir-s3-cdn-cf.behance.net/projects/202/755db335839243.Y3JvcCwxMDI0LDgwMCwwLDA.jpg" alt=""/>
                    </a>
                  </div>
                  <div class="col-md-6 col-lg-4">
                    <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                      <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                        <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                          <i class="fa fa-search-plus fa-3x"></i>
                        </div>
                      </div>
                      <img class="img-fluid" src="https://mir-s3-cdn-cf.behance.net/projects/202/dd448d35765431.Y3JvcCwxMjczLDk5NSwwLDA.jpg" alt=""/>
                    </a>
                  </div>
                  
                </div>
              </div>
            </section>
  


      </div>
    );
  }
}

export default Portfolio;
