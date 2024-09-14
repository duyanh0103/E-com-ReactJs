import React from "react";
const listBanner = [
  {
    url: "https://file.hstatic.net/200000722513/file/gearvn-voucher-9-9-subbanner.png",
    alt: "Subbanner 1",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/layout_web_-08.png",
    alt: "Subbanner 2",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/layout_web_-07.png",
    alt: "Subbanner 3",
  },
  {
    url: "https://file.hstatic.net/200000722513/file/layout_web_-06.png",
    alt: "Subbanner 4",
  },
];
const SubBanner = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {listBanner.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-3">
            <div className="subbanner-item" key={index}>
              <a href="#">
                <img
                  src={item.url}
                  alt={item.alt}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubBanner;
