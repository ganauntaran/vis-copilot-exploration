import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col justify-center bg-gray-100">
      <div className="flex flex-col justify-center pb-20 w-full bg-gray-500 bg-opacity-80 max-md:max-w-full">
        <div className="flex flex-col mb-20 w-full max-md:mb-10 max-md:max-w-full">
          <div className="flex flex-col justify-center px-16 w-full bg-yellow-800 shadow-sm max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between px-8 py-5 mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
              <div className="flex gap-5 justify-between">
                <div className="flex justify-center items-center my-auto">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b3cad048cf2d8db79a1cc204010da24ac17a653e28fd118f5fb2301a1a65490?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
                    className="aspect-[1.85] w-[68px]"
                  />
                </div>
                <div className="px-4 pt-2.5 pb-3 text-base font-semibold text-center text-white rounded-3xl bg-white bg-opacity-10">
                  Pengaturan Akun
                </div>
                <div className="px-4 pt-2.5 pb-3 text-base font-medium text-center rounded-3xl text-white text-opacity-80">
                  Audit Log
                </div>
              </div>
              <div className="flex gap-5 justify-between rounded-3xl">
                <div className="flex flex-col my-auto">
                  <div className="text-sm font-semibold text-white">
                    Esther Howard
                  </div>
                  <div className="text-xs text-white text-opacity-50">
                    Admin Pusat
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/72ac572355657ddc4027f6990d0a024b0a109a71e4f22633536df0dda685baa6?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
                  className="shrink-0 w-10 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="justify-center items-start py-4 pr-16 pl-28 w-full text-2xl font-semibold leading-6 text-gray-900 bg-white shadow-sm max-md:pr-5 max-md:pl-8 max-md:max-w-full">
            Edit Account
          </div>
          <div className="flex justify-center items-center px-16 py-10 w-full text-sm leading-5 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[594px]">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="font-semibold tracking-normal text-gray-500 max-md:max-w-full">
                    NIP
                  </div>
                  <div className="flex gap-0 mt-1 text-gray-900 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex-1 justify-center items-start px-3 py-2.5 whitespace-nowrap bg-gray-200 rounded-md border border-gray-300 border-solid max-md:pr-5 max-md:max-w-full">
                      1998121112391024
                    </div>
                    <div className="justify-center py-2.5 pr-4 pl-4 font-medium bg-amber-300 rounded-none border border-gray-300 border-solid">
                      Check NIP
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4 whitespace-nowrap max-md:max-w-full">
                  <div className="font-semibold tracking-normal text-gray-500 max-md:max-w-full">
                    Udomain
                  </div>
                  <div className="justify-center items-start px-3 py-2.5 mt-1 text-gray-900 bg-gray-200 rounded-md border border-gray-300 border-solid max-md:pr-5 max-md:max-w-full">
                    John_Doe
                  </div>
                </div>
                <div className="overflow-hidden relative flex-col pb-32 mt-4 font-semibold tracking-normal text-gray-500 whitespace-nowrap rounded-lg shadow-xl min-h-[258px] max-md:pb-10 max-md:max-w-full">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e27b12254a1e79c6b7ccb1c1ad03b5c7a62bcb517400be903be6cd26ef06aa1?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e27b12254a1e79c6b7ccb1c1ad03b5c7a62bcb517400be903be6cd26ef06aa1?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e27b12254a1e79c6b7ccb1c1ad03b5c7a62bcb517400be903be6cd26ef06aa1?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e27b12254a1e79c6b7ccb1c1ad03b5c7a62bcb517400be903be6cd26ef06aa1?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e27b12254a1e79c6b7ccb1c1ad03b5c7a62bcb517400be903be6cd26ef06aa1?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e27b12254a1e79c6b7ccb1c1ad03b5c7a62bcb517400be903be6cd26ef06aa1?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e27b12254a1e79c6b7ccb1c1ad03b5c7a62bcb517400be903be6cd26ef06aa1?apiKey=d9be0c21d3f04234b0773d24d90d90a3&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e27b12254a1e79c6b7ccb1c1ad03b5c7a62bcb517400be903be6cd26ef06aa1?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
                    className="object-cover absolute inset-0 size-full"
                  />
                  Nama
                </div>
                <div className="flex flex-col mt-1.5 max-md:max-w-full">
                  <div className="font-semibold tracking-normal text-gray-500 max-md:max-w-full">
                    Role
                  </div>
                  <div className="flex gap-5 justify-between px-3 py-2.5 mt-1 text-gray-900 bg-white rounded-md border border-gray-300 border-solid max-md:flex-wrap max-md:max-w-full">
                    <div>Supervisor Cabang</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e5bc356f589a8524c2f9133941beabc5c0c688d7a1091923041235d3e019e97?apiKey=d9be0c21d3f04234b0773d24d90d90a3&"
                      className="shrink-0 w-5 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-end px-16 mt-12 text-center text-gray-900 whitespace-nowrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-2">
                  <div className="justify-center px-6 py-2.5 font-medium bg-gray-200 rounded-[100px] max-md:px-5">
                    Cancel
                  </div>
                  <div className="justify-center px-8 py-2.5 font-semibold tracking-normal bg-amber-300 rounded-[100px] max-md:px-5">
                    Save
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
