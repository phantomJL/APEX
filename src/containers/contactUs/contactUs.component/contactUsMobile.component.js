import React from 'react';

function ContactUsMobile (props) {
  return (
    <section className="p-4" style={{bottom: 0, position: 'absolute'}}>
      <section className="py-4">
        <div className="paragraph font-weight-bold">Address</div>
        <div className="large-title">New York</div>
      </section>
      <section className="py-4">
        <div className="large-title">hello@apexcomm.us</div>
      </section>
      <section className="row">
        <div className="col-4 py-2 font-weight-bold median-title">
          ABOUT US
        </div>
        <div className="col-4 py-2 font-weight-bold median-title">
          WORK
        </div>
        <div className="col-4 py-2 font-weight-bold median-title">
          GALLERY
        </div>
        <div className="col-4 py-2 font-weight-bold median-title">
          MEDIA RELATION
        </div>
        <div className="col-4 py-2 font-weight-bold median-title">
          CONTACT US
        </div>
      </section>
      <section className="d-flex justify-content-around">
        <a
          onClick={() =>
            window.open ('https://www.instagram.com/apexcomm/', '_blank')}
          class="instagram"
        >
          <i class="fab fa-instagram" />
        </a>
        <a
          onClick={() =>
            window.open ('https://www.weibo.com/u/5888176990', '_blank')}
          class="weibo"
        >
          <i class="fab fa-weibo" />
        </a>

        <a
          onClick={() =>
            window.open (
              'https://www.youtube.com/channel/UCiFfqtera5aCdOApxZzXgxg',
              '_blank'
            )}
          class="youtube"
        >
          <i class="fab fa-youtube" />
        </a> <a
          onClick={() => window.open ('https://vimeo.com/apexcomm', '_blank')}
          class="vimeo"
        >
          <i class="fab fa-vimeo-v" />
        </a>

      </section>

    </section>
  );
}
export default ContactUsMobile;
