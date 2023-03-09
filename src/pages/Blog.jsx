
const Blog = () => {
  return (
    <div className="container md:grid grid-cols-3 gap-8 ">
      {/*
          <form className="justify-center flex   ">
            <select className="bg-lime-500 rounded-xl p-8 text-white w-2/5 text-3xl">
              <option selected>Selecciona una categoria</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </form>
    */}
      <div className="col-span-2 ">
        <div className="md:flex items-center gap-8 mb-6">
          <div>
            <img src="http://kodeforest.net/html/eco-friendly/extra-images/blog_listing_img_01.jpg" alt="imagen blog" />
          </div>
          <div>
            <div className="md:flex items-center gap-6">
              <p className="text-green-600 text-4xl text-center">
                <span className="font-bold text-5xl">
                  5 <br />
                </span>
                Jul
              </p>
              <p className="font-medium text-4xl">¿Que es la economia circular?</p>
            </div>
            <p className="font-light mb-6">es sistema economico y social que tiene como objetivo la produccion de bienes y servicios al tiempo...</p>
            <a className="bg-green-600 text-white py-4 px-7 rounded-full" href="#">Detalle de este blog</a>
          </div>
        </div>


        <div className="md:flex items-center gap-8">
          <div>
            <img src="http://kodeforest.net/html/eco-friendly/extra-images/blog_listing_img_01.jpg" alt="imagen blog" />
          </div>
          <div>
            <div className="md:flex items-center gap-6">
              <p className="text-green-600 text-4xl text-center">
                <span className="font-bold text-5xl">
                  5 <br />
                </span>
                Jul
              </p>
              <p className="font-medium text-4xl">¿Que es la economia circular?</p>
            </div>
            <p className="font-light mb-6">es sistema economico y social que tiene como objetivo la produccion de bienes y servicios al tiempo...</p>
            <a className="bg-green-600 text-white py-4 px-7 rounded-full" href="#">Detalle de este blog</a>
          </div>
        </div>
      </div>

      {/*columna 2*/}
      <div className="mx-auto">
        <p className="font-medium text-4xl mb-5">Blogs Recientes</p>
        <div className="flex gap-4">
          <div>
            <img src="http://kodeforest.net/html/eco-friendly/extra-images/blog_listing_img_01.jpg" alt="imagen blog" width="100" />
          </div>
          <div className="w-1/2">
            <p className="font-medium">¿Que es la economia circular?</p>
            <p className="text-gray-400">Fecha: 5 Jul</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img src="http://kodeforest.net/html/eco-friendly/extra-images/blog_listing_img_01.jpg" alt="imagen blog" width="100" />
          </div>
          <div className="w-1/2">
            <p className="font-medium">¿Que es la economia circular?</p>
            <p className="text-gray-400">Fecha: 5 Jul</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <img src="http://kodeforest.net/html/eco-friendly/extra-images/blog_listing_img_01.jpg" alt="imagen blog" width="100" />
          </div>
          <div className="w-1/2">
            <p className="font-medium">¿Que es la economia circular?</p>
            <p className="text-gray-400">Fecha: 5 Jul</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog
