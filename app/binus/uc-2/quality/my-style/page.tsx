import React from 'react';

interface CourseCardProps {
  image: string;
  category: string;
  title: string;
  targetAudience: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, category, title, targetAudience }) => {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow w-full bg-white rounded-xl shadow-lg max-md:mt-9">
        <img src={image} alt={title} className="w-full aspect-[2.5]" />
        <div className="text-xs font-bold leading-5 text-center text-orange-400">{category}</div>
        <div className="flex flex-col p-3">
          <h3 className="text-sm font-semibold leading-5 text-neutral-900">{title}</h3>
          <div className="flex flex-col mt-4 text-xs font-semibold leading-4">
            <div className="text-gray-500">Target Audience</div>
            <div className="flex flex-col justify-center mt-1.5 whitespace-nowrap text-stone-500">
              <div className="flex flex-col flex-wrap justify-center content-center mr-auto">
                <div className="justify-center px-1.5 py-0.5 bg-white rounded border border-solid border-stone-300">
                  {targetAudience}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-4 w-full">
            <div className="flex-1 text-xs font-semibold leading-3 text-gray-500">
              Do you like this recommendation?
            </div>
            <div className="flex gap-2 my-auto">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff64a048ffe7f53bc6c507d466da353fa3de8453b97ea7559ddba7286786c5d4?apiKey=d9be0c21d3f04234b0773d24d90d90a3&" alt="Thumbs up" className="shrink-0 w-4 aspect-square" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d94aa71ebcb4bcb7ad2a143afb30bd5961fc6d1c99a8e1fc78ea402d5a1a58ab?apiKey=d9be0c21d3f04234b0773d24d90d90a3&" alt="Thumbs down" className="shrink-0 w-4 aspect-square" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyComponent: React.FC = () => {
  const courses = [
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0085b9cb1c39e07157c9511e612815e3dac793b551f9fc850238a2772dd204d7?apiKey=d9be0c21d3f04234b0773d24d90d90a3&',
      category: 'Based on interest',
      title: 'Complete python developer for zero to hero',
      targetAudience: 'Staff',
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/266e482221b11387ef0a5417cc14542ce1ee2cad7a646e32d842436228164734?apiKey=d9be0c21d3f04234b0773d24d90d90a3&',
      category: 'Based on interest',
      title: 'Complete python developer for zero to hero',
      targetAudience: 'Staff',
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/34c723dd49bf9afc2decacf0bff7245731f4bc2d9f53f2c399758b8be4456f95?apiKey=d9be0c21d3f04234b0773d24d90d90a3&',
      category: 'Based on course you finished',
      title: 'Complete python developer for zero to hero',
      targetAudience: 'Staff',
    },
    {
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ba5f59685e2b622f51248b4be6b1a71867ff8d2803545bfff45ee5b767bbd69a?apiKey=d9be0c21d3f04234b0773d24d90d90a3&',
      category: 'Based on course you finished',
      title: 'Complete python developer for zero to hero',
      targetAudience: 'Staff',
    },
  ];

  return (
    <div className="flex flex-col max-md:max-w-full">
      <h2 className="text-xl font-bold leading-6 text-black max-md:max-w-full">Course that might you like</h2>
      <div className="justify-between mt-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              image={course.image}
              category={course.category}
              title={course.title}
              targetAudience={course.targetAudience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;