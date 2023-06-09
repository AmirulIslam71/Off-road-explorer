import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Supports = () => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="bg-slate-800">
      <div className="text-white text-center container mx-auto">
        <h5 className="italic text-xl lg:text-2xl font-mono p-3">
          Our support
        </h5>
        <h2 className="font-bold text-2xl lg:text-4xl text-orange-600">
          Customers Support services
        </h2>
      </div>
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto"
        data-aos="fade-up-right"
        data-aos-delay="500"
      >
        <div className="card bg-slate-100 my-10">
          <div className="avatar mt-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto p-2">
              <img src="https://i.ibb.co/5RDCyVy/respon.jpg" />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Fully Responsive</h2>
            <p className="text-sm">
              Addepting to all screens: Your users can access the contents of
              your Module site from mobile phones to desktop computers.
            </p>
          </div>
        </div>
        <div className="card bg-slate-300 my-10">
          <div className="avatar mt-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto p-4">
              <img src="https://i.ibb.co/989XtR0/documentation.png" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">
              Multi language Support
            </h2>
            <p className="text-sm">
              Theme Lambda provides a full and native support for multilingual
              websites in LTR and RTL languages.
            </p>
          </div>
        </div>
        <div className="card bg-slate-100 my-10">
          <div className="avatar mt-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto p-5">
              <img src="https://i.ibb.co/HPXzr9V/multi.png" />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Fully Customizable</h2>
            <p className="text-sm">
              Layouts, plugins, backgrounds and unlimited color options are all
              easy to set up in the themes settings panel.
            </p>
          </div>
        </div>
        <div className="card bg-slate-300 my-10">
          <div className="avatar mt-4">
            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto p-2">
              <img src="https://i.ibb.co/bzSFD8b/settings.png" />
            </div>
          </div>
          <div className="card-body text-center">
            <h2 className="text-2xl font-bold">Full Documentation</h2>
            <p className="text-sm">
              Detailed descriptions of all theme options and examples for the
              included components will ease up your work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supports;
