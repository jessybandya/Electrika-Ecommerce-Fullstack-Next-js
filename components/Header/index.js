import Header1 from './Header1'

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

  
export default async function Header() {
  const allData = await getAllData();
  const imagesArray = [];

  for (const data of allData) {
    const images = await fetchImagesForID(data.id);
    imagesArray.push({ id: data.id, images: images });
  }

  
  return (
    <>

      <Header1 allData={allData} images={imagesArray}/>
    </>
  )
}