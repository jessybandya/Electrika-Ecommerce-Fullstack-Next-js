import Header from "@components/Header";
import Categories from "./Categories";
import {datas} from "@assets/data/categories/data";


// export const getStaticPaths = async () => {
//   const paths = [];

//   datas.forEach((category) => {
//     for (let id = 1; id <= 5; id++) {
//       paths.push({
//         params: {
//           categoryID: category.id,
//           id: id.toString(),
//         },
//       });
//     }
//   });

//   return {
//     paths,
//     fallback: true, // false or "blocking"
//   };
// };


async function getAllData() {
    const res = await fetch("https://electrikacomputers.co.ke/backend/php/getelectronics.php");
    const data = await res.json();
    return data;
  }
  
  async function fetchImagesForID(electronicID) {
    const response = await fetch(`https://electrikacomputers.co.ke/backend/php/getimages.php?electronicId=${electronicID}`);
    const images = await response.json();
    return images;
  }
  
export default async function Category({ params }) {
    const allData = await getAllData();
    const imagesArray = [];
  
    for (const data of allData) {
      const images = await fetchImagesForID(data.id);
      imagesArray.push({ id: data.id, images: images });
    }
  return (
    <div>
    <Header />
     <Categories params={params} allData={allData} images={imagesArray}/>
    </div>
  )
}